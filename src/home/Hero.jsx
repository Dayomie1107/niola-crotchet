import React from 'react';
import { FaSmileWink, FaStar } from 'react-icons/fa';

function Hero({ onExploreClick, onCustomOrderClick, phone = "23408129255439" }) {
  return (
    <section className="relative bg-gradient-to-b from-[#FFF5F2] via-[#FFEEE8] to-[#FAF6F0] text-[#2D2727] py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-10 left-10 w-48 sm:w-64 h-48 sm:h-64 bg-pink-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-56 sm:w-72 h-56 sm:h-72 bg-orange-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">

        {/* Left Column: Headline & Bio */}
        <div className="space-y-4 sm:space-y-6 text-center md:text-left">

          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-xs border border-orange-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-amber-900 shadow-xs hover:scale-105 transition-transform">
            <FaSmileWink className="text-orange-500 text-base animate-bounce" />
            <span>@niolaali</span>
            <FaStar className="text-amber-400 text-xs" />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#2D2727] leading-tight">
            Handcrafted Crochet, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-orange-600 via-pink-500 to-amber-600 bg-clip-text text-transparent">
              Made With Love.
            </span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-gray-700 font-light italic bg-white/50 p-3.5 sm:p-4 rounded-2xl border border-orange-100 shadow-xs max-w-lg mx-auto md:mx-0">
            "Welcome to my delulu home 🙂 <br className="hidden sm:inline" />
            <span className="not-italic text-xs sm:text-base text-gray-600">
              My ideas, and whatever I'm creating next.
            </span>"
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 pt-2">
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-[#FF7B54] hover:bg-[#F05A2B] text-white font-semibold text-sm sm:text-base rounded-2xl shadow-md hover:shadow-orange-200 transition-all cursor-pointer"
            >
              Explore Collection
            </button>

            <button
              onClick={onCustomOrderClick}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-white hover:bg-orange-50 text-[#2D2727] font-semibold text-sm sm:text-base border border-orange-200 rounded-2xl shadow-xs transition-all cursor-pointer"
            >
              Request Custom Piece ✨
            </button>
          </div>

          <div className="pt-4 sm:pt-6 border-t border-orange-200/60 grid grid-cols-3 gap-2 text-center text-xs font-medium text-gray-600 max-w-md mx-auto md:mx-0">
            <div>
              <p className="font-bold text-gray-900 text-sm sm:text-base">100%</p>
              <p className="text-[11px] sm:text-xs">Handmade</p>
            </div>
            <div className="border-x border-orange-200/60">
              <p className="font-bold text-gray-900 text-sm sm:text-base">Custom</p>
              <p className="text-[11px] sm:text-xs">Sizing & Colors</p>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm sm:text-base">Direct</p>
              <p className="text-[11px] sm:text-xs">DM / WhatsApp</p>
            </div>
          </div>
        </div>

        {/* Right Column: Authentic Crochet Showcase Card */}
        <div className="relative flex justify-center w-full">
          <div className="relative w-full max-w-sm sm:max-w-md bg-white p-3.5 sm:p-4 rounded-3xl shadow-lg border border-orange-100">

            <div className="flex items-center gap-3 pb-3 border-b border-gray-100 mb-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold text-xs shadow-xs">
                N
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm leading-none">NIOLA</h3>
                <span className="text-[11px] text-gray-500">@niolaali</span>
              </div>
            </div>

            {/* Authentic Crochet Top Image */}
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-orange-50 group">
              <img
                src="https://images.unsplash.com/photo-1718725009949-83d8541fb787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt="Handcrafted crochet crop top texture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                <p className="text-white text-xs sm:text-sm font-medium">
                  Peach Knit Halter Crop ✨
                </p>
              </div>
            </div>

            <div className="absolute -bottom-3 -left-2 sm:-left-4 bg-white px-3 py-1.5 rounded-2xl shadow-md border border-orange-100 flex items-center gap-1.5 text-xs font-semibold text-gray-800">
              <span className="text-red-500 text-sm">🧶</span> Custom handmade fits
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;