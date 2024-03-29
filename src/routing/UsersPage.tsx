import { Navigate, Outlet } from "react-router-dom";
import UserList from "./UserList";
import useAuth from "./hooks/useAuth";
import NavBar from "./NavBar";

function UsersPage() {
    const { user } = useAuth();
    if (!user) return <Navigate to={'/login'} />

    return (
        <>
            <NavBar />
            <div className="row">
                <div className="col">
                    <UserList />
                </div>
                <div className="col">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default UsersPage;