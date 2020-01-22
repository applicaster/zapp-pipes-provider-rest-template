import { prop, map } from 'ramda'
import { createActionUrl } from '../../utils/util'
import { HANDLER_TYPES } from '../../config/const'

const categoriesListItem = item => ({
  type: { value: 'feed' },
  id: String(prop('id', item)),
  title: prop('name', item),
  content: {
    type: 'feed',
    src: createActionUrl({
      type: HANDLER_TYPES.post,
      id: prop('id', item),
    }),
  },
})

const categoriesListParser = ({ id = '' }) => data => {
  return {
    type: { value: 'feed' },
    id,
    entry: map(categoriesListItem)(data),
  }
}

export default categoriesListParser
