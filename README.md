# React Dashboard Application

This is a fully functional React.js-based dashboard application that includes various user management features like viewing users' statistics, searching users, sorting users, and changing settings. It interacts with a mock API to fetch user data and allows the user to perform actions such as viewing user details and logging out.

## Features:
- **Dashboard**: Displays user statistics like total users, active users, and inactive users.
- **User Table**: Displays a sortable and filterable table of users with their details like name, email, status, and created date.
- **Settings**: Allows users to update their profile, enable/disable two-factor authentication, and switch between light and dark themes.
- **Logout**: A simple logout page that clears user data and redirects the user to the home page.

## Prerequisites:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

## How to Install and Run the Project Locally

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repository-name.git
```
### 2. Navigate to the Project Directory
```bash
cd your-repository-name
```
### 3. Install Dependencies
Run the following command to install the required dependencies:

```bash
npm install
```
```bash
npm install react react-dom react-router-dom axios bootstrap tailwindcss
```
### 4. Start the Development Server
After the installation is complete, run the following command to start the development server:
```bash
npm run start
```
This will open the application in your default browser at http://localhost:3000/.

## Key Libraries Used and Why
**1. React.js**:  
**Why?** React is a powerful library for building user interfaces. It enables the creation of reusable UI components and allows for fast, dynamic rendering of content. It helps in developing modern, scalable, and maintainable web applications.  
**2. React Router DOM**:  
**Why?** React Router is used for handling routing in the React application. It helps in navigating between different pages like Dashboard, Settings, and Logout without reloading the entire page.  
**3. Bootstrap**:  
**Why?** Bootstrap is used for responsive design and pre-built UI components. It helps quickly style the components and make the application responsive across different screen sizes.  
**4. Axios**:  
**Why?** Axios is used for making HTTP requests to an external API. In this project, it fetches user data from a mock API (jsonplaceholder.typicode.com). It handles both API requests and responses.  
**5. Context API**:  
**Why?** The Context API is used for managing global state, especially for user data across multiple components. It simplifies passing data through the component tree without the need to pass props manually at every level.  
**6. Tailwind CSS**:  
**Why?** Tailwind CSS is a utility-first CSS framework that provides a high level of customization. It helps quickly apply styling directly in the JSX code, making the styling process easier and faster.  

## Overview of the Dashboard Features  
**1. Navbar**  
 The navigation bar includes a logo, home link, settings link, and logout button. It also adapts for mobile devices with a hamburger menu.  
**2. User Stats Section**  
This section displays three key statistics:  
Total Users: Displays the total number of users.  
Active Users: Displays the number of users who have an active status.  
Inactive Users: Displays the number of users with an inactive status.  
Each statistic is represented as a card with a gradient background and an appropriate emoji.  
**3. User Table**  
The user table displays user data including name, email, status, and created date.  
The table supports search and sorting functionality:  
Search: Users can search for users by name.  
Sorting: The table columns are clickable to sort the data by name, email, status, or created date in ascending or descending order.  
**4. Settings Page**  
This page allows the user to update their profile (name, email, and password), enable or disable two-factor authentication, and switch between light and dark themes.  
**5. Logout** 
When the user logs out, their data is cleared, and they are redirected back to the home page.  
## Folder Structure
```graphql
Copy code
src/
│
├── assets/                 # Static files like images
│
├── components/             # Reusable components (Navbar, Loader, UserTable, etc.)
│
├── context/                # Context API for managing global state
│
├── pages/                  # Pages like Dashboard, Settings, Logout
│
├── services/               # API calls (fetchUsers)
│
├── App.js                  # Main App component that renders routes and providers
│
├── index.css               # Tailwind CSS and global styles
│
└── package.json            # Project dependencies and scripts
