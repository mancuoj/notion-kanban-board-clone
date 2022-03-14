import { Draggable } from 'react-beautiful-dnd'

const Card = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div className={`bg-white my-2 rounded-md p-3 ${snapshot.isDragging && 'opacity-50'}`}
          style={{ ...provided.draggableProps.style }}
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
