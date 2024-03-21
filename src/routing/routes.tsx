import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetail from "./UserDetail";
import UsersPage from "./UsersPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'contact', element: <ContactPage /> },
            { path: 'login', element: <LoginPage /> },

        ]
    },
    {
        element: <PrivateRoutes />,
        children: [
            {
                path: 'users',
                element: <UsersPage />,
                children: [
                    { path: ':id', element: <UserDetail /> },
                ]
            },
        ]
    }
])

export default router;