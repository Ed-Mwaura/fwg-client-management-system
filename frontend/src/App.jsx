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
        path: '/customers',
        element: <ListUsersPage />,
    },
    {
        path: '/customers/create',
        element: <CreateUserPage />,
    },
    {
        path: '/customers/:userId',
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
