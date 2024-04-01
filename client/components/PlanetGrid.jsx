import React, { useEffect, useState } from 'react'
import PlanetCard from './PlanetCard'

export default function PlanetGrid () {
  const [planets, setPlanets] = useState([])
  const [addedPlanet, setAddedPlanet] = useState(false)

  useEffect(() => {
    async function fetchPlanets () {
      try {
        const newPlanets = await fetch('./planets')
        const jsonPlanets = await newPlanets.json()
        setPlanets(jsonPlanets)
        console.log(jsonPlanets)
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

  const divPlanets = planets.map((planet) => {
    return <PlanetCard key={planet.id} planet={planet} />
  })

  return (
    <div className="row py-2">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 text-center">
        {divPlanets}
      </div>
    </div>
  )
}
