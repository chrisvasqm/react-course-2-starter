import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetail from "./UserDetail";
import UsersPage from "./UsersPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <HomePage /> },
            { path: '*', element: <ErrorPage /> },
            { path: 'contact', element: <ContactPage /> },
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