import React, { useState } from 'react';
import TrickItem from './TrickItem';

const TrickList = () => {
  const [tricksToLearn, setTricksToLearn] = useState(['Sit', 'Stay', 'Down', 'Hand', 'Hi-5', 'Jump', 'Place', '吐']);
  const [learnedTricks, setLearnedTricks] = useState([]);

  const handleLearnTrick = (trick) => {
    setTricksToLearn(tricksToLearn.filter(t => t !== trick));
    setLearnedTricks([...learnedTricks, trick]);
  };

  return (
    <div>
      <h2>Tricks to Practice</h2>
      <ul className='Up'>
        {tricksToLearn.map(trick => (
          <TrickItem key={trick} trick={trick} onLearnTrick={() => handleLearnTrick(trick)} />
        ))}
      </ul>
      <h2>Practiced Tricks</h2>
      <ul className='Down'>
        {learnedTricks.map(trick => (
          <li key={trick}>{trick}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrickList;