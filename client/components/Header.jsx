import React from 'react'
import PropTypes from 'prop-types'

export default function Header ({ title, subtitle }) {
  return (
    <div className="border-y-2 border-t-0 py-2 text-center">
      <h1 className="oxygen-bold text-2xl">{title}</h1>
      <p className="oxygen-light text-sm">
        <i>{subtitle}</i>
      </p>
    </div>
  )
}

// Validate props
Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}
