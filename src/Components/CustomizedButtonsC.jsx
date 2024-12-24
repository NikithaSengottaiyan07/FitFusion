import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {  deepOrange, grey, orange } from '@mui/material/colors';
import { Link } from 'react-router-dom';



const ColorButton = styled(Button)(({ theme }) => ({
  color: orange,
  backgroundColor: deepOrange[900],
  '&:hover': {
    backgroundColor: grey[900],
  },
}));

export default function CustomizedButtonsC() {
  return (
    <Stack spacing={2} direction="row">
    <ColorButton variant="contained" >Join Now</ColorButton>
    </Stack>
  );
}