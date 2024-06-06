import React, {useState} from 'react';
import TrickList from './Component/Tricks';
import MUITricks from './Component/MUITricks';
import MUIAppBar from './Component/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function App() {

  return (
    <div className="App">
        <MUIAppBar />
      {/* <TrickList /> */}
      <MUITricks />
    </div>
  );
}

export default App;
