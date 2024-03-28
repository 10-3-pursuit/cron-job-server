const express = require('express')
const cors = require('cors')
const cron = require('node-cron')

const app = express()

app.use(cors())
app.use(express.json())

cron.schedule('*/10 * * * *', () => {
  const currentTime = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
  })
  console.log(`Running a task every 10 minutes. Current time: ${currentTime}`)
})
// ROUTES

app.get('/', (req, res) => {
  res.send('Welcome to Cron App')
})

app.get('/cron', (req, res) => {
  res.send('I am still running!!!!!')
})

// 404 PAGE
app.get('*', (req, res) => {
  res.json({ error: 'Page not found' })
})
// EXPORT
module.exports = app
