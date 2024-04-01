import React from 'react'
import PropTypes from 'prop-types'

export default function PlanetCard ({
  planet: {
    name, // string
    descriptor, // string
    biome, // string
    exotic, // boolean
    extreme, // boolean
    infested, // boolean
    special, // string
    resources, // string[]
    sentinels, // string
    system // string
  }
}) {
  let biomeBG = ''
  if (exotic) {
    biomeBG = 'bg-slate-400'
  }

  const sentinelBG =
    sentinels === 'low'
      ? 'bg-green-500'
      : sentinels === 'high'
        ? 'bg-yellow-500'
        : sentinels === 'aggressive'
          ? 'bg-red-500'
          : 'bg-purple-400'

  const sentinelText = <p>Sentinel Level: {sentinels.toUpperCase()}</p>

  return (
    <div className="bg-gray-200 p-4 oxygen-regular border-gray-500 border-2 rounded-lg">
      <h2>{name}</h2>
      <p className={biomeBG}>
        {descriptor} ({biome})
      </p>
      <p className={sentinelBG}>{sentinels !== 'low' && sentinelText}</p>
      <p>{system} System</p>
    </div>
  )
}

// PropTypes
PlanetCard.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    descriptor: PropTypes.string.isRequired,
    biome: PropTypes.string.isRequired,
    exotic: PropTypes.bool.isRequired,
    extreme: PropTypes.bool.isRequired,
    infested: PropTypes.bool.isRequired,
    special: PropTypes.string.isRequired,
    resources: PropTypes.arrayOf(PropTypes.string).isRequired,
    sentinels: PropTypes.string.isRequired,
    system: PropTypes.string.isRequired
  }).isRequired
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
