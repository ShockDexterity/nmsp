import React, { useContext } from 'react'

import { PlanetContext } from '../state/PlanetContext.js'

import { getBiomeBackground, getSentinelBackground } from '../styles.js'

export default function PlanetDetails (props) {
  const { planet } = useContext(PlanetContext)

  const {
    // name,
    descriptor,
    biome,
    moon,
    exotic,
    extreme,
    infested,
    special,
    resources,
    sentinels,
    system
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

  const border = 'border-t-2 border-gray-300'

  return (
    <div className="oxygen-regular text-center">
      <div>
        <p className={getBiomeBackground(exotic, extreme, infested)}>
          {generateDescriptorText(descriptor, moon)} ({biome} Biome)
        </p>
      </div>
      <div className={getSentinelBackground(sentinels) + ` ${border}`}>
        {sentinelText}
      </div>
      <div className={border}>Special Resource: {special}</div>
      <div className={border}>
        <p>
          Resources: {resources.r1} {resources.r2} {resources.r3}
        </p>
      </div>
      <div className={border}>{system} System</div>
    </div>
  )
}

/**
 *
 * @param {string} descriptor the planet descriptor
 * @param {boolean} isMoon is the planetary body a moon
 * @returns {string} the descriptor string of a planetary body
 */
function generateDescriptorText (descriptor, isMoon) {
  const specialDescriptors = {
    'of Light': isMoon ? 'Moon of Light' : 'Planet of Light',
    'Planetary Anomaly': 'Planetary Anomaly'
  }

  if (descriptor in specialDescriptors) {
    return specialDescriptors[descriptor]
  }

  return `${descriptor} ${isMoon ? 'Moon' : 'Planet'}`
}
