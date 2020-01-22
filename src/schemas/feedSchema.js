import Joi from 'joi-browser'
import schemaCreator from './schemaCreator'
import entrySchema from './entrySchema'

const feedSchema = {
  schema: Joi.object()
    .keys({
      type: Joi.object()
        .keys({
          value: Joi.string().default('feed'),
        })
        .default({ value: 'feed' }),
      title: Joi.string()
        .default('')
        .allow(''),
      id: Joi.string()
        .default('')
        .allow(''),
      entry: Joi.array()
        .items(entrySchema.schema)
        .default([]),
    })
    .required(),
  create: data => schemaCreator(feedSchema.schema, data),
}

export default feedSchema
