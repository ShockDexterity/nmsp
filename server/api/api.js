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

router.get('/', (req, res) => {
  res.status(200).json(planets)
})

export default router
