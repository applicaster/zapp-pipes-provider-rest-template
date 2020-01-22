import { compose, ifElse, isNil, not, prop } from 'ramda'

const hasError = compose(not, isNil, prop('error'))

const throwError = ({ error }) => {
  throw error
}

const schemaCreator = (schema, data) =>
  ifElse(hasError, throwError, prop('value'))(schema.validate(data))

export default schemaCreator
