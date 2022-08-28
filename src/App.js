import {BrowserRouter, Route, Routes, HashRouter} from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Footer from './components/Footer/Footer'
import LetterPage from "./components/LetterPage/LetterPage";

function App() {
  return (
    <HashRouter basename="/">
        <NavBar/>
          
            <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/shop" element={<Shop/>}/>
              <Route path="/letter/:id" element={<LetterPage/>}/>
              <Route path="*" element={<Home/>}/>
            </Routes>
          
        <Footer/>
        </HashRouter>
  );
}

export default App;
