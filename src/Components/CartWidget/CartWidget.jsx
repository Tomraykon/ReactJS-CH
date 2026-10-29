import { ShoppingCart } from "lucide-react";
import "./CartWidget.css";
import Button from "../UI/Button";

// Cart Component that displays a shopping cart icon and an item count badge.
// The badge is only displayed when the cart contains items. 
// Uses the reusable Button component with the "nav" variant.

function CartWidget() {
    const cartItems = 3;

    return (
        <Button variant="nav" className="Cart">

            <ShoppingCart className="cart-icon" size={24} /> {cartItems > 0 && <span className="cart-badge">{cartItems}</span>}

        </Button>
    );
}

export default CartWidget;
