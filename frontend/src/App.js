import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';

import Login from './components/Login';
import Home  from './components/Home';


function App() {
  return (
    <div >
      <BrowserRouter>
      
      <Routes>
      <Route element={<Login></Login>} path="login" />
      <Route element={<Home></Home>} path="home" />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
