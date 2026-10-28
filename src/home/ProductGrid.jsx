import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { client } from '../sanityClient'
import staticProducts from '../data/products.json'

const ProductGrid = () => {
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [loading, setLoading] = useState(true)

    const categories = ['All', 'TOPS & SETS', 'HATS & ACCESSORIES', 'BOTTOMS']

    useEffect(() => {
        const query = `*[_type == "product"]{
      _id,
      title,
      price,
      itemType,
      category,
      "image": image.asset->url,
      description
    }`

        client
            .fetch(query)
            .then((sanityData) => {
                let combined = [...staticProducts]

                if (sanityData && sanityData.length > 0) {
                    const formattedSanity = sanityData.map((item) => ({
                        ...item,
                        image: item.image || item.imageUrl || item.img
                    }))
                    combined = [...combined, ...formattedSanity]
                }

                setProducts(combined)
                setLoading(false)
            })
            .catch((err) => {
                console.error('Sanity fetch error:', err)
                setProducts(staticProducts)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div className="py-12 text-center text-lg font-medium">Loading collections...</div>
    }

    const getCategoryTab = (productCategory) => {
        if (!productCategory) return 'All'
        const prodCat = productCategory.toLowerCase()

        if (
            prodCat.includes('top') ||
            prodCat.includes('set') ||
            prodCat.includes('halter') ||
            prodCat.includes('crochet')
        ) {
            return 'TOPS & SETS'
        }
        if (
            prodCat.includes('hat') ||
            prodCat.includes('accessory') ||
            prodCat.includes('accessories') ||
            prodCat.includes('bucket')
        ) {
            return 'HATS & ACCESSORIES'
        }
        if (
            prodCat.includes('bottom') ||
            prodCat.includes('skirt') ||
            prodCat.includes('pant') ||
            prodCat.includes('shorts')
        ) {
            return 'BOTTOMS'
        }
        return 'All'
    }

    const isCategoryMatch = (productCategory, selected) => {
        return getCategoryTab(productCategory) === selected
    }

    const filteredProducts = selectedCategory === 'All'
        ? products.slice(0, 3)
        : products.filter((p) => {
            const catValue = p.category || p.itemType || ''
            return isCategoryMatch(catValue, selectedCategory)
        })

    const handleCardClick = (product) => {
        if (selectedCategory === 'All') {
            const catValue = product.category || product.itemType || ''
            const targetTab = getCategoryTab(catValue)
            setSelectedCategory(targetTab)
        }
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            {/* Category Navigation Tabs */}
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${selectedCategory === cat
                            ? 'bg-black text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {filteredProducts && filteredProducts.length > 0 ? (
                    filteredProducts.map((product, idx) => (
                        <div
                            key={product._id || product.id || idx}
                            onClick={() => handleCardClick(product)}
                            className={
                                selectedCategory === 'All'
                                    ? 'cursor-pointer transition-transform duration-200 hover:scale-[1.02]'
                                    : ''
                            }
                        >
                            {/* Pass isAllTab flag to control price and description visibility */}
                            <ProductCard product={product} isAllTab={selectedCategory === 'All'} />
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-8 text-gray-500">
                        No products found in this category.
                    </div>
                )}
            </div>
        </section>
    )
}

export default ProductGrid