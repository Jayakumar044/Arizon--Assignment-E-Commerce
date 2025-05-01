import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MiniCart from '../components/MiniCart';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
  } = useContext(CartContext);

  const shippingCost = cart.length > 0 ? 5.99 : 0;
  const total = cartTotal + shippingCost;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto py-12 px-6">
          <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
          
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl mb-4">Your cart is empty</p>
              <Link 
                to="/products" 
                className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="hidden md:grid grid-cols-12 bg-gray-100 p-4 font-medium">
                    <div className="col-span-5">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-3 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Total</div>
                  </div>
                  
                  {cart.map(item => (
                    <div key={item.id} className="grid grid-cols-12 p-4 border-b items-center">
                      <div className="col-span-5 flex items-center">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-16 h-16 object-contain mr-4"
                        />
                        <div>
                          <h3 className="font-medium line-clamp-1">{item.title}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 text-sm mt-1"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="col-span-2 text-center">${item.price.toFixed(2)}</div>
                      <div className="col-span-3 flex justify-center">
                        <div className="flex items-center border rounded">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-3">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="col-span-2 text-right font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4">
                  <Link 
                    to="/products" 
                    className="text-gray-600 hover:text-gray-900 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Continue Shopping
                  </Link>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>${shippingCost.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <button className="w-full bg-gray-800 text-white py-3 rounded-lg mt-6 hover:bg-gray-700 transition">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <MiniCart />
    </div>
  );
};

export default Cart;