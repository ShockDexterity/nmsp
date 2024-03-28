import Express from 'express'
import planetRouter from './api/api.js'

const app = Express()

app.use('/', (req, res, next) => {
  console.log(`${req.method} request from path ${req.path}`)
  next()
})

app.use('/planets', planetRouter)

app.use(Express.static('public'))

app.listen(5000, () => {
  console.log('Server is running on port 5000')
})
