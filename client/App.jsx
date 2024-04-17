import React, { useState } from 'react'

import Header from './components/Header.jsx'
import PlanetGrid from './components/PlanetGrid.jsx'
import Modal from './components/Modal.jsx'

export default function App () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="container mx-auto px-4">
      <Header
        title="No Man's Sky Planet Browser"
        subtitle="Click on a planet card for more information"
      />
      <PlanetGrid openModal={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  )
}
