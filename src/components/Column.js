import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Card from './Card'

const Column = ({ colId, col }) => {
  return (
    <Droppable droppableId={colId} key={colId}>
      {(provided, snapshot) => {
        return (
          <div
            className= {`${snapshot.isDraggingOver && 'bg-blue-100'}`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {col.items.map((item, index) => (
              <Card key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )
      }}
    </Droppable>
  )
}

export default Column
