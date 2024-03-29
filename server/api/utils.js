export function planetsFromCSV (csv) {
  let lines = csv.split(/\r\n|\n/)
  const planets = []

  // Remove the first and list lines
  lines = lines.slice(1, -1)

  let i = 0
  for (const line of lines) {
    const [
      system,
      systemID,
      name,
      descriptor,
      biome,
      special,
      resource1,
      resource2,
      resource3,
      sentinels,
      extreme,
      infested
    ] = line.split(',')

    const newPlanet = {
      name,
      id: i++,
      descriptor,
      biome,
      special,
      resources: [resource1, resource2, resource3],
      sentinels,
      extreme: extreme === 'TRUE',
      infested: infested === 'TRUE',
      system,
      systemID: parseInt(systemID)
    }
    planets.push(newPlanet)
  }

  return planets
}
