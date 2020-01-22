import Joi from 'joi-browser'
import schemaCreator from './schemaCreator'
// import mediaGroupSchema from './mediaGroupSchema'
import { ENTRY_TYPES } from '../config/const'

const entrySchema = {
  schema: Joi.object().keys({
    type: Joi.object()
      .keys({
        value: Joi.string()
          .valid(ENTRY_TYPES)
          .default('feed'),
      })
      .default({ value: 'feed' }),
    id: Joi.string()
      .default('')
      .allow(''),
    title: Joi.string()
      .default('')
      .allow(''),
    content: Joi.object().default({}),
  }),
  create: data => schemaCreator(entrySchema.schema, data),
}

export default entrySchema
