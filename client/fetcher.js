// Get planets
export async function getPlanets () {
  const response = await fetch('./planets')
  const json = await response.json()
  return json
}

// Add a planet
export async function addPlanet (planet) {
  if (typeof planet === 'object') {
    planet = JSON.stringify(planet)
  }

  const response = await fetch('./planets', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(planet)
  })
  const json = await response.json()
  return json
}

// Update a planet
export async function updatePlanet (planet) {
  if (typeof planet === 'object') {
    planet = JSON.stringify(planet)
  }

  const response = await fetch('./planets', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(planet)
  })
  const json = await response.json()
  return json
}

// Delete a planet
export async function deletePlanet (id) {
  const response = await fetch(`./planets/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()
  return json
}
