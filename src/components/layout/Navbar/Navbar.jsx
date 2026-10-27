import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../../features/cart/hooks/useCart";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const { cartCount } = useCart();

    return (
        <nav
            className={`navbar navbar-expand-lg ${styles.navbar}`}
            data-bs-theme="dark"
        >
            <div className="container-fluid">
                {/* Brand */}
                <Link
                    className={`navbar-brand ${styles.brand}`}
                    to="/"
                >
                    Q-Shop
                </Link>

                {/* Mobile menu button */}
                <button
                    className={`navbar-toggler ${styles.toggler}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation links */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    `nav-link ${styles.navLink} ${
                                        isActive ? styles.active : ""
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `nav-link ${styles.navLink} ${
                                        isActive ? styles.active : ""
                                    }`
                                }
                            >
                                About
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `nav-link ${styles.navLink} ${
                                        isActive ? styles.active : ""
                                    }`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    `nav-link ${styles.navLink} ${
                                        isActive ? styles.active : ""
                                    }`
                                }
                            >
                                Products
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/cart"
                                className={({ isActive }) =>
                                    `nav-link ${styles.navLink} ${styles.cart} ${
                                        isActive ? styles.active : ""
                                    }`
                                }
                            >
                                My Cart ({cartCount})
                            </NavLink>
                        </li>

                        {/* Dropdown */}
                        <li className="nav-item dropdown">
                            <button
                                className={`nav-link dropdown-toggle ${styles.navLink} ${styles.dropdownToggle}`}
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                More
                            </button>

                            <ul
                                className={`dropdown-menu ${styles.dropdownMenu}`}
                            >
                                <li>
                                    <Link
                                        className={`dropdown-item ${styles.dropdownItem}`}
                                        to="/about"
                                    >
                                        About Us
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className={`dropdown-item ${styles.dropdownItem}`}
                                        to="/products"
                                    >
                                        Browse Products
                                    </Link>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <Link
                                        className={`dropdown-item ${styles.dropdownItem}`}
                                        to="/contact"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    {/* Search */}
                    <form
                        className={`d-flex ${styles.searchForm}`}
                        role="search"
                        onSubmit={(event) => event.preventDefault()}
                    >
                        <input
                            className={`form-control me-2 ${styles.searchInput}`}
                            type="search"
                            placeholder="Search arsenal..."
                            aria-label="Search products"
                        />

                        <button
                            className={`btn ${styles.searchButton}`}
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
