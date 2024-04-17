import React, { useReducer } from 'react'

import Header from './components/Header.jsx'
import PlanetGrid from './components/PlanetGrid.jsx'
import Modal from './components/Modal.jsx'

import {
  DispatchContext,
  REDUCER_INIT,
  PlanetContext,
  planetReducer
} from './state/PlanetContext.js'
import PlanetDetails from './components/PlanetDetails.jsx'

export default function App () {
  const [reducer, dispatch] = useReducer(planetReducer, REDUCER_INIT)

  return (
    <div className="container mx-auto px-4">
      <PlanetContext.Provider value={reducer}>
        <DispatchContext.Provider value={dispatch}>
          <Header
            title="No Man's Sky Planet Browser"
            subtitle="Click on a planet card for more information"
          />
          <PlanetGrid />
          <Modal
            isOpen={reducer.show}
            closeModal={() => dispatch({ type: 'HIDE' })}
          >
            <PlanetDetails />
          </Modal>
        </DispatchContext.Provider>
      </PlanetContext.Provider>
    </div>
  )
}
