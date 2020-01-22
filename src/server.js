const express = require('express')
const handlers = require('./handlers').default

const app = express()
const port = 8080

// app.get('/', (req, res) => res.send('Hello World!'))
handlers(app)

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
)
