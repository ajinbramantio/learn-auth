const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send({
    message: 'Learn-Auth'
  })
})

app.listen(port, () => {
  console.log(`Learn auth app is listening on localhost:${port}`)
})
