import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <>
        <div>
            <Link to='/'>Inicio</Link>
        </div>
        <div className="navigation">
            <Link to='/location/create'>Nueva Ubicación</Link>
        </div>
        <Outlet />
        </>
    );
}

export default Navigation;