import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ item }) {
  // Helper to convert "Tops & Sets" -> "tops-and-sets"
  const createSlug = (category) => {
    return category
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '');
  };

  const categorySlug = createSlug(item.category);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-orange-100">
      {/* Links to /collection/tops-and-sets */}
      <Link to={`/collection/${categorySlug}`}>
        <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-gray-100 cursor-pointer">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-3 left-3 bg-white/90 text-[#FF7B54] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
            {item.category}
          </span>
        </div>
      </Link>

      <div className="p-4 text-left">
        <h3 className="font-bold text-[#2D2727] text-base sm:text-lg">{item.name}</h3>
        <p className="text-[#FF7B54] font-bold text-sm mt-1">{item.price}</p>
        <p className="text-gray-500 text-xs mt-1 line-clamp-2">{item.tagline}</p>
      </div>
    </div >
  );
}

export default ProductCard;