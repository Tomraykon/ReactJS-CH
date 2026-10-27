import "./Navbar.css";
import Button from "../UI/Button";
import SearchBar from "../UI/Searchbar";
import Cart from "../Cart/Cart";

function Navbar() {
    const handleSearch = (query) => {
        console.log("Buscando:", query);
    };
    return (

        <header className="navbar">

            {/* Navbar Logo */}

            <div className="navbar-left">
                <div className="navbar-logo">RePlay</div>
            </div>

            {/* Navbar Links */}

            <nav className="navbar-center">
                <Button text="GAMES" variant="nav" href="#games" />
                <Button text="CONSOLES" variant="nav" href="#consoles" />
                <Button text="ACCESSORIES" variant="nav" href="#accessories" />
                <Button text="PERIPHERALS" variant="nav" href="#peripherals" />
            </nav>

            {/* Navbar Placeholder for icons and possible Cart */}

            <div className="navbar-right">
                <SearchBar onSearch={handleSearch} />
                <Cart />
            </div>

        </header>

    );
}


export default Navbar;