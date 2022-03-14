import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { BsPlusLg } from 'react-icons/bs'
import { AiOutlineInbox } from 'react-icons/ai'
import { columnsData } from '../data'
import Column from './Column'

const onDragEnd = (res, cols, setCols) => {
  if (!res.destination) return
  const { source, destination } = res

  if (source.droppableId !== destination.droppableId) {
    const srcCol = cols[source.droppableId]
    const destCol = cols[destination.droppableId]
    const srcItems = [...srcCol.items]
    const destItems = [...destCol.items]
    const [removed] = srcItems.splice(source.index, 1)
    destItems.splice(destination.index, 0, removed)
    setCols({
      ...cols,
      [source.droppableId]: {
        ...srcCol,
        items: srcItems,
      },
      [destination.droppableId]: {
        ...destCol,
        items: destItems,
      },
    })
  }
  else {
    const col = cols[source.droppableId]
    const copiedItems = [...col.items]
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    setCols({
      ...cols,
      [source.droppableId]: {
        ...col,
        items: copiedItems,
      },
    })
  }
}

const Board = () => {
  const [cols, setCols] = useState(columnsData)

  return (
    <DragDropContext onDragEnd={res => onDragEnd(res, cols, setCols)}>
      {Object.entries(cols).map(([colId, col]) => {
        return (
          <div key={colId} className={`container rounded-md shadow-md ${col.color} bg-opacity-20 p-3 m-4`}>
            <div className="flex items-center">
              {col.name === 'No status' && <AiOutlineInbox className="w-4 h-4" />}
              <button className={`${col.color} p-1 rounded text-xs`}> {col.name} </button>
            </div>
            <Column colId={colId} col={col} />
            <button className="flex items-center hover:bg-gray-200 w-full rounded-md p-3 my-2">
              <BsPlusLg className="w-3 h-3 mr-1" />
              <span>New</span>
            </button>
          </div>
        )
      })}
    </DragDropContext>
  )
}

export default Board
