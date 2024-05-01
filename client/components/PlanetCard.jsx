import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { DispatchContext } from '../state/PlanetContext.js'

import { getBiomeBackground, getSentinelBackground } from '../utils/styles.js'
import { generateDescriptorText } from '../utils/texts.js'

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

  const handleDetailsClick = () => {
    dispatch({ type: 'SET_PLANET', planet })
    dispatch({ type: 'DETAILS', title: name })
  }

  const handleEditClick = () => {
    dispatch({ type: 'SET_PLANET', planet })
    dispatch({ type: 'EDIT', title: `Edit ${name}` })
  }

  // const handleDeleteClick = () => {
  //   dispatch({ type: 'SET_PLANET', planet })
  //   dispatch({ type: 'DETAILS', title: name })
  // }

  return (
    <div>
      <button type="button" onClick={handleDetailsClick} className="w-full">
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
      <br />
      <button
        onClick={handleEditClick}
        className="w-1/3 rounded-lg border-2 border-slate-400 bg-slate-400 py-2 text-white hover:border-slate-500 hover:bg-slate-500"
      >
        Edit
      </button>
      <button className="w-1/3 rounded-lg border-2 border-red-400 bg-red-400 py-2 text-white hover:border-red-500 hover:bg-red-500">
        Delete
      </button>
    </div>
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
