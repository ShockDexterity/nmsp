import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { DispatchContext } from '../state/PlanetContext'

export default function PlanetCard ({
  planet: {
    name, // string
    descriptor, // string
    biome, // string
    exotic, // boolean
    extreme, // boolean
    infested, // boolean
    special, // string
    resources, // array with 3 strings
    sentinels, // string
    system // string
  }
}) {
  const dispatch = useContext(DispatchContext)

  const sentinelText = (
    <p>
      Sentinel Level:{' '}
      <span
        className={
          sentinels === 'aggressive' ? ' oxygen-bold' : 'oxygen-regular'
        }
      >
        {sentinels === 'low' ? sentinels : sentinels.toUpperCase()}
      </span>
    </p>
  )

  const handleClick = () => {
    dispatch({
      type: 'SET_PLANET',
      planet: {
        name,
        descriptor,
        biome,
        exotic,
        extreme,
        infested,
        special,
        resources,
        sentinels,
        system
      }
    })
    dispatch({ type: 'DETAILS', title: name })
  }

  return (
    <button type="button" onClick={handleClick}>
      <div className="oxygen-regular rounded-lg border-2 border-gray-500 bg-white p-4 shadow hover:shadow-md">
        <div className="border-y-2 border-t-0 border-black">{name}</div>
        <div className="pt-2">
          <p className={getBiomeBackground(exotic, extreme, infested)}>
            {descriptor} {/* ({biome}) */}
          </p>
        </div>
        <div className={getSentinelBackground(sentinels)}>{sentinelText}</div>
        <div>{system} System</div>
      </div>
    </button>
  )
}

// PropTypes
PlanetCard.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    descriptor: PropTypes.string.isRequired,
    biome: PropTypes.string,
    exotic: PropTypes.bool.isRequired,
    extreme: PropTypes.bool.isRequired,
    infested: PropTypes.bool.isRequired,
    special: PropTypes.string,
    resources: PropTypes.exact({
      r1: PropTypes.string.isRequired,
      r2: PropTypes.string.isRequired,
      r3: PropTypes.string.isRequired
    }),
    sentinels: PropTypes.string.isRequired,
    system: PropTypes.string.isRequired
  }).isRequired
}

function getBiomeBackground (exotic, extreme, infested) {
  if (exotic && extreme) {
    return 'bg-gradient-to-r from-cyan-500 to-red-500'
  }
  if (extreme && infested) {
    return 'bg-gradient-to-r from-red-400 to-green-500'
  }
  if (exotic) {
    return 'bg-cyan-500'
  }
  if (extreme) {
    return 'bg-red-400'
  }
  if (infested) {
    return 'bg-green-500'
  }
  return 'bg-inherit'
}

function getSentinelBackground (sentinel) {
  if (sentinel === 'low') {
    return ''
  }
  if (sentinel === 'high') {
    return 'bg-yellow-500'
  }
  if (sentinel === 'aggressive') {
    return 'bg-red-500'
  }
  return 'bg-purple-400'
}
