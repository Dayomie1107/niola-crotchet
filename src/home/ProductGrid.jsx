import React, { useState } from 'react';
import ProductCard from './ProductCard';
import productsData from '../data/products.json';
import subCategoriesData from '../data/categories.json';

const fallbackCategories = [
    "Tops & Sets",
    "Bottoms",
    "Bags & Totes",
    "Hats & Accessories"
];

function ProductGrid() {
    const [activeTab, setActiveTab] = useState('All');

    // Use categories from categories.json, or fallback if empty
    const categoriesList = (subCategoriesData && subCategoriesData.length > 0)
        ? subCategoriesData
        : fallbackCategories;

    // Filter products dynamically based on the active category pill
    const filteredProducts = activeTab === 'All'
        ? productsData.slice(0, 3)
        : productsData.filter(item =>
            item.category?.trim().toLowerCase() ===
            activeTab.trim().toLowerCase());


    return (
        <section className="py-10 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7B54]">
                    Handmade Catalog
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2D2727] mt-1">
                    Explore The Collection
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm mt-1.5 px-2">
                    Pick a piece you love or request a custom-made fit in your preferred colors and measurements!
                </p>
            </div>

            {/* DeluxeStore Category Filter Container */}
            <div className="max-w-md mx-auto mb-8 sm:mb-12 px-2 space-y-3 text-center">

                {/* ROW 1: "All" Button Isolated */}
                <div className="flex justify-center">
                    <button
                        onClick={() => setActiveTab('All')}
                        className={`px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${activeTab === 'All'
                            ? 'bg-[#FF7B54] text-white shadow-md'
                            : 'bg-white text-gray-600 hover:bg-orange-50 border border-orange-100'
                            }`}
                    >
                        All
                    </button>
                </div>

                {/* ROW 2: Sub-categories from categories.json */}
                <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
                    {categoriesList.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${activeTab === category
                                ? 'bg-[#FF7B54] text-white shadow-md'
                                : 'bg-white text-gray-600 hover:bg-orange-50 border border-orange-100'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

            </div>

            {/* Product Grid View */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredProducts.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 px-4 bg-orange-50/50 rounded-3xl max-w-md mx-auto border border-orange-100">
                    <p className="text-gray-600 text-sm font-medium">
                        No pieces listed under <span className="font-bold text-[#FF7B54]">"{activeTab}"</span> yet.
                    </p>
                    <button
                        onClick={() => setActiveTab('All')}
                        className="mt-4 px-5 py-2 bg-[#FF7B54] text-white font-semibold text-xs rounded-full hover:bg-orange-600 transition cursor-pointer"
                    >
                        View All Collections ✨
                    </button>
                </div>
            )}
        </section>
    );
}

export default ProductGrid;