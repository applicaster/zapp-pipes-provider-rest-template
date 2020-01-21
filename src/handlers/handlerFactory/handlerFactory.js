import { pipe } from 'ramda'
import api from '../../config/api'
import { errorHandler } from '../../utils/util'

const handlerFactory = async ({
  network = {},
  parser = x => x,
  model = x => x,
}) => {
  const response = await api
    .get(network.endpoint, network.config)
    .catch(errorHandler)

  return pipe(parser, model)(response.data)
}

export default handlerFactory
