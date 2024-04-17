import React from 'react'
import PropTypes from 'prop-types'

import { Dialog } from '@headlessui/react'

export default function Modal ({ isOpen, closeModal }) {
  return (
    <Dialog open={isOpen} onClose={closeModal} as="div" className="relative">
      <Dialog.Panel>
        <Dialog.Title>Planet Details</Dialog.Title>
        <Dialog.Description>
          This is a description of the planet
        </Dialog.Description>
      </Dialog.Panel>
    </Dialog>
  )
}

// PropTypes
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}
