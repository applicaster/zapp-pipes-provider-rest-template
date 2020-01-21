import handlerFactory from '../handlerFactory/handlerFactory'
import errorHandler from '../../utils/util'
import { POST } from '../../config/endpoints'

// Parser
import postListParser from '../../parsers/postParser/postParser'

// Model
import feedModel from '../../models/feedModel'

const getPost = async params => {
  const { id } = params
  const endpoint = `${POST}`

  // validation params
  if (!id) return errorHandler('Competition need id (numeric)')

  // parser
  const parser = postListParser({ id })

  // Model
  const model = feedModel({ id })

  return handlerFactory({
    network: {
      endpoint,
      config: {
        params: { ...params },
      },
    },
    parser,
    model,
  })
}

export default getPost
