import React from 'react'
import Header from './components/Header'

export default function App () {
  return (
    <div className="container mx-auto px-4">
      <Header
        title="No Man's Sky Planet Browser"
        subtitle="Click a planet for more information"
      />
    </div>
  )
}
