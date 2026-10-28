import React, { useState } from 'react';
import { FaTimes, FaWhatsapp, FaMagic } from 'react-icons/fa';

function CustomerOrderModal({ isOpen, onClose, phone = "234 812 925 5439" }) {
    const [formData, setFormData] = useState({
        itemType: 'Crop Top / Halter',
        colorPreference: '',
        size: 'Medium (M)',
        customMeasurements: '',
        notes: ''
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Build optional sections cleanly
        const measurementsText = formData.customMeasurements
            ? `\n📐 * Measurements:* ${formData.customMeasurements}`
            : '';

        const notesText = formData.notes
            ? `\n📝 * Notes:* ${formData.notes}`


            : '';
        const message = `Hi Niola! 👋 I'd like to place a Custom Crochet Order ✨

📌 Item Concept: ${formData.itemType}
🎨 Color Preference: ${formData.colorPreference || 'Open to recommendations'}
📏 Size: ${formData.size}${measurementsText}${notesText}

Can we discuss pricing and timeline for this? 😊`;

        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
            {/* Modal Box */}
            <div className="bg-white rounded-3xl w-full max-w-md p-5 sm:p-6 shadow-2xl border border-orange-100 relative max-h-[90vh] overflow-y-auto no-scrollbar">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 p-2 rounded-full transition-colors cursor-pointer"
                >
                    <FaTimes className="text-sm" />
                </button>

                {/* Modal Header */}
                <div className="text-center mb-5">
                    <div className="inline-flex items-center gap-1.5 bg-orange-100 text-[#FF7B54] px-3 py-1 rounded-full text-xs font-bold mb-2">
                        <FaMagic className="text-xs" /> Custom Order Request
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2727]">
                        Craft Your Custom Piece 🧶
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">
                        Tell us your vision and we'll craft it to fit you perfectly!
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 text-left">

                    {/* 1. Item Type */}
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                            What piece do you want? *
                        </label>
                        <select
                            name="itemType"
                            value={formData.itemType}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 bg-gray-50 border border-orange-100 rounded-xl text-xs sm:text-sm font-medium text-gray-800 focus:outline-none focus:border-[#FF7B54]"
                        >
                            <option value="Crop Top / Halter">Crop Top / Halter</option>
                            <option value="Two-Piece Set">Two-Piece Set</option>
                            <option value="Crochet Mini Skirt">Crochet Mini Skirt</option>
                            <option value="Sweater / Cardigan">Sweater / Cardigan</option>
                            <option value="Bucket Hat / Accessory">Bucket Hat / Accessory</option>
                            <option value="Custom Design / Other">Other / Custom Idea</option>
                        </select>
                    </div>

                    {/* 2. Color Preference */}
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                            Preferred Color(s) *
                        </label>
                        <input
                            type="text"
                            name="colorPreference"
                            required
                            placeholder="e.g., Peach & White, Sage Green, All Black"
                            value={formData.colorPreference}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 bg-gray-50 border border-orange-100 rounded-xl text-xs sm:text-sm text-gray-800 focus:outline-none focus:border-[#FF7B54]"
                        />
                    </div>

                    {/* 3. Standard Sizing */}
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                            Select Size *
                        </label>
                        <select
                            name="size"
                            value={formData.size}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 bg-gray-50 border border-orange-100 rounded-xl text-xs sm:text-sm font-medium text-gray-800 focus:outline-none focus:border-[#FF7B54]"
                        >
                            <option value="Extra Small (XS)">Extra Small (XS)</option>
                            <option value="Small (S)">Small (S)</option>
                            <option value="Medium (M)">Medium (M)</option>
                            <option value="Large (L)">Large (L)</option>
                            <option value="Extra Large (XL)">Extra Large (XL)</option>
                            <option value="Custom Measurements">Custom Measurements (Specify Below)</option>
                        </select>
                    </div>

                    {/* 4. Custom Measurements (Optional) */}
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                            Exact Measurements <span className="text-gray-400 font-normal">(Optional)</span>
                        </label>
                        <input
                            type="text"
                            name="customMeasurements"
                            placeholder="e.g., Bust: 34in, Waist: 28in, Length: 15in"
                            value={formData.customMeasurements}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 bg-gray-50 border border-orange-100 rounded-xl text-xs sm:text-sm text-gray-800 focus:outline-none focus:border-[#FF7B54]"
                        />
                    </div>

                    {/* 5. Extra Notes */}
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                            Special Notes / Details <span className="text-gray-400 font-normal">(Optional)</span>
                        </label>
                        <textarea
                            name="notes"
                            rows="2"
                            placeholder="Any specific pattern requests, length adjustments, or deadline?"
                            value={formData.notes}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 bg-gray-50 border border-orange-100 rounded-xl text-xs sm:text-sm text-gray-800 focus:outline-none focus:border-[#FF7B54] resize-none"
                        />
                    </div>

                
                    <button
                        type="submit"
                        className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                        <FaWhatsapp className="text-lg" /> Send Order to WhatsApp
                    </button>

                </form>
            </div>
        </div>
    );
}

export default CustomerOrderModal;