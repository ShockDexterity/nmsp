import React, { useContext } from 'react'

import { PlanetContext } from '../state/PlanetContext.js'

export default function PlanetDetails (props) {
  const { planet } = useContext(PlanetContext)

  const {
    // name,
    // descriptor,
    biome,
    // exotic,
    // extreme,
    // infested,
    // special,
    // resources,
    sentinels,
    system
  } = planet

  return (
    <div className="oxygen-regular text-center ">
      <div>Biome: {biome}</div>
      <div>Sentinels: {sentinels.toUpperCase()}</div>
      <div>{system} System</div>
    </div>
  )
}
