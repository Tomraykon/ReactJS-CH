import "./Navbar.css";
import useScroll from "../../Hook/UseScroll";
import Button from "../UI/Button";
import SearchBar from "../UI/Searchbar";
import CartWidget from "../CartWidget/CartWidget"

function Navbar() {
    const isScrolled = useScroll();

    const handleSearch = (query) => {
        console.log("Searching:", query);
    };

    return (
        <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>

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

            {/* Navbar Search and Cart */}
            <div className="navbar-right">
                <SearchBar onSearch={handleSearch} />
                <CartWidget />
            </div>

        </header>
    );
}

export default Navbar;
