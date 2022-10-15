import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import CreateLocation from './routes/Location/CreateLocation';
import Navigation from './routes/Navigation/Navigation';
import Login from './routes/Login/Login'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='location/create' element={<CreateLocation />} />
          <Route path='login' element={<Login/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
