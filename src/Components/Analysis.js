import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import './Analysis.css';

const Analysis = () => {
  const location = useLocation(); // Use useLocation hook to access the current location object
  const movesData = location.state.analysisResult; // Set movesData to analysisResult passed via location state

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
