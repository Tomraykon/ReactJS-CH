import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail({ product }) {
  const handleAdd = (quantity) => {
    console.log(`Added ${quantity} units of ${product.name}`);
  };

  return (
    <div className="ItemDetail">
      <div className="ItemDetail-Image">
        <img src={product.img} alt={product.name} />
      </div>

      <div className="ItemDetail-Info">
        <span className="ItemDetail-Category">
          {product.category}
        </span>

        <h1 className="ItemDetail-Name">
          {product.name}
        </h1>

        <p className="ItemDetail-Price">
          ${product.price}
        </p>


        <p className="ItemDetail-Description">
          {product.description}
        </p>

        <div className="ItemDetail-Stock">
          <span>Availability:</span>
          <span>
            {product.stock > 0
              ? `${product.stock} Units Available`
              : "Out of stock"}
          </span>
        </div>

        <div className="ItemDetail-Additional">
          <p>Platform: PlayStation</p>
        </div>


        <ItemCount
          stock={product.stock}
          onAdd={handleAdd}
        />
      </div>
    </div>
  );
}

export default ItemDetail;
