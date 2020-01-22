import Joi from 'joi-browser'
import { MEDIA_TYPES } from '../config/const'
import schemaCreator from './schemaCreator'
import mediaItemSchema from './mediaItemSchema'

const mediaGroupSchema = {
  schema: Joi.object().keys({
    type: Joi.string()
      .valid(MEDIA_TYPES)
      .required(),
    media_item: Joi.array()
      .items(mediaItemSchema.schema)
      .default([]),
  }),
  create: data => schemaCreator(mediaGroupSchema.schema, data),
}

export default mediaGroupSchema
