import feedSchema from '../schemas/feedSchema'
import entrySchema from '../schemas/entrySchema'

const feedModel = ({ id, title = '' }) => ({ entry = [] }) =>
  feedSchema.create({
    title,
    id: String(id),
    entry: entry.map(entrySchema.create),
  })

export default feedModel
