import { useContext } from "react";
import { Link } from "react-router-dom";
import Cards from "../../components/Card/Cards";
import { LocationContext } from "../../context/LocationContext";
import './Home.css';
import { FaPlus } from 'react-icons/fa';

const Home = () => {
  const { locationList } = useContext(LocationContext);

  //Aqui se puede filtrar la lista para busquedas y actualizar el componente cards
  //console.log(locationList);

  return (
    <div className="container-cards">
        
          <Link className="create-location-link" to='location/create'>
            <div className="create-location">
              <FaPlus className="create-location-icon"/>
              <span>Create New Location</span>
            </div>  
          </Link>
        <Cards locationList={locationList} />
    </div>
  );
};

export default Home;
