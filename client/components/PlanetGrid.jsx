import React from 'react'
import PropTypes from 'prop-types'

import PlanetCard from './PlanetCard.jsx'

import { getPlanets } from '../utils/fetcher.js'
import { DispatchContext, PlanetContext } from '../state/PlanetContext.js'

export default function PlanetGrid ({ sortingValue = '', ...props }) {
  const [planets, setPlanets] = React.useState([])

  const { refresh } = React.useContext(PlanetContext)
  const dispatch = React.useContext(DispatchContext)

  React.useEffect(() => {
    async function fetchPlanets () {
      try {
        const newPlanets = await getPlanets()
        setPlanets(newPlanets)
      }
      catch (error) {
        console.error(error)
      }
    }

    if (refresh) {
      fetchPlanets()
      // console.log('Refreshed')
      dispatch({ type: 'STOP_REFRESH' })
    }
  }, [refresh, dispatch])

  // const planetCards = planets.map((planet) => {
  //   return <PlanetCard key={planet._id} planet={planet} {...props} />
  // })

  let planetCards = []

  if (sortingValue) {
    planetCards = planets
      .filter((planet) =>
        checkResources(
          Object.values(planet.resources),
          planet.special,
          sortingValue
        )
      )
      .map((planet) => {
        return <PlanetCard key={planet._id} planet={planet} {...props} />
      })
  }
  else {
    planetCards = planets.map((planet) => {
      return <PlanetCard key={planet._id} planet={planet} {...props} />
    })
  }

  return (
    <div className="py-2">
      <div className="grid gap-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {planetCards.length !== 0 ? planetCards : <p>No planets found</p>}
      </div>
    </div>
  )
}

PlanetGrid.propTypes = {
  sortingValue: PropTypes.string
}

function checkResources (resources, special, value) {
  return (
    resources.some((resource) =>
      resource.toLowerCase().startsWith(value.toLowerCase())
    ) || special.toLowerCase().startsWith(value.toLowerCase())
  )
}
