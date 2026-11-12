import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../../Mock/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {

    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        getProductById(productId)
            .then((response) => {
                setProduct(response);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [productId]);

    if (loading) {
        return <p className="ItemDetailContainer-Message">Loading product...</p>;
    }

    if (error) {
        return <p className="ItemDetailContainer-Message">{error}</p>;
    }

    return (
        <div className="ItemDetailContainer">
            <ItemDetail product={product} />
        </div>
    );
}

export default ItemDetailContainer;