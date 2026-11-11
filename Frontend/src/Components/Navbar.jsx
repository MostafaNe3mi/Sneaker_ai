import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/in-stock?search=${encodeURIComponent(search.trim())}`);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Kicks With Style</Link>

      <form className="search" onSubmit={handleSearch}>
        <svg className="search-icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
        <input
          type="text"
          placeholder="Search sneakers, men, or women"
          list="sneaker-search-suggestions"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <datalist id="sneaker-search-suggestions">
          <option value="men" label="Men's sneakers" />
          <option value="women" label="Women's sneakers" />
          <option value="male" label="Men's sneakers" />
          <option value="female" label="Women's sneakers" />
        </datalist>
      </form>

      <div className="nav-right">
        <ul className="nav-links">
          <li><NavLink to="/feed">Feed</NavLink></li>
          <li><NavLink to="/in-stock">In Stock</NavLink></li>
          <li><NavLink to="/upcoming">Upcoming</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>

        <div className="nav-account-links">
          <Link className="nav-login-link" to="/login">Log in</Link>
          <Link className="nav-signup-link" to="/signup">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;