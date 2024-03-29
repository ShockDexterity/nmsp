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
/*
const card = document.createElement('div')
card.className = 'card'

const planetName = document.createElement('span')
planetName.className = 'planetInfo planetName'
planetName.textContent = planet.name
card.appendChild(planetName)

const planetBiome = document.createElement('div')
planetBiome.className = 'planetInfo'
if (planet.exotic) {
  planetBiome.className += ' exotic'
}
if (planet.extreme) {
  planetBiome.className += ' extreme'
}
if (planet.infested) {
  planetBiome.className += ' infested'
}
planetBiome.textContent = `${planet.biome} Planet`
card.appendChild(planetBiome)

const sentinelLevel = document.createElement('div')
sentinelLevel.className = 'planetInfo'
if (planet.sentinels === 'Aggressive') {
  sentinelLevel.className += ' aggressive'
  console.log(sentinelLevel.classList)
}
else if (planet.sentinels === 'Corrupt') {
  sentinelLevel.className += ' corrupt'
}
sentinelLevel.textContent = `${planet.sentinels} Sentinels`
card.appendChild(sentinelLevel)

const planetSystem = document.createElement('div')
planetSystem.className = 'planetInfo'
planetSystem.textContent = `${planet.system} System`
card.appendChild(planetSystem)

cardContainer.appendChild(card)
planetRow.appendChild(cardContainer)
*/
