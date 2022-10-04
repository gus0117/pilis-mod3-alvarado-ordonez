import './App.css';
import Cards from './components/Card/Cards';

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
  return (
    <div className="App">
      <Cards locationsList={list} />
    </div>
  );
}

export default App;
