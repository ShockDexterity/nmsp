import React from 'react'
import PropTypes from 'prop-types'

export default function FormCheckboxEntry ({
  label,
  name,
  defaultChecked = false
}) {
  const [isChecked, setIsChecked] = React.useState(defaultChecked)

  return (
    <div className="relative flex gap-x-3">
      <div className="flex h-6 items-center">
        <input
          name={name}
          type="checkbox"
          className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
      </div>
      <div className="text-sm leading-6">
        <label htmlFor={name} className="font-medium text-gray-900">
          {label}
        </label>
      </div>
    </div>
  )
}

FormCheckboxEntry.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool
}
