import React from 'react'

import FormTextEntry from './FormTextEntry.jsx'
import FormSelectEntry from './FormSelectEntry.jsx'
import FormCheckboxEntry from './FormCheckboxEntry.jsx'

import { DispatchContext, PlanetContext } from '../state/PlanetContext.js'
import { updatePlanet } from '../utils/fetcher.js'

export default function EditForm (props) {
  const { planet } = React.useContext(PlanetContext)
  const dispatch = React.useContext(DispatchContext)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.target
    const rawFormData = new FormData(form)
    const formData = Object.fromEntries(rawFormData.entries())
    formData._id = planet._id

    // Send the form data to the server
    // console.log(formData)
    try {
      const response = await updatePlanet(formData)
      if (response.error) {
        window.alert(response.message)
        console.error(response.error)
      }
      else {
        window.alert('Planet updated successfully')
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
          <FormTextEntry
            label="Planet Name"
            name="name"
            defaultText={planet?.name ?? ''}
          />
          <FormTextEntry
            label="Planet Descriptor"
            name="descriptor"
            defaultText={planet?.descriptor ?? ''}
          />
          <FormTextEntry
            label="System Name"
            name="system"
            defaultText={planet?.system ?? ''}
          />

          <FormTextEntry
            label="Resource 1"
            name="r1"
            defaultText={planet?.resources?.r1 ?? ''}
          />
          <FormTextEntry
            label="Resource 2"
            name="r2"
            defaultText={planet?.resources?.r2 ?? ''}
          />
          <FormTextEntry
            label="Resource 3"
            name="r3"
            defaultText={planet?.resources?.r3 ?? ''}
          />

          <FormTextEntry
            label="Planet Biome"
            name="biome"
            defaultText={planet?.biome ?? ''}
          />
          <FormTextEntry
            label="Planet Special"
            name="special"
            defaultText={planet?.special ?? ''}
          />

          <br />

          <FormSelectEntry
            label="Sentinels"
            name="sentinels"
            defaultSelected={planet?.sentinels ?? 'low'}
          >
            <option value="low">Low</option>
            <option value="high">High</option>
            <option value="aggressive">Aggressive</option>
            <option value="corrupt">Corrupt</option>
          </FormSelectEntry>

          <br />

          <FormCheckboxEntry
            label="Exotic"
            name="exotic"
            defaultChecked={planet?.exotic ?? false}
          />
          <FormCheckboxEntry
            label="Extreme"
            name="extreme"
            defaultChecked={planet?.extreme ?? false}
          />
          <FormCheckboxEntry
            label="Infested"
            name="infested"
            defaultChecked={planet?.infested ?? false}
          />
          <FormCheckboxEntry
            label="Moon"
            name="moon"
            defaultChecked={planet?.moon ?? false}
          />

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
