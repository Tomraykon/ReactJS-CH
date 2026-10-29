
import "./Item.css";

function Item({ product }) {
  return (
    <article className="product-card">
      
      <img className="product-image" src={product.img} alt={product.name} />

      <div className="product-info">

        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>

      </div>

    </article>
  );
}

export default Item;
