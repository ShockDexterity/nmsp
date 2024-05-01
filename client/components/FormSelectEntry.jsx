import React from 'react'
import PropTypes from 'prop-types'

export default function FormSelectEntry ({
  label,
  name,
  defaultSelected,
  children
}) {
  const [selected, setSelected] = React.useState(defaultSelected)

  return (
    <div className="sm:col-span-6">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          name={name}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          required
        >
          {children}
        </select>
      </div>
    </div>
  )
}

FormSelectEntry.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultSelected: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
