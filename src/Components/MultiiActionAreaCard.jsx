import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import CustomizedButtonsS from './CustomizedButtonsS';
import { Link } from 'react-router-dom';

export default function MultiiActionAreaCard() {
  return (
    <Card sx={{ m:1,maxWidth: 325 ,backgroundColor: 'black'}}>
      <CardActionArea>
        <CardMedia style={{height:'200px'}}
          component="img"
          height="200"
          image="https://biowave.com/wp-content/uploads/2021/07/AdobeStock_293110744-768x512.jpeg"
          alt="stretch"
        />
        <CardContent style={{color:'white'}}>
          <Typography gutterBottom variant="h5" component="div">
            <h3>Warm Down</h3>
          </Typography>
          <Typography variant="body2" >
            <h5>Embrace the power of stretching,Unwind,rejuvenate,and restore . </h5>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to='/IIF'>
      <CustomizedButtonsS/>
      </Link>
      </CardActions>
    </Card>
  );
}