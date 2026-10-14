import React, { useState } from 'react'
import Hero from '../home/Hero'
import ProductGrid from '../home/ProductGrid'
import CustomerOrderModal from '../home/CustomerOrderModal'
import Footer from '../home/Footer'
import Navbar from '../home/Navbar'

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const scrollToCatalog = () => {
        const el = document.getElementById('catalog')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    const openCustomModal = () => {
        setIsModalOpen(true)
    }

    return (
        <div>
            <Hero
                onExploreClick={scrollToCatalog}
                onCustomOrderClick={openCustomModal}
                phone="2348129255439"
            />
            <div id="catalog">
                <ProductGrid />
            </div>

            {/* Modal Overlay */}
            <CustomerOrderModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                phone="2348129255439"
            />

            <Footer phone="2348129255439" instagramHandle="niovellecrochets" />
        </div>
    )
}

export default Home