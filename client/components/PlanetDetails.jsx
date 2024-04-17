import React, { useContext } from 'react'

import { PlanetContext } from '../state/PlanetContext.js'

export default function PlanetDetails (props) {
  const { planet } = useContext(PlanetContext)

  const {
    name,
    descriptor,
    biome,
    exotic,
    extreme,
    infested,
    special,
    resources,
    sentinels,
    system
  } = planet

  return (
    <table className="w-max table-auto border-collapse  content-center border-slate-500 text-center">
      <tr>
        <td className="border-b border-slate-500">Name</td>
        <td className="border-b border-slate-500">{name}</td>
      </tr>
      <tr>
        <td className="border-y border-slate-500">Descriptor</td>
        <td className="border-y border-slate-500">{descriptor}</td>
      </tr>
      <tr>
        <td className="border-y border-slate-500">Biome</td>
        <td className="border-y border-slate-500">{biome}</td>
      </tr>
      <tr>
        <td className="border-y border-slate-500">Exotic</td>
        <td className="border-y border-slate-500">{exotic ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td className="border-y border-slate-500">Extreme</td>
        <td className="border-y border-slate-500">{extreme ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td className="border-y border-slate-500">Infested</td>
        <td className="border-y border-slate-500">{infested ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td className="border-y border-slate-500">Special</td>
        <td className="border-y border-slate-500">{special}</td>
      </tr>
      <tr>
        <td className="border-y border-slate-500">Resources</td>
        <td className="border-y border-slate-500">{resources.join(', ')}</td>
      </tr>
      <tr>
        <td className="border-y border-slate-500">Sentinels</td>
        <td className="border-y border-slate-500">{sentinels}</td>
      </tr>
      <tr>
        <td className="border-t border-slate-500">System</td>
        <td className="border-t border-slate-500">{system}</td>
      </tr>
    </table>
  )
}
