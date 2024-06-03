import React from 'react';
import Button from '@mui/material/Button';

const TrickItem = ({ trick, onLearnTrick }) => {
  return (
    <li>
      {trick}
      <Button variant="contained" onClick={onLearnTrick}>Done</Button>
    </li>
  );
};

export default TrickItem;