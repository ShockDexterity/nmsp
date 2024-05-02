import React from 'react'
import PropTypes from 'prop-types'

export default function PlanetSorter ({ sortingValue, setSortingValue }) {
  return (
    <>
      <label htmlFor="sorter">Sort planets by resource: </label>
      <input
        type="text"
        name="sorter"
        value={sortingValue}
        onChange={(e) => {
          setSortingValue(e.target.value)
        }}
      />
    </>
  )
}

PlanetSorter.propTypes = {
  sortingValue: PropTypes.string.isRequired,
  setSortingValue: PropTypes.func.isRequired
}
