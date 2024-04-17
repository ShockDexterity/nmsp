/**
 * @param {string} csv
 * @returns {string[]}
 */
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
      isExotic,
      isExtreme,
      isInfested,
      isMoon
    ] = line.split(/,/)

    const newPlanet = {
      name,
      id: i++,
      descriptor: generateDescriptorText(descriptor, isMoon === 'TRUE'),
      biome: biome.replace(' (Exotic)', ''),
      exotic: isExotic === 'TRUE',
      extreme: isExtreme === 'TRUE',
      infested: isInfested === 'TRUE',
      special,
      resources: [
        resource1.replace('Act.', 'Activated').replace('Mag.', 'Magnetized'),
        resource2.replace('Act.', 'Activated').replace('Mag.', 'Magnetized'),
        resource3.replace('Act.', 'Activated').replace('Mag.', 'Magnetized')
      ],
      sentinels: sentinels.toLowerCase(),
      system,
      systemID: parseInt(systemID)
    }
    planets.push(newPlanet)
  }

  return planets
}

/**
 *
 * @param {string} descriptor the planet descriptor
 * @param {boolean} isMoon is the planetary body a moon
 * @returns {string} the descriptor string of a planetary body
 */
function generateDescriptorText (descriptor, isMoon) {
  const specialDescriptors = {
    'of Light': `${isMoon ? 'Moon' : 'Planet'} of Light`,
    'Planetary Anomaly': 'Planetary Anomaly'
  }

  if (descriptor in specialDescriptors) {
    return specialDescriptors[descriptor]
  }

  return `${descriptor} ${isMoon ? 'Moon' : 'Planet'}`
}
