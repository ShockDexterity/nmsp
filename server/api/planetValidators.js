import { descriptors } from '../data/biomeDescriptors.js'

export function validatePlanet (planet, callback) {
  if (!planet) {
    callback({ status: 400, message: 'No planet provided' })
    return
  }
  if (typeof planet !== 'object' || Array.isArray(planet)) {
    callback({ status: 400, message: 'Invalid planet' })
    return
  }

  const cleanedPlanet = {}
  const messages = []

  if (!planet._id && !planet.adding) {
    callback({ status: 400, message: 'No ID provided' })
    return
  }
  cleanedPlanet._id = planet._id

  if (!planet.name) {
    callback({ status: 400, message: 'No name provided' })
    return
  }
  cleanedPlanet.name = planet.name

  if (!planet.system) {
    callback({ status: 400, message: 'No system provided' })
    return
  }
  cleanedPlanet.system = planet.system

  if (!planet.descriptor) {
    callback({ status: 400, message: 'No descriptor provided' })
    return
  }
  cleanedPlanet.descriptor = planet.descriptor

  if (!descriptors.includes(planet.descriptor)) {
    callback({ status: 400, message: 'Invalid descriptor' })
    return
  }
  if (
    cleanedPlanet.descriptor === 'Tropical' ||
    cleanedPlanet.descriptor === 'Desolate'
  ) {
    messages.push('')
  }
  cleanedPlanet.biome = descriptors[planet.descriptor]

  callback(null, cleanedPlanet, messages)
}
