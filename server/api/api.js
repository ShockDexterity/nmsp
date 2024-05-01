import Express, { Router } from 'express'

// import fs from 'fs'
// import { biomeDescriptorsFromCSV } from './utils.js'
// biomeDescriptorsFromCSV(
//   fs.readFileSync('./server/data/biomeDescriptors.csv', 'utf8')
// )

import * as DB from '../controller/mongodb.js'
import { validatePlanet } from './planetValidators.js'
const dbHandle = DB.connect('NMSP')
const planetsCollection = dbHandle.collection('planets')

const router = Router({
  caseSensitive: false,
  strict: false
})

router.use(Express.json({ type: 'application/json' }))

router.get('/', async (req, res) => {
  const dbPlanets = await DB.retrieveAllPlanets(planetsCollection)

  if (dbPlanets.length === 0) {
    res.status(500).json({ error: 'No planets found' })
    return
  }

  res.status(200).json(dbPlanets)
})

router.put('/', async (req, res) => {
  validatePlanet(req.body, async (err, validPlanet) => {
    if (err) {
      res.status(err.status).json({ error: true, message: err.message })
      return
    }

    const shouldNotExist = await DB.getPlanetByName(
      planetsCollection,
      validPlanet.name
    )
    if (shouldNotExist) {
      res.status(400).json({ error: true, message: 'Planet already exists' })
      return
    }

    try {
      await DB.insertPlanet(planetsCollection, validPlanet)
      res
        .status(200)
        .json({ success: true, message: `${validPlanet.name} added` })
    }
    catch (err) {
      res.status(500).json({ error: true, message: 'Unable to add planet' })
    }
  })
})

router.put('/edit', async (req, res) => {
  validatePlanet(req.body, async (err, validPlanet) => {
    if (err) {
      res.status(err.status).json({ error: true, message: err.message })
      return
    }

    const shouldExist = await DB.getPlanetByName(
      planetsCollection,
      validPlanet.name
    )
    if (!shouldExist) {
      res.status(400).json({ error: true, message: 'Planet does not exist' })
      return
    }

    try {
      await DB.updatePlanet(planetsCollection, shouldExist._id, validPlanet)
      res
        .status(200)
        .json({ success: true, message: `${validPlanet.name} updated` })
    }
    catch (err) {
      res.status(500).json({ error: true, message: 'Unable to update planet' })
    }
  })
})
export default router
