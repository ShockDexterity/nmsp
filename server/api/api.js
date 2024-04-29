import { Router } from 'express'

import * as DB from '../controller/mongodb.js'
const dbHandle = DB.connect('NMSP')
const planetsCollection = dbHandle.collection('planets')

const router = Router({
  caseSensitive: false,
  strict: false
})

router.get('/', async (req, res) => {
  const dbPlanets = await DB.retrieveAllPlanets(planetsCollection)

  if (dbPlanets.length === 0) {
    res.status(500).json({ error: 'No planets found' })
    return
  }

  res.status(200).json(dbPlanets)
})

export default router
