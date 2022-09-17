import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';

import Login from './components/Login';
import Home  from './components/Home';
import Customizer from "./components/Customizer";
import { Suspense } from "react";


function App() {
  return (
    <div >
      <BrowserRouter>
      
      <Routes>
      <Route element={
        <Suspense fallback={null}>
          <Customizer />
        </Suspense>
      } path="/" />

      <Route element={<Login></Login>} path="login" />
      <Route element={<Home></Home>} path="home" />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
