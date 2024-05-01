import React from 'react'

import PlanetCard from './PlanetCard.jsx'

import { getPlanets } from '../utils/fetcher.js'
import { DispatchContext, PlanetContext } from '../state/PlanetContext.js'

export default function PlanetGrid (props) {
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

  const planetCards = planets.map((planet) => (
    <PlanetCard key={planet._id} planet={planet} {...props} />
  ))

  return (
    <div className="py-2">
      <div className="grid gap-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {planetCards !== 0 ? planetCards : <p>No planets found</p>}
      </div>
    </div>
  )
}
