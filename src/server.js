const express = require('express')
const handlers = require('./handlers').default

const app = express()
const port = process.env.PORT || 8080;

handlers(app)

app.listen(port, () =>
  console.log(`DSP App is listening on port ${port}!`),
)
