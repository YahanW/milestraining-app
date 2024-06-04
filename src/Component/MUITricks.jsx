import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Icon from '@mui/material/Icon';
import Slide from '@mui/material/Slide';
import MUITrickItem from './MUITrickItem';

function generate(element, data) {
    return data.map((item, index) =>
        React.cloneElement(element, {
            key: item.id || index,
            ...item,
        }),
    );
}

// const TrickItem = ({ name, description, imageAddress }) => (

//     // <Slide direction="left" >
//     <Card sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '2%' }} >

//         <CardMedia
//             component="img"
//             sx={{ width: 151 }}
//             image={imageAddress}
//         />
//         <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//             <CardContent >
//                 <Typography component="div" variant="h5">
//                     {name}
//                 </Typography>
//                 <Typography variant="subtitle1" color="text.secondary" component="div">
//                     {description}
//                 </Typography>
//             </CardContent>

//         </Box>
//         <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//             <IconButton aria-label="Done" color='success' onClick={}>
//                 <CheckCircleRoundedIcon fontSize='large' />
//             </IconButton>
//         </Box>
//     </Card >
//     // </Slide>
// );

export default function MUITricks() {

    const data = [
        { id: 1, name: 'Sit', description: '', imageAddress: "https://media.istockphoto.com/id/1265211191/vector/dog-black-silhouette-isolated-on-white-background-sitting-pet-simple-illustration-for-web.jpg?s=612x612&w=0&k=20&c=cD6FU8Dyr2RDMmccVdWa0sQmwp2hRk70sOTDS9RfZXg=" },
        { id: 2, name: 'Stay', description: '', imageAddress: "https://media.istockphoto.com/id/1265211191/vector/dog-black-silhouette-isolated-on-white-background-sitting-pet-simple-illustration-for-web.jpg?s=612x612&w=0&k=20&c=cD6FU8Dyr2RDMmccVdWa0sQmwp2hRk70sOTDS9RfZXg=" },
        { id: 3, name: 'Down', description: '', imageAddress: "https://media.istockphoto.com/id/1265211191/vector/dog-black-silhouette-isolated-on-white-background-sitting-pet-simple-illustration-for-web.jpg?s=612x612&w=0&k=20&c=cD6FU8Dyr2RDMmccVdWa0sQmwp2hRk70sOTDS9RfZXg=" },
        { id: 4, name: 'Hand', description: '', imageAddress: "https://media.istockphoto.com/id/1265211191/vector/dog-black-silhouette-isolated-on-white-background-sitting-pet-simple-illustration-for-web.jpg?s=612x612&w=0&k=20&c=cD6FU8Dyr2RDMmccVdWa0sQmwp2hRk70sOTDS9RfZXg=" },
        { id: 5, name: 'Hi Five', description: '', imageAddress: "https://media.istockphoto.com/id/1265211191/vector/dog-black-silhouette-isolated-on-white-background-sitting-pet-simple-illustration-for-web.jpg?s=612x612&w=0&k=20&c=cD6FU8Dyr2RDMmccVdWa0sQmwp2hRk70sOTDS9RfZXg=" },
        { id: 6, name: 'Jump', description: "Miles jumps over trainer's leg", imageAddress: "https://media.istockphoto.com/id/1265211191/vector/dog-black-silhouette-isolated-on-white-background-sitting-pet-simple-illustration-for-web.jpg?s=612x612&w=0&k=20&c=cD6FU8Dyr2RDMmccVdWa0sQmwp2hRk70sOTDS9RfZXg=" },
        { id: 7, name: 'Place', description: 'Miles go to his couch', imageAddress: "https://media.istockphoto.com/id/1265211191/vector/dog-black-silhouette-isolated-on-white-background-sitting-pet-simple-illustration-for-web.jpg?s=612x612&w=0&k=20&c=cD6FU8Dyr2RDMmccVdWa0sQmwp2hRk70sOTDS9RfZXg=" },
        { id: 8, name: '吐 / Leave it', description: '', imageAddress: "https://media.istockphoto.com/id/1265211191/vector/dog-black-silhouette-isolated-on-white-background-sitting-pet-simple-illustration-for-web.jpg?s=612x612&w=0&k=20&c=cD6FU8Dyr2RDMmccVdWa0sQmwp2hRk70sOTDS9RfZXg=" },
        { id: 9, name: '[Whistle]', description: "Miles weave between trainer's legs", imageAddress: "https://media.istockphoto.com/id/1265211191/vector/dog-black-silhouette-isolated-on-white-background-sitting-pet-simple-illustration-for-web.jpg?s=612x612&w=0&k=20&c=cD6FU8Dyr2RDMmccVdWa0sQmwp2hRk70sOTDS9RfZXg=" },
        { id: 10, name: 'Middle', description: "Miles sits between trainer's legs", imageAddress: "https://media.istockphoto.com/id/1265211191/vector/dog-black-silhouette-isolated-on-white-background-sitting-pet-simple-illustration-for-web.jpg?s=612x612&w=0&k=20&c=cD6FU8Dyr2RDMmccVdWa0sQmwp2hRk70sOTDS9RfZXg=" },
        { id: 11, name: '靠', description: "Miles sits next to trainer's left foot", imageAddress: "https://media.istockphoto.com/id/1265211191/vector/dog-black-silhouette-isolated-on-white-background-sitting-pet-simple-illustration-for-web.jpg?s=612x612&w=0&k=20&c=cD6FU8Dyr2RDMmccVdWa0sQmwp2hRk70sOTDS9RfZXg=" },
    ];

    const element = <MUITrickItem />;
    const trickItems = generate(element, data);


    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <List  >
                        <div>
                            {trickItems}
                        </div>
                    </List>

                </Grid>
            </Grid>
        </Box>

    );
}
