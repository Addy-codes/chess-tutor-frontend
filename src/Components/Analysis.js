import React, { useState } from 'react';
import './Analysis.css'; 
//import movesData from './movesData.json';

const Analysis = () => {

  const movesData = [
    {"move": "e4", "exp": "e4 is a strong opening move, controlling the center and allowing for quick development of pieces."},
    {"move": "e5", "exp": "e5 is a good response, mirroring White's move and also controlling the center."},
    {"move": "Nf3", "exp": "Nf3 is a good move, developing the knight towards the center and preparing for castling."},
    {"move": "Nc6", "exp": "Nc6 is a reasonable move, developing the knight and contesting the center."},
    {"move": "Bc4", "exp": "Bc4 is a good move, developing the bishop and putting pressure on f7."},
    {"move": "Qg5", "exp": "Qg5 is a blunder as it puts the black queen in a vulnerable position and can be easily attacked."},
    {"move": "Nxg5", "exp": "Nxg5 is a good move, winning a knight and gaining material advantage."},
    {"move": "Nd8", "exp": "Nd8 is not a good move, as it moves a piece that was already developed back to its original square."},
    {"move": "Nc3", "exp": "Nc3 is a good move, developing the knight towards the center and preparing for further piece activity."},
    {"move": "d5", "exp": "d5 is a mistake as it weakens Black's pawn structure and does not effectively address the threats posed by White."},
    {"move": "Qg4", "exp": "Qg4 is a blunder as it puts the queen in a position to be captured by the knight on d5."},
    {"move": "1-0", "exp": "1-0 signifies the end of the game with White winning."}
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < movesData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Chess Moves</h1>
      
      <div className="moves-container">
        
        {movesData.map((move, index) => (
          <MoveBox
            key={index}
            move={move.move}
            index={index}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        ))}
      </div>

      <div className="move-explanation">
        {movesData[currentIndex] && (
          <MoveExplanation move={movesData[currentIndex].move} explanation={movesData[currentIndex].exp} />
        )}
      </div>

      <div className="buttons">
        <button className="button" onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
        <button className="button" onClick={handleNext} disabled={currentIndex === movesData.length - 1}>Next</button>
      </div>
    </div>
  );
};

// const MoveBox = ({ move, index, currentIndex, setCurrentIndex }) => (
//   <div
//     className={`move-box ${index === currentIndex ? 'highlighted' : ''}`}
//     onClick={() => setCurrentIndex(index)}
//   >
//     {move}
//   </div>
// );
const MoveBox = ({ move, index, currentIndex, setCurrentIndex }) => (
  <div
    className={`move-box ${index === currentIndex ? 'highlighted' : ''}`}
    onClick={() => setCurrentIndex(index)}
  >
    {move}
  </div>
);


const MoveExplanation = ({ move, explanation }) => (
  <div>
    <h2 className="move">Move: {move}</h2>
    <p className="explanation">{explanation}</p>
  </div>
);

export default Analysis;
