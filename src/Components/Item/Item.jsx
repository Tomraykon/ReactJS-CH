
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ product }) {
  return (
    <Link
      to={`/item/${product.id}`}
      className="product-link"
    >
      <article className="product-card">

        <img
          className="product-image"
          src={product.img}
          alt={product.name}
        />

        <div className="product-info">

          <h3 className="product-name">
            {product.name}
          </h3>

          <p className="product-price">
            ${product.price}
          </p>

        </div>

      </article>
    </Link>
  );
}

export default Item;
