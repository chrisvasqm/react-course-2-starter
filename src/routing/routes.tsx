import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ErrorPage from "./ErrorPage";
import ContactPage from "./ContactPage";

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/*', element: <ErrorPage /> },
    { path: '/users', element: <UserListPage /> },
    { path: '/contact', element: <ContactPage /> },
])

export default router;