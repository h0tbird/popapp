# popapp.com Website Structure Terminology

This document defines the key structural elements and components used in the popapp.com website architecture to maintain consistent terminology when discussing the layout and making changes.

## Main Structural Elements

### 1. Navigation Bar
- **Definition**: The top purple bar containing the logo and navigation links
- **Location**: Top of every page
- **Contents**: popapp.com logo, Home link, Profile link, Dashboard link, Login/Logout links
- **CSS Classes**: `nav`, `nav-container`, `nav-logo`, `nav-links`
- **Component File**: `/src/components/Navigation.tsx`

### 2. Header Area
- **Definition**: The light gray section displaying the current page title
- **Location**: Directly below the Navigation Bar
- **Contents**: Current page title
- **CSS Classes**: `header`, `page-header`
- **Component File**: `/src/components/Header.tsx`

### 3. Content Container
- **Definition**: The main area that holds the content specific to each page
- **Location**: Below the Header Area, fills most of the viewport
- **CSS Classes**: `main`
- **HTML Element**: `<main>` in `index.tsx`

### 4. Page Content
- **Definition**: The actual content within the Content Container for a specific page
- **Location**: Inside the Content Container
- **CSS Classes**: `page`, combined with page-specific classes (e.g., `home-page`)
- **Component Files**: Located in `/src/pages/`

## Page-Specific Elements

### 5. Home Content
- **Definition**: The welcome message and features list on the Home page
- **Location**: Within the Content Container on the Home page
- **CSS Classes**: `home-page`, `home-features`
- **Component File**: `/src/pages/Home.tsx`

### 6. Dashboard Widgets
- **Definition**: The cards or information displays shown on the Dashboard page
- **Location**: Within the Content Container on the Dashboard page
- **CSS Classes**: `dashboard-page`, `dashboard-content`, `dashboard-card`, `dashboard-action`
- **Component File**: `/src/pages/Dashboard.tsx`

### 7. Profile Information
- **Definition**: The user details and options displayed on the Profile page
- **Location**: Within the Content Container on the Profile page
- **CSS Classes**: `profile-page`, `profile-container`, `profile-info`, `profile-avatar`, `profile-details`
- **Component Files**: `/src/pages/ProfilePage.tsx`, `/src/components/Profile.tsx`

### 8. Authentication UI
- **Definition**: The login form and social login buttons on the Login page
- **Location**: Within the Content Container on the Login page
- **CSS Classes**: `login-page`, `login-container`, `google-signin-button`
- **Component Files**: `/src/pages/LoginPage.tsx`, `/src/components/Login.tsx`

## Layout Regions

### 9. App Shell
- **Definition**: The combination of Navigation Bar and Header Area that remains consistent across pages
- **Location**: Top portion of every page
- **Components**: Navigation Bar, Header Area
- **Implementation**: Defined in `index.tsx` as wrapper components

### 10. Main Area
- **Definition**: The entire region below the App Shell where page content appears
- **Location**: Between the Header Area and the bottom of the viewport
- **CSS Classes**: No specific class, corresponds to the `<main>` element
- **HTML Element**: `<main>` in `index.tsx`

### 11. Footer (Future Addition)
- **Definition**: The bottom section of the website (currently not implemented)
- **Location**: Bottom of every page, below all content
- **Proposed CSS Classes**: `footer`

## Interactive Elements

### 12. Nav Links
- **Definition**: The clickable items in the Navigation Bar
- **Location**: Within the Navigation Bar
- **CSS Classes**: Links within `nav-links`, with `active` class for current page
- **Implementation**: Uses `useLocation()` from preact-iso to determine active state

### 13. Auth Buttons
- **Definition**: Buttons used for login/logout functionality
- **Location**: Login page and Profile page
- **CSS Classes**: `google-signin-button`, `sign-out-button`

### 14. Action Buttons
- **Definition**: Any buttons within pages that perform specific actions
- **Location**: Various locations within page content
- **CSS Classes**: Varies by purpose, e.g., `dashboard-action`

## Technical Components

### 15. Protected Routes
- **Definition**: Routes that require authentication to access
- **Implementation**: Uses `ProtectedRoute` component to check auth state
- **Component File**: `/src/components/ProtectedRoute.tsx`

### 16. Authentication Context
- **Definition**: React context that provides authentication state throughout the app
- **Implementation**: Uses Firebase Auth with a context provider
- **Component File**: `/src/contexts/AuthContext.tsx`

### 17. Router
- **Definition**: The navigation system that handles URL-based routing
- **Implementation**: Uses preact-iso for routing
- **Location**: Defined in `index.tsx` within the `<main>` element

---

*This terminology document will be updated as the application evolves with new components and structural elements.*
