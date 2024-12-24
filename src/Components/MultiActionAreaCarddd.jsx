import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import CustomizedButtonsS from './CustomizedButtonsS';
import { Link } from 'react-router-dom';

export default function MultiActionAreaCarddd() {
  return (
    <Card sx={{ m:1,maxWidth: 325, backgroundColor: 'black' }}>
      <CardActionArea>
        <CardMedia style={{height:'200px'}}
          component="img"
          height="200"
          image="https://www.fitnpilates.com/wp-content/uploads/2014/09/Yoga.jpeg"
          alt="yoga"
        />
        <CardContent style={{color:'white'}}>
          <Typography gutterBottom variant="h5" component="div">
            <h3>Yoga and Pilates</h3>
          </Typography>
          <Typography variant="body2" >
            <h5> Emphasize flexibility,balance,and core strength.They include poses & stretches</h5>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to='/IFFF'>
      <CustomizedButtonsS/>
      </Link>
      </CardActions>
    </Card>
  );
}