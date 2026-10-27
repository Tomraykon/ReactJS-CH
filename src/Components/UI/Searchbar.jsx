import { useState } from "react";
import { Search } from "lucide-react";
import "../UI/Searchbar.css";

// SearchBar Component with a controlled search input and search icon.
// Uses useState to manage the search value and onSearch to handle form submission.
// Trims whitespace before passing the search query to the optional onSearch callback.

function SearchBar({ onSearch }) {

    const [search, setSearch] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch?.(search.trim());
    };

    return (
        
        <form className="search-bar" onSubmit={handleSubmit}>

            <Search size={20} className="search-bar-icon" />

            <input className = "search-bar-input" type = "text" placeholder = "Search" value = {search} onChange = {(event) => setSearch(event.target.value)} aria-label = "Search"/>

        </form>

    );
}

export default SearchBar;
