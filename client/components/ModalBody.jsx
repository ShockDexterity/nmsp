import React from 'react'
import PropTypes from 'prop-types'

import AddForm from './AddForm'
import EditForm from './EditForm'
import PlanetDetails from './PlanetDetails'

export default function ModalBody ({ display }) {
  switch (display) {
    case 'details':
      return <PlanetDetails />
    case 'add':
      return <AddForm />
    case 'edit':
      return <EditForm />
    default:
      return null
  }
}

ModalBody.propTypes = {
  display: PropTypes.string.isRequired
}
