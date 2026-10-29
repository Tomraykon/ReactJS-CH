import { useState, useEffect } from "react";
import { getProducts } from "../../Mock/asyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

function ItemListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <section className="item-list-container">

            <h2 className="item-list-title">Featured Games</h2>
            <ItemList products={products} />

        </section>
    );
}

export default ItemListContainer;
