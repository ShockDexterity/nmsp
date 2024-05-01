import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { DispatchContext } from '../state/PlanetContext.js'

import { getBiomeBackground, getSentinelBackground } from '../styles.js'

export default function PlanetCard ({ planet }) {
  const dispatch = useContext(DispatchContext)

  const {
    // _id, // string
    name, // string
    descriptor, // string
    // biome, // string,
    moon, // boolean
    exotic, // boolean
    extreme, // boolean
    infested, // boolean
    // special, // string
    // resources, // object with 3 strings
    sentinels, // string
    system // string
  } = planet

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
    dispatch({ type: 'SET_PLANET', planet })
    dispatch({ type: 'DETAILS', title: name })
  }

  return (
    <button type="button" onClick={handleClick}>
      <div className="oxygen-regular rounded-lg border-2 border-gray-500 bg-white p-4 shadow hover:shadow-md">
        <div className="border-y-2 border-t-0 border-black">{name}</div>
        <div className="pt-2">
          <p className={getBiomeBackground(exotic, extreme, infested)}>
            {generateDescriptorText(descriptor, moon)}
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
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    descriptor: PropTypes.string.isRequired,
    biome: PropTypes.string.isRequired,
    moon: PropTypes.bool.isRequired,
    exotic: PropTypes.bool.isRequired,
    extreme: PropTypes.bool.isRequired,
    infested: PropTypes.bool.isRequired,
    special: PropTypes.string.isRequired,
    resources: PropTypes.exact({
      r1: PropTypes.string.isRequired,
      r2: PropTypes.string.isRequired,
      r3: PropTypes.string.isRequired
    }),
    sentinels: PropTypes.string.isRequired,
    system: PropTypes.string.isRequired
  }).isRequired
}

/**
 *
 * @param {string} descriptor the planet descriptor
 * @param {boolean} isMoon is the planetary body a moon
 * @returns {string} the descriptor string of a planetary body
 */
function generateDescriptorText (descriptor, isMoon) {
  const specialDescriptors = {
    'of Light': `${isMoon ? 'Moon' : 'Planet'} of Light`,
    'Planetary Anomaly': 'Planetary Anomaly'
  }

  if (descriptor in specialDescriptors) {
    return specialDescriptors[descriptor]
  }

  return `${descriptor} ${isMoon ? 'Moon' : 'Planet'}`
}
