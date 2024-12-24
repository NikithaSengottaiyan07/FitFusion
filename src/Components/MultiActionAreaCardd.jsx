import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import CustomizedButtonsS from './CustomizedButtonsS';
import { Link } from 'react-router-dom';

export default function MultiActionAreaCardd() {
  return (
    <Card sx={{ m:1,maxWidth: 325 ,backgroundColor:'black'}}>
      <CardActionArea>
        <CardMedia style={{height:'200px'}}
          component="img"
          height="200"
          image="https://media1.popsugar-assets.com/files/thumbor/OK8VrhvVffjB2-xlrLXehzo3QOU=/fit-in/1584x1058/top/filters:format_auto():upscale()/2019/10/30/748/n/1922729/f998c9a8d3d0ce39_5-Friday-treadmill-class.jpg"
          alt="fitimg"
        />
        <CardContent  style={{color:'white'}}>
          <Typography gutterBottom variant="h5" component="div">
        <h3>Cardio Workouts</h3>
          </Typography>
          <Typography variant="body2" >
            <h5> Focus on improving cardiovascular health through activities like dancing, running, cycling.</h5>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to='/IFF'>
      <CustomizedButtonsS/>
      </Link>
      </CardActions>
    </Card>
  );
}