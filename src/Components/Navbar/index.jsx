import React from "react";
import "./styles.css";
import icon from "../../Assets/Imgs/pizza-icon.webp";
import cart from "../../Assets/Imgs/bag-icon.webp";
import hand from "../../Assets/Imgs/italian-gesture.png";
import Context from "../../Context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  let { total } = useContext(Context);

  return (
    <div className="navbar">
      <div className="navbar-brand" onClick={() => navigate(`../../`)}>
        <img className="brand-img" src={icon} alt="pizza-icon" />
        <h3 className="brand-name">Pizzería Mamma Mia!</h3>
        <img className="brand-img" src={hand} alt="italian-hand"></img>
      </div>

      <div className="cart" onClick={() => navigate(`../../Views/ViewCart`)}>
        <img className="cart-icon" src={cart} alt="bag-icon" />
        <h3 className="cart-total-nav">Total: {total}</h3>
      </div>
    </div>
  );
}

export default Navbar;
