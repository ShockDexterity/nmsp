import React from 'react'
import FormTextEntry from './FormTextEntry'
import FormSelectEntry from './FormSelectEntry'

export default function AddForm (props) {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <FormTextEntry label="Planet Name" name="name" />
            <FormTextEntry label="Planet Descriptor" name="descriptor" />
            <FormTextEntry label="System Name" name="system" />

            <FormTextEntry label="Resource 1" name="r1" />
            <FormTextEntry label="Resource 2" name="r2" />
            <FormTextEntry label="Resource 3" name="r3" />

            <FormSelectEntry label="Sentinels" name="sentinels">
              <option value="low">Low</option>
              <option value="high">High</option>
              <option value="aggressive">Aggressive</option>
              <option value="corrupt">Corrupt</option>
            </FormSelectEntry>
          </div>
        </div>
      </div>
    </form>
  )
}
