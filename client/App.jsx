import React from 'react'

import Header from './components/Header.jsx'
import PlanetGrid from './components/PlanetGrid.jsx'

export default function App () {
  return (
    <div className="container mx-auto px-4">
      <Header
        title="No Man's Sky Planet Browser"
        subtitle="Click on a planet card for more information"
      />
      <PlanetGrid />
    </div>
  )
}
