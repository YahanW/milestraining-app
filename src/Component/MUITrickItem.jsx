import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Slide from '@mui/material/Slide';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Icon from '@mui/material/Icon';


const MUITrickItem = ({ id, name, description, imageAddress }) => {

    const [checked, setChecked] = React.useState(true);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };


    return (
        // <Slide direction="right" in={checked} mountOnEnter unmountOnExits>
        <Card raised='false' sx={{ opacity: !checked ? 0.3 : 1, display: 'flex', justifyContent: 'space-between', marginTop: '2%' }} >

            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={imageAddress}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <CardContent >
                    <Typography component="div" variant="h5">
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {description}
                    </Typography>
                </CardContent>

            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <IconButton aria-label="Done" color='success' onClick={handleChange}>
                    <CheckCircleRoundedIcon sx={{ display: !checked ? 'none' : 'block' }} fontSize='large' />
                </IconButton>
            </Box>
        </Card >
        // </Slide>
    )
}

export default MUITrickItem