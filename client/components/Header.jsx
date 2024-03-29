import React from 'react'
import PropTypes from 'prop-types'

export default function Header ({ title, subtitle }) {
  return (
    <div className="row">
      <div className="border-y-2 text-center py-2">
        <h1 className="text-2xl oxygen-bold">{title}</h1>
        <p className="text-sm oxygen-light">
          <i>{subtitle}</i>
        </p>
      </div>
    </div>
  )
}

// Validate props
Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}
