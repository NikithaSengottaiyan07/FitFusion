import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import CustomizedButtonsS from './CustomizedButtonsS';
import { Link } from 'react-router-dom';



export default function MultiActionAreaCard() {
  return (
    <Card sx={{ m:1,maxWidth: 325, backgroundColor:'black'} }>
      <CardActionArea>
        <CardMedia style={{height:'200px'}}
          component="img"
          height="300px"
          image="https://blog.nasm.org/hubfs/dynamic-warmups.jpg"
          alt="fitw"
        />
        <CardContent style={{color:'white'}} >
          <Typography gutterBottom variant="h5" component="div">
    <h3>Warm Up Sessions</h3>
          </Typography>
          <Typography variant="body2" >
           <h5>Designed to ignite your energy and prepare your body for a rewarding fitness journey ahead.</h5>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to='/IF'>
      <CustomizedButtonsS/>
      </Link>
      </CardActions>
    </Card>
  );
}