import React from 'react'
import PropTypes from 'prop-types'

export default function AddButton ({ handleAddClick }) {
  return (
    <div className="p-2">
      <button
        className="rounded-lg border-2 border-blue-400 bg-blue-400 px-4 py-2 text-white hover:border-blue-500 hover:bg-blue-500"
        type="button"
        onClick={handleAddClick}
      >
        Add a planet
      </button>
    </div>
  )
}

AddButton.propTypes = {
  handleAddClick: PropTypes.func.isRequired
}
