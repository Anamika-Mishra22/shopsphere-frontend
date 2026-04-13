import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const { getCartCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://shopsphere-backend-9o3t.onrender.com/product');
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    const keyword = search.toLowerCase().trim();
    if (!keyword) return;

    const categoryMatch = products.some(p =>
      p.productCategory.toLowerCase().includes(keyword)
    );

    if (categoryMatch) {
      navigate(`/products?category=${keyword}`);
    } else {
      navigate(`/products`);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const bgClass = isDark
    ? 'bg-black/80 border-gray-800/60'
    : 'bg-sky-50/90 border-sky-200/60';

  const textClass = isDark ? 'text-gray-300' : 'text-gray-700';
  const textHoverClass = isDark ? 'hover:text-white' : 'hover:text-sky-800';
  const logoClass = isDark ? 'text-white' : 'text-sky-900';

  const getUserInitial = () => {
    if (user?.fullName) return user.fullName.charAt(0).toUpperCase();
    if (user?.email) return user.email.charAt(0).toUpperCase();
    return 'U';
  };

  return (
    <header className="w-full sticky top-0 z-50 overflow-x-hidden">

      {/* Top Row */}
      <nav className={`h-10 ${bgClass} backdrop-blur-md border-b flex items-center justify-between px-3`}>
        <h1 className={`${logoClass} font-bold`}>ShopEasy</h1>

        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className={textClass}>
            {isDark ? '🌞' : '🌙'}
          </button>

          <Link to="/help" className={textClass}>Help</Link>

          {isAuthenticated ? (
            <div ref={dropdownRef}>
              <Link
                to="/profile"
                className={`flex items-center gap-2 ${textClass}`}
              >
                <div className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs">
                  {getUserInitial()}
                </div>
                <span>{user?.fullName?.split(' ')[0]}</span>
              </Link>
            </div>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </div>
      </nav>

      {/* Main Nav */}
      <nav className={`h-16 ${bgClass} flex items-center justify-between px-4`}>

        <Link to="/" className={logoClass}>ShopEasy</Link>

        {/* Search */}
        <div className="flex">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">
            Cart ({getCartCount()})
          </Link>

          {isAuthenticated && <Link to="/orders">Orders</Link>}
          {isAuthenticated && <Link to="/profile">Profile</Link>}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu}>☰</button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed right-0 top-0 w-64 bg-white h-full p-4">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/products" onClick={toggleMenu}>Products</Link>
          <Link to="/cart" onClick={toggleMenu}>Cart</Link>

          {isAuthenticated ? (
            <>
              <Link to="/orders" onClick={toggleMenu}>Orders</Link>
              <Link to="/profile" onClick={toggleMenu}>Profile</Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Nav;