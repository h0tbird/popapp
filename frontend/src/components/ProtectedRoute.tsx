import { FunctionComponent } from 'preact';
import { Route, RouteProps } from 'preact-router';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps extends RouteProps {
  component: any;
  path: string;
}

const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { currentUser } = useAuth();

  // With preact-router we need a different approach than React Router
  // This is a simplified version that will redirect to login if not authenticated
  return (
    <Route
      {...rest}
      component={(props: any) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          // Redirect to login page
          (typeof window !== 'undefined' && (window.location.href = '/login'), null)
        );
      }}
    />
  );
};

export default ProtectedRoute;
