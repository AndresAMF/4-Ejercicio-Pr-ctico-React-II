import React from "react";
import icon from "../../Assets/Imgs/pizza-icon.webp";
import cartImg from "../../Assets/Imgs/bag-icon.webp";
import Context from "../../Context/Context";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Card() {
  const { pizzas } = useContext(Context);
  let { setTotal } = useContext(Context);
  const { cart, setCart } = useContext(Context);
  let subtotal = 0;
  let result = 0;
  const navigate = useNavigate();

  const addItem = ({ id, name, img, price }) => {
    const findPizzaId = cart.findIndex((item) => item.id === id);
    const pizza = { id, name, img, price, count: 1 };

    if (findPizzaId >= 0) {
      cart[findPizzaId].count++;
      setCart([...cart]);
    } else {
      setCart([...cart, pizza]);
    }
  };

  useEffect(() => {
    for (let item of cart) {
      subtotal = item.price * item.count;
      result = subtotal + result;
    }
    setTotal(result);
    result = 0;
  }, [cart]);

  return (
    <div className="cards">
      {pizzas.map((item) => (
        <div className="card-container" key={pizzas.indexOf(item)}>
          <div className="card-img-container">
            <img className="card-img" src={item.img} alt="pizza-img" />
          </div>
          <h3 className="name">
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </h3>
          <div className="ingredients-container">
            <h3 className="ingredients-title">Ingredients</h3>
            <ul className="ingredients-list">
              {item.ingredients.map((ingredient) => (
                <li
                  className="ingredient"
                  key={item.ingredients.indexOf(ingredient)}
                >
                  <img className="li-img" src={icon} alt=""></img>
                  {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                </li>
              ))}
            </ul>
          </div>
          <div className="price">$ {item.price}</div>
          <div className="buttons-container">
            <button
              className="details"
              onClick={() => navigate(`../../Views/More/${item.id}`)}
            >
              View More
            </button>
            <button className="add" onClick={() => addItem(item)}>
              Add to bag
              <img
                className="button-img"
                src={cartImg}
                alt="italian-hand"
              ></img>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
