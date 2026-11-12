import { useState } from "react";
import Button from "../UI/Button";
import "./ItemCount.css";

function ItemCount({ stock, onAdd }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    if (quantity > 0) {
      onAdd(quantity);
    }
  };

  return (
    <div className = "ItemCount">

      <div className = "ItemCount-Controls">

        <Button text = "-" variant = "itemcount" onClick = {handleDecrease} disabled = {quantity <= 0}></Button>

        <span className="ItemCount-Quantity">{quantity}</span>

        <Button text = "+" variant = "itemcount" onClick = {handleIncrease} disabled = {quantity >= stock}></Button>

      </div>

      <Button text = "Add to Cart" variant = "addtocart" onClick = {handleAdd} disabled = {quantity === 0 || stock === 0}></Button>

    </div>
  );
}

export default ItemCount;
