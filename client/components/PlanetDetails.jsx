import React, { useContext } from 'react'

import { PlanetContext } from '../state/PlanetContext.js'

import { getBiomeBackground, getSentinelBackground } from '../styles.js'

export default function PlanetDetails (props) {
  const { planet } = useContext(PlanetContext)

  const {
    // name,
    descriptor,
    biome,
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
          {descriptor} ({biome} Biome)
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
