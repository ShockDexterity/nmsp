import React, { useEffect, useState } from 'react'

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
    return (
      <div
        key={planet.id}
        className="bg-gray-200 p-4 oxygen-regular border-gray-500 border-2 rounded-lg"
        // onClick={() => setAddedPlanet(true)}
      >
        <h2>{planet.name}</h2>
        <p>{planet.descriptor} Planet</p>
      </div>
    )
  })

  return (
    <div className="row py-2">
      <div className="grid grid-cols-4 gap-4 text-center">{divPlanets}</div>
    </div>
  )
}
