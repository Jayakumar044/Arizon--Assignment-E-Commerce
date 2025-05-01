import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';

const MiniCart = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    cartTotal, 
    isMiniCartOpen, 
    setIsMiniCartOpen 
  } = useContext(CartContext);

  if (!isMiniCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50" onClick={() => setIsMiniCartOpen(false)}>
      <div 
        className="absolute right-4 top-20 w-80 bg-white shadow-xl rounded-lg p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Your Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})</h3>
          <button onClick={() => setIsMiniCartOpen(false)}>
            <XMarkIcon className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        
        {cart.length === 0 ? (
          <p className="text-gray-500 py-4">Your cart is empty</p>
        ) : (
          <>
            <div className="max-h-96 overflow-y-auto">
              {cart.map(item => (
                <div key={item.id} className="flex py-4 border-b">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-16 h-16 object-contain"
                  />
                  <div className="ml-4 flex-1">
                    <h4 className="text-sm font-medium line-clamp-1">{item.title}</h4>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border rounded">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="ml-2 text-gray-400 hover:text-red-500"
                  >
                    <XMarkIcon className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between font-semibold mb-4">
                <span>Subtotal:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="space-y-2">
                <Link 
                  to="/cart" 
                  onClick={() => setIsMiniCartOpen(false)}
                  className="block w-full text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition"
                >
                  View Cart
                </Link>
                <button 
                  className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition disabled:opacity-50"
                  disabled={cart.length === 0}
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MiniCart;