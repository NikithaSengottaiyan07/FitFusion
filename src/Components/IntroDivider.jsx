import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CustomizedButtonsC from './CustomizedButtonsC';
import { Link } from 'react-router-dom';

export default function IntroDivider() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{ p: 2 }}>
        <Stack direction="coloumn" justifyContent="center" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
          <h2>Monthly Subscription</h2><br></br>
          </Typography><br></br>
          </Stack>
          <Typography gutterBottom variant="h6" component="div">
            <h2 style={{fontSize:'50px'}}>$5.99</h2>
          </Typography>
        
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2" justifyContent={'center'}>
        </Typography>
        <Stack direction="row" spacing={1} justifyContent={'center'}>
        <Link to='/CheckoutForm'>
        <CustomizedButtonsC/>
        </Link>
        </Stack>
      </Box>
    </Card>
  );
}