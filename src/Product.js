import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import StarIcon from "@material-ui/icons/Star";
import Fade from "react-reveal/Fade"


function Product({ id, title, image, price, rating }) {

  
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    
    <div className="product">
   <Fade botton cascade={true}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>
      </div>
              
      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
      </Fade>
    </div>
      
  );
}

export default Product;
