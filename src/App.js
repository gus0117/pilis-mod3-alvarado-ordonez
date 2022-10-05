import { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LocationContext } from './context/LocationContext';
import Home from './routes/Home/Home';
import CreateLocation from './routes/Location/CreateLocation';
import Navigation from './routes/Navigation/Navigation';

//Lista de prueba
const list = [
  {
    id: 0,
    name: "S. S. de Jujuy, FI Unju",
    lat: -24.1895811,
    lon: -65.2982537,
    windspeed: 2,
    temperature: 17
  },
  {
    id: 1,
    name: "S. S. de Jujuy, FH Unju",
    lat: -24.1877411,
    lon: -65.3048197,
    windspeed: 2,
    temperature: 17
  }
];

function App() {
  const { locationList, setLocationList } = useContext(LocationContext);

  //Se asigna la lista de prueba
  useEffect(()=>{
    setLocationList(list);
  },[])
   
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='location/create' element={<CreateLocation />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
