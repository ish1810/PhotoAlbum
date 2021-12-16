import { CardMedia } from '@material-ui/core'
import { CardActions } from '@material-ui/core'
//import { IconButton } from '@material-ui/core'
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//import ShareIcon from '@mui/icons-material/Share';
//import { Button } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { Card } from '@material-ui/core'
import React from 'react'
import { Button } from '@mui/material';

const CustomCard =({setShowBigcard}) =>{


    return (
        <Paper>
        <Card sx={{ maxWidth: 345 }}>
              <CardMedia
        component="img"
        height="194"
        image="https://image.freepik.com/free-psd/creative-neon-text-effect_23-2149115292.jpg"
        alt="Paella dish"
      />
       <CardActions>
        <Button
          onClick={() =>
            setShowBigcard((prev) => {
              return {
                isShow: !prev.isShow,
                
              };
            })
          }
          size="small"
          color="primary"
        >
          View
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>

            
        </Card>
        </Paper>
    );
};

export default CustomCard