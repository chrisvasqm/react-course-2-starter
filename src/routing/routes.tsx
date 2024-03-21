import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ErrorPage from "./ErrorPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <HomePage /> },
            { path: '*', element: <ErrorPage /> },
            { path: 'users', element: <UserListPage /> },
            { path: 'users/:id', element: <UserDetailPage /> },
            { path: 'contact', element: <ContactPage /> },
        ]
    }
])

export default router;