export function planetsFromCSV (csv) {
  let lines = csv.split(/\r\n|\n/)
  const planets = []

  // Remove the first and list lines
  lines = lines.slice(1, -1)

  for (let i = 1; i < lines.length; i++) {
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
    ] = lines[i].split(',')

    const newPlanet = {
      system,
      systemID: parseInt(systemID),
      name,
      descriptor,
      biome,
      special,
      resources: [resource1, resource2, resource3],
      sentinels,
      extreme: extreme === 'TRUE',
      infested: infested === 'TRUE'
    }
    planets.push(newPlanet)
  }

  return planets
}
