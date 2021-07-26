import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

const finalSpaceCharacters = [
  {
    id: 'tic-tac-toe',
    name: 'Tic-Tac_toe',
  },
  {
    id: 'fico-score',
    name: 'Fico Score',
  },
  {
    id: 'alexa/siri',
    name: 'Alexa/Siri',
  },
  {
    id: 'alphago',
    name: 'AlphaGo',
  },
  {
    id: 'skynet',
    name: 'Skynet',
  }
]

function App() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="App">
      <div className="App-header"><h2>GridFigle</h2></div>
        <div className="graph"><h4>Insert Graph here</h4></div>
        <div className="tiles">
        <h4>Tiles</h4>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>

                          <p>
                            { name }
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        </div>
      
    </div>
  );
}

export default App;
