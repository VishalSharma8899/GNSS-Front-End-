 
import React from 'react';
import MyMap from './MyMap';
import './App.css';


const App = () => {
  const coordinatesWithWords = [
    { coords: [19.780190, 75.489178], word: 'Start' },
    { coords: [19.780190, 75.489178], word: 'Point A' },
    { coords: [19.780395, 75.489222], word: 'Point B' },
    { coords: [19.780522, 75.489249], word: 'Point C' },
    { coords: [19.780605, 75.489573], word: 'End' },
  ];

  return (
    <div>
      <h1>Word Visualization on Map</h1>
      <MyMap coordinatesWithWords={coordinatesWithWords} />
    </div>
  );
};

export default App;
 