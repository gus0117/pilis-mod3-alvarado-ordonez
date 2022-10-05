import { useContext } from "react";
import Cards from "../../components/Card/Cards";
import { LocationContext } from "../../context/LocationContext";

const Home = () => {
  const { locationList } = useContext(LocationContext);

  //Aqui se puede filtrar la lista para busquedas y actualizar el componente cards
  //console.log(locationList);

  return (
    <div className="container">
        <Cards locationList={locationList} />
    </div>
  );
};

export default Home;
