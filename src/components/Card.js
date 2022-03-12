import { Draggable } from 'react-beautiful-dnd'

const Card = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div className={snapshot.isDragging ? 'card-container' : 'card-container drag'}
          style ={{ ...provided.draggableProps.style }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item.content}
        </div>
      )}
    </Draggable>
  )
}

export default Card
