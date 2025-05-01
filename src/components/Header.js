import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Header = () => {
  const { cartItemCount, setIsMiniCartOpen } = useContext(CartContext);

  return (
    <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          E-STORE
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
          <Link to="/cart" className="text-gray-600 hover:text-gray-900">Cart</Link>
        </nav>
        
        <div className="relative">
          <button 
            onClick={() => setIsMiniCartOpen(prev => !prev)}
            className="p-2 text-gray-600 hover:text-gray-900 relative"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;