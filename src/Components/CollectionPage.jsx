import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { FaArrowLeft, FaWhatsapp, FaTimes } from 'react-icons/fa';

function CollectionPage() {
    const { categorySlug: categoryName } = useParams();
    const phone = "2348129255439";

    // Selected item state for the Order Customizer Modal
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedSize, setSelectedSize] = useState('Medium (M)');
    const [selectedColor, setSelectedColor] = useState('As Pictured');

    const matchSlug = (category) => {
        return category
            ?.toLowerCase()
            .replace(/&/g, 'and')
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '');
    };

    const collectionProducts = productsData.filter(
        item => matchSlug(item.category) === categoryName
    );

    const rawCategoryName = collectionProducts.length > 0
        ? collectionProducts[0].category
        : categoryName.replace(/-/g, ' ').replace(/\band\b/g, '&');

    const handleWhatsAppOrder = (product) => {
        const message = `Hi Niola! 👋 I'm interested in ordering a handmade piece from your ${rawCategoryName} collection:

📌 Item: ${product.name}
💰 Price: ${product.price}
📏 Size: ${selectedSize}
🎨 Color: ${selectedColor}

Please let me know how to send my measurements / proceed with the order!`;

        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50/50 py-10 px-4 sm:px-6 max-w-6xl mx-auto">
            {/* Top Navigation Bar */}
            <div className="flex items-center justify-between mb-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#FF7B54] hover:underline"
                >
                    <FaArrowLeft /> Back to Shop
                </Link>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF7B54] bg-orange-100/60 px-3 py-1 rounded-full">
                    NIOLA HANDMADE
                </span>
            </div>

            {/* Collection Header */}
            <div className="text-center max-w-xl mx-auto mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7B54] block mb-1">
                    Handcrafted Shop
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-[#2D2727] capitalize">
                    {rawCategoryName} Collection
                </h1>
                <p className="text-gray-500 text-xs sm:text-sm mt-2 px-2">
                    Select any piece below to customize your size and send your order straight to Niola on WhatsApp!
                </p>
            </div>

            {/* Products Grid */}
            {collectionProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {collectionProducts.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition border border-orange-100 flex flex-col justify-between"
                        >
                            <div className="relative w-full h-64 overflow-hidden bg-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                                <span className="absolute top-3 left-3 bg-white/90 text-[#FF7B54] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                                    {item.category}
                                </span>
                            </div>

                            <div className="p-5 flex flex-col justify-between flex-1">
                                <div>
                                    <h3 className="font-bold text-[#2D2727] text-lg">{item.name}</h3>
                                    <p className="text-[#FF7B54] font-bold text-base mt-1">{item.price}</p>
                                    <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                                        {item.tagline || item.description}
                                    </p>
                                </div>

                                <button
                                    onClick={() => {
                                        setSelectedItem(item);
                                        setSelectedSize('Medium (M)');
                                        setSelectedColor('As Pictured');
                                    }}
                                    className="mt-5 w-full py-3 bg-[#FF7B54] hover:bg-orange-600 text-white font-bold text-xs sm:text-sm rounded-2xl transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                                >
                                    Select & Order ✨
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 px-4 bg-orange-50/50 rounded-3xl max-w-md mx-auto border border-orange-100">
                    <p className="text-gray-600 text-sm font-medium">
                        No pieces currently listed under this collection.
                    </p>
                    <Link
                        to="/"
                        className="inline-block mt-4 px-5 py-2 bg-[#FF7B54] text-white font-semibold text-xs rounded-full hover:bg-orange-600 transition"
                    >
                        Return to Main Shop
                    </Link>
                </div>
            )}

            {/* ORDER CUSTOMIZER MODAL */}
            {selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
                    <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-2xl border border-orange-100 relative max-h-[90vh] overflow-y-auto">

                        <button
                            type="button"
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-800 bg-gray-100 p-2 rounded-full transition-colors cursor-pointer"
                        >
                            <FaTimes className="text-sm" />
                        </button>

                        <div className="flex gap-4 items-center mb-5 border-b border-gray-100 pb-4">
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.name}
                                className="w-16 h-16 rounded-2xl object-cover"
                            />
                            <div>
                                <h3 className="font-extrabold text-[#2D2727] text-base">{selectedItem.name}</h3>
                                <p className="text-[#FF7B54] font-bold text-sm">{selectedItem.price}</p>
                            </div>
                        </div>

                        {/* Order Options */}
                        <div className="space-y-4 text-left mb-6">
                            {/* Size Selection */}
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">
                                    Select Preferred Size
                                </label>
                                <select
                                    value={selectedSize}
                                    onChange={(e) => setSelectedSize(e.target.value)}
                                    className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-700 focus:outline-none focus:border-[#FF7B54]"
                                >
                                    <option value="Small (S)">Small (S)</option>
                                    <option value="Medium (M)">Medium (M)</option>
                                    <option value="Large (L)">Large (L)</option>
                                    <option value="Custom Measurements">Custom Measurements (Send via chat)</option>
                                </select>
                            </div>

                            {/* Color Selection */}
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">
                                    Select Color Preference
                                </label>
                                <select
                                    value={selectedColor}
                                    onChange={(e) => setSelectedColor(e.target.value)}
                                    className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-700 focus:outline-none focus:border-[#FF7B54]"
                                >
                                    <option value="As Pictured">Original Color (As Pictured)</option>
                                    <option value="Black">Black</option>
                                    <option value="White / Cream">White / Cream</option>
                                    <option value="Custom Choice">Custom Choice (Discuss on WhatsApp)</option>
                                </select>
                            </div>
                        </div>

                        {/* WhatsApp Submit Button */}
                        <button
                            onClick={() => handleWhatsAppOrder(selectedItem)}
                            className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <FaWhatsapp className="text-xl" /> Order Order via WhatsApp
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CollectionPage;