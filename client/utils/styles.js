export function getBiomeBackground (exotic, extreme, infested) {
  if (exotic && extreme) {
    return 'bg-gradient-to-r from-cyan-500 to-red-500'
  }
  if (extreme && infested) {
    return 'bg-gradient-to-r from-red-400 to-green-500'
  }
  if (exotic) {
    return 'bg-cyan-500'
  }
  if (extreme) {
    return 'bg-red-400'
  }
  if (infested) {
    return 'bg-green-500'
  }
  return 'bg-inherit'
}

export function getSentinelBackground (sentinel) {
  if (sentinel === 'low') {
    return ''
  }
  if (sentinel === 'high') {
    return 'bg-yellow-500'
  }
  if (sentinel === 'aggressive') {
    return 'bg-red-500'
  }
  return 'bg-purple-400'
}
