import { Link, Outlet } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    return (
        <>
        <div className="app-title-container">
            <Link className="app-title" to='/'>Weather Location App</Link>
        </div>
        <Outlet />
        </>
    );
}

export default Navigation;