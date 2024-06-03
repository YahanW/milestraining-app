import React from 'react';

const TrickItem = ({ trick, onLearnTrick }) => {
  return (
    <li>
      {trick}
      <button onClick={onLearnTrick}>Done</button>
    </li>
  );
};

export default TrickItem;