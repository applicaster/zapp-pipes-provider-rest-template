import { prop, map, pathOr } from 'ramda'

const postItem = item => ({
  type: { value: 'feed' },
  id: String(prop('id', item)),
  title: pathOr('', ['title', 'rendered'], item),
})

const postListParser = ({ id = '' }) => data => {
  return {
    type: { value: 'feed' },
    id,
    entry: map(postItem)(data),
  }
}

export default postListParser
