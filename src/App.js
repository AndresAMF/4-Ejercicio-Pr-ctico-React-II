import React, {useState} from "react";
import Context from "./Context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import More from "./Views/More";
import ViewCart from "./Views/ViewCart";
import NotFound from "./Views/NotFound";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import "./App.css";
import PizzaJson from "./Assets/Json/pizzas.json";


function App() {

  const [pizzas] = useState(PizzaJson)
  const [total, setTotal] = useState(0)
  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <Context.Provider value={{pizzas, total, setTotal, cart, setCart}}>
      <BrowserRouter>
      <div className="hero-image">
        <Navbar/>
        <Banner/>
      </div>
      
        <Routes>
          <Route path="/Views/Home" element={<Home />} />
          <Route path="/Views/More/:id" element={<More />} />
          <Route path="/Views/ViewCart" element={<ViewCart />} />
          <Route path="/Views/NotFound" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
