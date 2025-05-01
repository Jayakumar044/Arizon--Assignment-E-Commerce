import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ShoppingCartIcon, EyeIcon } from '@heroicons/react/24/outline';

const ProductCard = ({ product }) => {
  const { addToCart } = React.useContext(CartContext);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 h-full flex flex-col relative">
      {/* Product Image */}
      <Link to={`/products/${product.id}`} className="block flex-grow">
        <div className="h-48 overflow-hidden flex items-center justify-center p-4 bg-gray-50">
          <img 
            src={product.image} 
            alt={product.title} 
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </Link>
      
      {/* Product Info */}
      <div className="p-4">
        <Link to={`/products/${product.id}`} className="block pr-12"> {/* Added padding for icons */}
          <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">{product.title}</h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-1">{product.description}</p>
          <p className="text-lg font-bold text-gray-900">${product.price}</p>
        </Link>
      </div>
      
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 items-center">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="p-2 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition-colors shadow-sm"
          aria-label="Add to cart"
        >
          <ShoppingCartIcon className="h-5 w-5" />
        </button>
        
        <Link 
          to={`/products/${product.id}`}
          className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors shadow-sm"
          aria-label="View product"
        >
          <EyeIcon className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;