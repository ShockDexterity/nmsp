import React, { useEffect, useState } from 'react'

import PlanetCard from './PlanetCard.jsx'

import { getPlanets } from '../fetcher.js'

export default function PlanetGrid (props) {
  const [planets, setPlanets] = useState([])
  const [addedPlanet, setAddedPlanet] = useState(false)

  useEffect(() => {
    async function fetchPlanets () {
      try {
        const newPlanets = await getPlanets()
        setPlanets(newPlanets)
      }
      catch (error) {
        console.error(error)
      }
    }

    fetchPlanets()
    return () => {
      setAddedPlanet(false)
    }
  }, [addedPlanet])

  // const planetCards = planets.map((planet) => {
  //   return <PlanetCard key={planet._id} planet={planet} {...props} />
  // })

  return (
    <div className="py-2">
      <div className="grid gap-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {planets.length !== 0 &&
          planets.map((planet) => (
            <PlanetCard key={planet._id} planet={planet} {...props} />
          ))}
      </div>
    </div>
  )
}
