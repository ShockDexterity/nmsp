import React from 'react'
import PropTypes from 'prop-types'

export default function Header ({ title, subtitle }) {
  return (
    <div className="row">
      <div
        className="border-y-2 font-mono text-center py-2"
        style={{ width: '100%' }}
      >
        <p className="text-2xl">{title}</p>
        <p className="text-sm italic">{subtitle}</p>
      </div>
    </div>
  )
}

// Validate props
Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}
