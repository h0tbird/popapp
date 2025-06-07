import { FunctionalComponent } from 'preact';

const Home: FunctionalComponent = () => {
  return (
    <div class="page home-page">
      <h1>Welcome to PopApp</h1>
      <p>Coding apps with a "vibe".</p>
      <div class="home-features">
        <h2>Features</h2>
        <ul>
          <li>Authentication with Google</li>
          <li>Fast and lightweight with Preact</li>
          <li>TypeScript for type safety</li>
          <li>Modern UI with a "vibe"</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
