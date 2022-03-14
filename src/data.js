import { v4 as uuid } from 'uuid'

const itemsData = [
  { id: uuid(), content: 'First task' },
  { id: uuid(), content: 'Second task' },
  { id: uuid(), content: 'Third task' },
]

export const columnsData = {
  [uuid()]: {
    name: 'Not started',
    items: itemsData,
  },
  [uuid()]: {
    name: 'In progress',
    items: [],
  },
  [uuid()]: {
    name: 'Completed',
    items: [],
  },
  [uuid()]: {
    name: 'No status',
    items: [],
  },
}
