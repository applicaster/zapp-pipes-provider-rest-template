/* eslint-disable prettier/prettier */
import { keys } from 'ramda'
import commands from './commands'
import { HANDLER_TYPES } from '../config/const'

const  handler = (app) => {
  // eslint-disable-next-line consistent-return
  /** CHANGE THE NEXT LINE BASED ON YOUR REAL PATH * */
  app.get('/restExample/fetchData', async function(req, res) {
    const { query } = req
    const { type = '' } = query

    if (!keys(HANDLER_TYPES).includes(type)) {
      return res.send({ error: 'unknown request' })
    }

    try {
      await commands[type](query).then(response => res.send(response))
    }
    catch(err) {
      res.send({ error: err })
    }
  })
}

export default handler
