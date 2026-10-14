import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './Components/MainLayout'
import Home from './Components/Home'
import CollectionPage from './Components/CollectionPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/collection/:categorySlug" element={<CollectionPage />} />
      </Route>
    </Routes>
  )
}

export default App