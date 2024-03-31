import { Router } from 'express'
import fs from 'fs'

import { planetsFromCSV } from './utils.js'

const router = Router({
  caseSensitive: false,
  strict: false
})

const rawPlanets = fs.readFileSync('./server/api/data/planets.csv', {
  encoding: 'utf-8'
})
const planets = planetsFromCSV(rawPlanets)

planets.sort((a, b) => {
  if (a.systemID !== b.systemID) {
    return a.systemID - b.systemID
  }
  return a.name.localeCompare(b.name)
})

router.get('/', (req, res) => {
  res.status(200).json(planets)
})

export default router
