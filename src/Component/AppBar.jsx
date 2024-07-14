import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Modal } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import dayjs from 'dayjs';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';


function MUIAppBar() {

    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleOpen = () => {
        if (!open) { setOpen(true); }
    };
    const handleClose = () => setOpen(false);
    const toggleDrawer = (newOpen) => () => {
        setOpenDrawer(newOpen);
    };

    const navigate = useNavigate();

    const handleClickHome = () => {

        navigate('/');

    };
    const handleClickMUITricks = () => {

        navigate('/MUITricks');

    };


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const DrawerList = (
        <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem key={"Home"} disablePadding onClick={handleClickHome}>
                    <ListItemButton >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>

                        <ListItemText primary={"Home"} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'MUITricks'} disablePadding onClick={handleClickMUITricks}>
                    <ListItemButton >
                        <ListItemIcon>
                            <PetsIcon />
                        </ListItemIcon>

                        <ListItemText primary={"MUITricks"} />
                    </ListItemButton>
                </ListItem>

            </List>
            <Divider />
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />

                    </IconButton>
                    <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Miles Daily Training Plan
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ ml: 2 }}
                        onClick={handleOpen}
                    >
                        <CalendarMonthIcon />
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <StaticDatePicker onAccept={handleClose} />
                                </LocalizationProvider>

                            </Box>
                        </Modal>

                    </IconButton>
                </Toolbar>
            </AppBar>

            <Typography variant="h6" color="text.secondary" component="div" mt={2}>
                {date.toDateString()}
            </Typography>

        </Box>
    )
}

export default MUIAppBar;