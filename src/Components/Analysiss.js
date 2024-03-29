//MAIN!!!!

// import React, { useState } from 'react';
// import './App.css'; 
// import movesData from './movesData.json';

// const App = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     if (currentIndex < movesData.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="title">Chess Moves</h1>
      
//       <div className="move-explanation">
//         {movesData[currentIndex] && (
//           <MoveExplanation move={movesData[currentIndex].move} explanation={movesData[currentIndex].exp} />
//         )}
//       </div>
//       <div className="buttons">
//         <button className="button" onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
//         <button className="button" onClick={handleNext} disabled={currentIndex === movesData.length - 1}>Next</button>
//       </div>
//     </div>
//   );
// };

// const MoveExplanation = ({ move, explanation }) => (
//   <div>
//     <h2 className="move">Move: {move}</h2>
//     <p className="explanation">{explanation}</p>
//   </div>
// );

// export default App;


import React, { useState } from 'react';
import './App.css'; 
import movesData from './movesData.json';

const App = () => {
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

export default App;








// import React, { useState } from 'react';
// //import './App.css'; // Import CSS file
// import movesData from './movesData.json';

// const analysis = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     if (currentIndex < movesData.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="title">Chess Moves</h1>
      
//       <div className="move-explanation">
//         {movesData[currentIndex] && (
//           <MoveExplanation move={movesData[currentIndex].move} explanation={movesData[currentIndex].exp} />
//         )}
//       </div>
//       <div className="buttons">
//         <button className="button" onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
//         <button className="button" onClick={handleNext} disabled={currentIndex === movesData.length - 1}>Next</button>
//       </div>
//     </div>
//   );
// };

// const MoveExplanation = ({ move, explanation }) => (
//   <div>
//     <h2 className="move">Move: {move}</h2>
//     <p className="explanation">{explanation}</p>
//   </div>
// );

// export default analysis;

// import React, { Component } from 'react';
// import './App.css'; // Import CSS file
// //import * as movesData from './movesData.json';

// import movesData from './movesData.json';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentIndex: 0
//     };
//   }

//   handleNext = () => {
//     const { currentIndex } = this.state;
//     if (currentIndex < movesData.length - 1) {
//       this.setState({ currentIndex: currentIndex + 1 });
//     }
//   };

//   handlePrevious = () => {
//     const { currentIndex } = this.state;
//     if (currentIndex > 0) {
//       this.setState({ currentIndex: currentIndex - 1 });
//     }
//   };

//   render() {
//     const { currentIndex } = this.state;

//     return (
//       <div className="container">
//         <h1 className="title">Chess Moves</h1>
        
//         <div className="move-explanation">
//           {movesData[currentIndex] && (
//             <MoveExplanation move={movesData[currentIndex].move} explanation={movesData[currentIndex].exp} />
//           )}
//         </div>
//         <div className="buttons">
//           <button className="button" onClick={this.handlePrevious} disabled={currentIndex === 0}>Previous</button>
//           <button className="button" onClick={this.handleNext} disabled={currentIndex === movesData.length - 1}>Next</button>
//         </div>
//       </div>
//     );
//   }
// }

// const MoveExplanation = ({ move, explanation }) => (
//   <div>
//     <h2 className="move">Move: {move}</h2>
//     <p className="explanation">{explanation}</p>
//   </div>
// );

// export default App;


// import React, { Component } from 'react';
// import movesData from './movesData.json';
// //import * as movesData from './movesData.json';


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentIndex: 0
//     };
//     this.handleNext = this.handleNext.bind(this);
//     this.handlePrevious = this.handlePrevious.bind(this);
//   }


//   handleNext() {
//     const { currentIndex } = this.state;
//     if (currentIndex < movesData.length - 1) {
//       // if (true) {
//       this.setState({ currentIndex: currentIndex + 1 });
//     }
//   }

//   handlePrevious() {
//     const { currentIndex } = this.state;
//     if (currentIndex > 0) {
//       this.setState({ currentIndex: currentIndex - 1 });
//     }
//   }

//   render() {
//     const { currentIndex } = this.state;

//     return (
//       <div className="container">
//         <h1 className="title">Chess Moves</h1>
//         dhnfdfdfh
//         <div className="move-explanation">
//           {movesData[currentIndex] && (
//             <MoveExplanation move={movesData[currentIndex].move} explanation={movesData[currentIndex].exp} />
//           )}
//         </div>
//         <div className="buttons">
//           <button className="button" onClick={this.handlePrevious} disabled={currentIndex === 0}>Previous</button>
//           <button className="button" onClick={this.handleNext} disabled={currentIndex === movesData.length - 1}>Next</button>
//           {/* <button className="button" onClick={this.handleNext}>Next</button> */}

//         </div>
//       </div>
//     );
//   }
// }

// const MoveExplanation = ({ move, explanation }) => (
//   <div>
//     <h2 className="move">Move: {move}</h2>
//     <p className="explanation">{explanation}</p>
//   </div>
// );

// export default App;




