import React from 'react'
import FormTextEntry from './FormTextEntry.jsx'
import FormSelectEntry from './FormSelectEntry.jsx'
import FormCheckboxEntry from './FormCheckboxEntry.jsx'

import { DispatchContext } from '../state/PlanetContext.js'

import { addPlanet } from '../utils/fetcher.js'

export default function AddForm (props) {
  const dispatch = React.useContext(DispatchContext)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.target
    const rawFormData = new FormData(form)
    const formData = Object.fromEntries(rawFormData.entries())
    formData.adding = true

    // Send the form data to the server
    // console.log(formData)
    try {
      const response = await addPlanet(formData)
      if (response.error) {
        console.error('error', response.error)
      }
      else {
        window.alert('Planet added successfully')
        dispatch({ type: 'REFRESH' })
      }

      // Clear the form
      form.reset()
    }
    catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 pb-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <FormTextEntry label="Planet Name" name="name" />
          <FormTextEntry label="Planet Descriptor" name="descriptor" />
          <FormTextEntry label="System Name" name="system" />

          <FormTextEntry label="Resource 1" name="r1" />
          <FormTextEntry label="Resource 2" name="r2" />
          <FormTextEntry label="Resource 3" name="r3" />

          <FormSelectEntry
            label="Sentinels"
            name="sentinels"
            defaultSelected="low"
          >
            <option value="low">Low</option>
            <option value="high">High</option>
            <option value="aggressive">Aggressive</option>
            <option value="corrupt">Corrupt</option>
          </FormSelectEntry>

          <br />

          <FormCheckboxEntry label="Exotic" name="exotic" />
          <FormCheckboxEntry label="Extreme" name="extreme" />
          <FormCheckboxEntry label="Infested" name="infested" />
          <FormCheckboxEntry label="Moon" name="moon" />

          <br />

          <button
            type="submit"
            className="w-full rounded-lg border-2 border-slate-400 bg-slate-400 py-2 text-white hover:border-slate-500 hover:bg-slate-500"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}
