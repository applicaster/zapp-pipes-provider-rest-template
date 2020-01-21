import handlerFactory from '../handlerFactory/handlerFactory'
import { CATEGORIES } from '../../config/endpoints'

// Parser
import categoriesParser from '../../parsers/categoriesParser/categoriesParser'

// Model
import feedModel from '../../models/feedModel'

const getCategories = async params => {
  const endpoint = `${CATEGORIES}`

  // Parser
  const parser = categoriesParser(1)

  // Model
  const model = feedModel({ id: 1 })

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

export default getCategories
