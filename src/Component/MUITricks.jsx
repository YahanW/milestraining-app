import * as React from 'react';
import { useState } from 'react';
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
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import Back from '../Assets/Back.png'



function generate(element, data) {
    return data.map((item, index) =>
        React.cloneElement(element, {
            key: item.id || index,
            ...item,
        }),
    );
}

const icon = (
    <CardMedia
                component="img"
                sx={{ width: 100, height:100 }}
                image={"https://static.vecteezy.com/system/resources/previews/018/719/221/original/love-animals-concept-with-heart-and-paw-on-transparent-background-free-png.png"}
            />
);

export default function MUITricks() {

    const [tricksToPractice, setTricksToPractice] = useState([
        { id: 1, name: 'Sit', description: '', imageAddress: "https://img.freepik.com/premium-photo/silhouette-black-white-dog-sitting-white-background_881695-27008.jpg" },
        { id: 2, name: 'Stay', description: '', imageAddress: "https://www.botcmn.org/ws/media-library/415bfe1a75b74d0c9c5d0c8246a7769c/woman-training-a-dog-basic-commands-silhouette-vector-id1015270370-3936048460.jpeg" },
        { id: 3, name: 'Down', description: '', imageAddress: "https://media.istockphoto.com/id/1733751782/vector/simple-and-adorable-border-collie-lying-down-silhouette.jpg?s=612x612&w=0&k=20&c=QBfR-n9t_akeoHS6kJCE0fznLV1UZDE5jAugYLmIx1o=" },
        { id: 4, name: 'Hand', description: '', imageAddress: "https://us.123rf.com/450wm/elena3567/elena35671804/elena3567180400042/100243481-a-dog-gives-a-paw-to-a-man-on-a-white-background-vector-illustration.jpg?ver=6" },
        { id: 5, name: 'Hi Five', description: '', imageAddress: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZLkA80C_Tj8ViTpB8C0SaT3eBGTJOEyRUTg&s" },
        { id: 6, name: 'Jump', description: "Miles jumps over trainer's leg", imageAddress: "https://static8.depositphotos.com/1035986/844/v/450/depositphotos_8440935-stock-illustration-vector-black-silhouette-of-jumping.jpg" },
        { id: 7, name: 'Place', description: 'Miles go to his couch', imageAddress: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR5CSfOgqRwoM0P1EDuCh-Iw0K_7tbrwBgiQ&s" },
        { id: 8, name: '吐 / Leave it', description: '', imageAddress: "https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-excrement-poop-shit-animal-heap-png-image_4880898.png" },
        { id: 9, name: '[Whistle]', description: "Miles weave between trainer's legs", imageAddress: "https://as1.ftcdn.net/v2/jpg/01/72/33/68/1000_F_172336835_w4FVBSYVko8JrK5AJ7V6O2TggJ6rl3QX.jpg" },
        { id: 10, name: 'Middle', description: "Miles sits between trainer's legs", imageAddress: "https://thumb.ac-illust.com/ad/adcf0a0e944a3b80c2d09580f9c9c700_t.jpeg" },
        { id: 11, name: '靠', description: "Miles sits next to trainer's left foot", imageAddress: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuN5LFR2_iRtZYMSk3tg-3FduxDbprpkcsZw&s" },
        { id: 12, name: 'Roll', description: "", imageAddress: "https://cdn0.iconfinder.com/data/icons/dog-17/201/dog-015-512.png" },
        { id: 13, name: 'Up', description: "Stand", imageAddress: "https://www.svgheart.com/wp-content/uploads/2021/11/SvgHeart.Com-148.png" },
        { id: 14, name: 'Back', description: "", imageAddress: Back },
        { id: 15, name: 'Go!', description: "Miles go to a traffic cone and return", imageAddress: "https://i.etsystatic.com/36867827/r/il/6cc6be/4190460285/il_fullxfull.4190460285_qr35.jpg" },
    ]);
    const [practicedTricks, setPracticedTricks] = useState([]);
    const element = <MUITrickItem />;
    const trickItems = generate(element, tricksToPractice);
    const [allDone, setAllDone] = React.useState(false);

    const [numTricks, setNumTricks] = useState(1);
    const handlePracticeTrick = (trick) => {
        setTricksToPractice(tricksToPractice.filter(t => t.id !== trick.id));
        setPracticedTricks([...practicedTricks, trick]);
        setNumTricks(numTricks + 1);
        console.log(numTricks);
        if (numTricks == 15) {
            setAllDone(true);
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <List >
                        <div>
                            {tricksToPractice.map(trick => (
                                <MUITrickItem
                                    id={trick.id}
                                    name={trick.name}
                                    description={trick.description}
                                    imageAddress={trick.imageAddress}
                                    onPracticeTrick={() => handlePracticeTrick(trick)} />
                            ))}

                        </div>
                    </List>
                </Grid>
                <Grid item xs={12} md={6}>
                    <List sx={{ opacity: 0.3 }}>
                        <div  >
                            {practicedTricks.map(trick => (
                                <MUITrickItem
                                    id={trick.id}
                                    name={trick.name}
                                    description={trick.description}
                                    imageAddress={trick.imageAddress}
                                />
                            ))}

                        </div>
                    </List>
                </Grid>
                <Fade in={!allDone} {...(allDone ? { timeout: 5000 } : {})}>
                <Box 
                zIndex={allDone? 1:-1} 
                sx={{width:"100%",height:"500px", display: 'flex', position: "fixed",flexDirection:"column", justifyContent:"center", alignItems:"center" }}
                
                >
                    <Box sx={{display:'flex',flexDirection:"row"}}>
                    <Grow in={allDone}>{icon}</Grow>
                    {/* Conditionally applies the timeout prop to change the entry speed. */}
                    <Grow
                        in={allDone}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(allDone ? { timeout: 1000 } : {})}
                    >
                        {icon}
                    </Grow>
                    <Grow
                        in={allDone}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(allDone ? { timeout: 2000 } : {})}
                    >
                        {icon}
                        
                    </Grow>
                    </Box>
                    <Box>
                    <Grow in={allDone}  {...(allDone ? { timeout: 2000 } : {})}>
                    <Typography variant="h5">
                            Congratulations Miles!
                        </Typography>
                    </Grow>
                    </Box>
                    
                </Box>
                </Fade>
            </Grid>
        </Box>

    );
}
