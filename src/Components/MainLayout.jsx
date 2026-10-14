import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../home/Navbar'

function MainLayout() {
  const handleCustomOrder = () => {
    const el = document.getElementById('custom')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#FAF6F0] font-sans">
      <Navbar onCustomOrderClick={handleCustomOrder} />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout