import React, {useState} from 'react';
import TrickList from './Component/Tricks';
import MUITricks from './Component/MUITricks';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function App() {

  const [date, setDate] = useState(new Date());

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Miles Daily Training Plan
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 2 }}
            >
              <CalendarMonthIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      <Typography variant="h6" color="text.secondary" component="div" mt={2}>
                    {date.toDateString()}
      </Typography>

      {/* <TrickList /> */}
      <MUITricks />
    </div>
  );
}

export default App;
