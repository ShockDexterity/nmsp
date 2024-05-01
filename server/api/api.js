import Express, { Router } from 'express'

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
  console.log('validating')
  validatePlanet(req.body, async (err, validPlanet) => {
    if (err) {
      console.log('error')
      res.status(err.status).json({ error: true, message: err.message })
      return
    }

    console.log('no error')

    const planetToEdit = await DB.getPlanetByID(
      planetsCollection,
      validPlanet._id
    )
    if (!planetToEdit) {
      res.status(400).json({ error: true, message: 'Planet does not exist' })
      return
    }

    try {
      await DB.updatePlanet(planetsCollection, planetToEdit._id, validPlanet)
      res
        .status(200)
        .json({ success: true, message: `${validPlanet.name} updated` })
    }
    catch (err) {
      res.status(500).json({ error: true, message: 'Unable to update planet' })
    }
  })
})

router.delete('/:id', async (req, res) => {
  const _id = req.params.id
  if (!_id) {
    res.status(400).json({ error: true, message: 'No ID provided' })
    return
  }

  const deletedPlanet = await DB.deletePlanet(planetsCollection, _id)
  if (!deletedPlanet) {
    res.status(400).json({ error: true, message: 'Unable to delete planet' })
    return
  }

  res.status(200).json({
    success: true,
    name: deletedPlanet.name,
    message: `"${deletedPlanet.name}" deleted`
  })
})

export default router
