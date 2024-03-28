import React from 'react'
import PropTypes from 'prop-types'

export default function Header ({ title, subtitle }) {
  return (
    <div className="row">
      <div className="border-y-2" style={{ width: '100%' }}>
        <h1>{title}</h1>
        {subtitle}
      </div>
    </div>
  )
}

// Validate props
Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}
