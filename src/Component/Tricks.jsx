import React, { useState } from 'react';
import TrickItem from './TrickItem';

const TrickList = () => {
  const [tricksToPractice, setTricksToPractice] = useState(['Sit', 'Stay', 'Down', 'Hand', 'Hi-5', 'Jump', 'Place', '吐', 'Go (绕柱)', '口哨(绕腿)','靠！','Middle']);
  const [practicedTricks, setPracticedTricks] = useState([]);

  const handleLearnTrick = (trick) => {
    setTricksToPractice(tricksToPractice.filter(t => t !== trick));
    setPracticedTricks([...practicedTricks, trick]);
  };

  return (
    <div>
      <h2>Tricks Known</h2>
      <ul className='Up'>
        {tricksToPractice.map(trick => (
          <TrickItem key={trick} trick={trick} onLearnTrick={() => handleLearnTrick(trick)} />
        ))}
      </ul>
      <h2>Tricks Practiced</h2>
      <ul className='Down'>
        {practicedTricks.map(trick => (
          <li key={trick}>{trick}</li> 
        ))}
      </ul>
    </div>
  );
};

export default TrickList;