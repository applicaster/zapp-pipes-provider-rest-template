import Joi from 'joi-browser'
import { MEDIA_TYPES } from '../config/const'
import schemaCreator from './schemaCreator'

const mediaItemSchema = {
  schema: Joi.object().keys({
    type: Joi.string()
      .valid(MEDIA_TYPES)
      .required(),
    key: Joi.string()
      .default('')
      .allow(''),
    src: Joi.string()
      .default('')
      .allow(''),
  }),
  create: data => schemaCreator(mediaItemSchema.schema, data),
}

export default mediaItemSchema
