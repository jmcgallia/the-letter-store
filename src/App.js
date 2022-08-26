import './App.css';
import {BrowserRouter} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route path="/" component={<Home/>}/>
        <Route path="/shop" component={<Shop/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
