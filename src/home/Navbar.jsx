import React from 'react';

function Navbar() {
    const handleCustomOrder = () => {
        const phone = "2348129255439";
        const message = "Hi Niola! 👋 I would like to place a custom crochet order. Here are the details:";
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleCustomWorkClick = (e) => {
        e.preventDefault();
        const customSection = document.getElementById('custom');
        if (customSection) {
            customSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If no custom section exists on page, open WhatsApp directly
            handleCustomOrder();
        }
    };

    return (
        <nav className="w-full bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-red-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                        N
                    </div>
                    <span className="font-extrabold text-xl tracking-tight text-[#2D2727]">
                        NIOLA
                    </span>
                </a>

                {/* Links */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
                    <a href="#catalog" className="hover:text-orange-600 transition-colors">
                        Collection
                    </a>
                    <a href="#custom" onClick={handleCustomWorkClick} className="hover:text-orange-600 transition-colors">
                        Custom Work
                    </a>
                </div>

                {/* Custom Order Button */}
                <button
                    onClick={handleCustomOrder}
                    className="px-3.5 sm:px-4 py-2 bg-[#FF7B54] hover:bg-[#F05A2B] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all cursor-pointer"
                >
                    Custom Order ✨
                </button>

            </div>
        </nav>
    );
}

export default Navbar;