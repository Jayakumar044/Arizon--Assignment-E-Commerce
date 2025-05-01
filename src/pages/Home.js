import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import MiniCart from '../components/MiniCart';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=4');
        setFeaturedProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
            {error ? (
              <p className="text-center text-red-500">Error loading products: {error}</p>
            ) : (
              <ProductGrid products={featuredProducts} isLoading={isLoading} />
            )}
          </div>
        </section>
      </main>
      <Footer />
      <MiniCart />
    </div>
  );
};

export default Home;