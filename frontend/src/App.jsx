import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import ListUsersPage from './pages/ListUsersPage';
import CreateUserPage from './pages/CreateUserPage';
import UserDetailsPage from './pages/UserDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ListUsersPage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: '/users',
        element: <ListUsersPage />,
    },
    {
        path: '/create',
        element: <CreateUserPage />,
    },
    {
        path: '/users/:userId',
        element: <UserDetailsPage />,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
