import { v4 as uuid } from 'uuid'

export const columnsData = {
  [uuid()]: {
    name: 'Not started',
    items: [
      { id: uuid(), content: 'First task' },
      { id: uuid(), content: 'Second task' },
      { id: uuid(), content: 'Third task' },
    ],
    color: 'bg-red-100',
  },
  [uuid()]: {
    name: 'In progress',
    items: [
      { id: uuid(), content: 'Fourth task' },
      { id: uuid(), content: 'Fifth task' },
    ],
    color: 'bg-purple-100',
  },
  [uuid()]: {
    name: 'Completed',
    items: [],
    color: 'bg-green-100',
  },
  [uuid()]: {
    name: 'No status',
    items: [],
  },
}
