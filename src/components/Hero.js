import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.jpg'; // Your background image

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] max-h-[800px] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="E-STORE background"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Text content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-3xl space-y-6 animate-fadeIn">
          {/* Main heading with glowing effect */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white drop-shadow-2xl">
              Welcome To E-STORE
            </span>
          </h1>
          
          {/* Subheading with subtle animation */}
          <p className="text-xl md:text-2xl text-gray-100 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Discover our amazing collection of products that will make your life better.
          </p>
          
          {/* CTA button with shine effect */}
          <div className="pt-6">
            <Link
              to="/products"
              className="relative inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-10 py-4 text-lg font-semibold rounded-lg overflow-hidden group"
            >
              <span className="relative z-10">Shop Now</span>
              {/* Button shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;