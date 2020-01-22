import { compose, concat, filter, join, keys, map } from 'ramda'
import { URL_SCHEMA } from '../config/const'

export const errorHandler = async error => {
  return error instanceof Error
    ? Promise.reject(error)
    : Promise.reject(error || 'Something went wrong')
}

export const createActionUrl = query =>
  compose(
    concat(`${URL_SCHEMA}fetchData?`),
    join('&'),
    map(item => `${item}=${query[item]}`),
    keys,
  )(query)

export const filterByTitle = range => item =>
  item.title.charCodeAt(0) >= range.charCodeAt(0) &&
  item.title.charCodeAt(0) <= range.charCodeAt(1)

export const filterParserWrapper = (parser, func) => data =>
  filter(func, parser(data).entry)
