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

import ModalBody from './components/ModalBody.jsx'

export default function App () {
  const [reducer, dispatch] = useReducer(planetReducer, REDUCER_INIT)

  const handleClickAdd = () => {
    dispatch({ type: 'ADD' })
  }

  return (
    <div className="container mx-auto px-4">
      <PlanetContext.Provider value={reducer}>
        <DispatchContext.Provider value={dispatch}>
          <Header
            title="No Man's Sky Planet Browser"
            subtitle="Click on a planet card for more information"
          />

          <button
            className="rounded-lg border-2 border-blue-400 bg-blue-400 px-4 py-2 text-white hover:border-blue-500 hover:bg-blue-500"
            type="button"
            onClick={handleClickAdd}
          >
            Add a planet
          </button>

          <PlanetGrid />
          <Modal
            isOpen={reducer.show}
            closeModal={() => dispatch({ type: 'HIDE' })}
          >
            <ModalBody display={reducer.display} />
          </Modal>
        </DispatchContext.Provider>
      </PlanetContext.Provider>
    </div>
  )
}
