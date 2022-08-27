import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="*" element={<Home/>}/>
          </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
