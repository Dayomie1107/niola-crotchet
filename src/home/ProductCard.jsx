import React from 'react'

const ProductCard = ({ product, isAllTab = false }) => {
  const { title, price, category, itemType, image, description } = product

  const displayCategory = category || itemType || 'Custom'
  const displayImage = image || '/placeholder.jpg'

  return (
    <div className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between h-full">
      {/* Image Container with Floating Category Badge */}
      <div className="w-full h-60 overflow-hidden rounded-2xl bg-gray-100 mb-4 relative">
        <img
          src={displayImage}
          alt={title || 'Product Image'}
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />

        {/* Floating Category Tag */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-orange-600 uppercase tracking-widest shadow-sm">
          {displayCategory}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-base font-bold text-gray-900 leading-snug mb-1">
            {title}
          </h3>

          {!isAllTab && description && (
            <p className="text-xs text-gray-400 line-clamp-2 mb-3">
              {description}
            </p>
          )}
        </div>

        {!isAllTab && (
          <div className="flex items-center justify-between pt-2 mt-auto border-t border-gray-50">
            <span className="text-sm font-extrabold text-gray-800">
              ₦{(() => {
                const cleanPrice = String(price || '').replace(/[^\d]/g, '');
                return cleanPrice ? Number(cleanPrice).toLocaleString() : '0';
              })()}
            </span>
            <button className="px-3.5 py-1.5 bg-gray-200 hover:bg-black hover:text-white text-gray-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer">
              Order
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard