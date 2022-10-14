import { useContext } from "react";
import { Link } from "react-router-dom";
import Cards from "../../components/Card/Cards";
import { LocationContext } from "../../context/LocationContext";
import './Home.css';
import { FaPlus } from 'react-icons/fa';
import { UserContext } from "../../context/UserContext";

const Home = () => {
  const { locationList } = useContext(LocationContext);
  const { user } = useContext(UserContext);

  //Aqui se puede filtrar la lista para busquedas y actualizar el componente cards
  //console.log(locationList);

  return (
    <>
      <div className="app-description">
        <p>
          Welcome! WEATHER LOCATION APP is a Single Page Aplication (SPA) developed with React.  
        </p>
      </div>
      <div className="container-cards">
          {
            user ? 
            <Link className="create-location-link" to='location/create'>
              <FaPlus className="create-location-icon"/>
              <span>Create New Location</span>
            </Link> :
            <div className="create-location-link">
              <FaPlus className="create-location-icon"/>
              <span>Log In to Create New Location</span>
            </div>
          }
          
        <Cards locationList={locationList} />
      </div>
    </>
  );
};

export default Home;
