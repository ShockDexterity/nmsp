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
      isExtreme,
      isInfested,
      isMoon
    ] = line.split(',')

    const isExotic = biome.search('Exotic') >= 0

    const newPlanet = {
      name,
      id: i++,
      descriptor,
      moon: isMoon === 'TRUE',
      biome: biome.replace(' (Exotic)', ''),
      exotic: isExotic,
      extreme: isExtreme === 'TRUE',
      infested: isInfested === 'TRUE',
      special,
      resources: [
        resource1.replace('Act.', 'Activated').replace('Mag.', 'Magnetized'),
        resource2.replace('Act.', 'Activated').replace('Mag.', 'Magnetized'),
        resource3.replace('Act.', 'Activated').replace('Mag.', 'Magnetized')
      ],
      sentinels,
      system,
      systemID: parseInt(systemID)
    }
    planets.push(newPlanet)
  }

  return planets
}
