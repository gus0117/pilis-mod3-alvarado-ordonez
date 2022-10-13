import { Link, Navigate, Outlet } from "react-router-dom";
import './Navigation.css';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BiUserCircle } from "react-icons/bi";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { ImExit } from "react-icons/im";

const Navigation = () => {
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        const userStored = localStorage.getItem('currentUser')
        if(userStored) {
            setUser(JSON.parse(userStored));
        }
    }, [])

    const handleLogOut = () => {
        setUser(null);
        localStorage.setItem("currentUser", null);
    }

    return (
        <>
        <div className="login-container">
        {
            user ? 
            (
                <div className="login-link">
                    <ImExit className="login-icon"/>
                    <span className="login-title log-out" onClick={handleLogOut}>Log out</span>
                </div>
            ) :
            (
                <Link className="login-link" to='/login'>
                    <div>
                        <BiUserCircle className="login-icon"/>
                        <span className="login-title">Login</span> 
                    </div>
                </Link>
            )
        }
        </div>
        <div className="app-title-container">
            <Link className="app-link" to='/'>
                <TiWeatherPartlySunny className="app-icon"/>
                <h1 className="app-title">Weather Location App</h1>
            </Link>
        </div>
        <Outlet />
        </>
    );
}

export default Navigation;