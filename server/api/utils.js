import fs from 'fs'

/**
 * @param {string} csv
 * @returns {string[]}
 */
export function planetsFromCSV (csv) {
  let lines = csv.split(/\r\n|\n/)
  const planets = []

  console.log('hello')

  // Remove the first and list lines
  lines = lines.slice(1, -1)

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
      isExotic,
      isExtreme,
      isInfested,
      isMoon
    ] = line.split(/,/)

    const newPlanet = {
      name,
      descriptor,
      biome: biome.replace(' (Exotic)', ''),
      moon: isMoon === 'TRUE',
      exotic: isExotic === 'TRUE',
      extreme: isExtreme === 'TRUE',
      infested: isInfested === 'TRUE',
      special,
      resources: {
        r1: resource1
          .replace('Act.', 'Activated')
          .replace('Mag.', 'Magnetized'),
        r2: resource2
          .replace('Act.', 'Activated')
          .replace('Mag.', 'Magnetized'),
        r3: resource3.replace('Act.', 'Activated').replace('Mag.', 'Magnetized')
      },
      sentinels: sentinels.toLowerCase(),
      system
      // systemID: parseInt(systemID)
    }
    planets.push(newPlanet)
  }

  fs.writeFileSync(
    './server/data/planets.json',
    JSON.stringify(planets, null, 2)
  )

  return planets
}
