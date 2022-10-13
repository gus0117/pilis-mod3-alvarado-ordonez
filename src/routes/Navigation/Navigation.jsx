import { Link, Outlet } from "react-router-dom";
import './Navigation.css';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BiUserCircle } from "react-icons/bi";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

const Navigation = () => {
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        const userStored = localStorage.getItem('currentUser')
        if(userStored) {
            setUser(JSON.parse(userStored));
        }
    }, [])


    return (
        <>
        <div className="login-container">
        <Link className="login-link" to='/login'>
            <BiUserCircle className="login-icon"/>
            {
                user ? 
                (<span className="login-title">{user.username}</span>) :
                (<span className="login-title">Login</span>) 
            }
        </Link>
          
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