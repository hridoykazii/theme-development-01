// src/About.js
import OutboxIcon from '@mui/icons-material/Outbox';
import { Box } from '@mui/material';
import SwipeableTemporaryDrawer from 'components/Common/Drawer';
import Button from 'buttons/Button';
import MenuList from 'components/Common/Reusable/MenuList';
import TextBox from 'components/Common/Reusable/TextBox';
import { useState } from 'react';

const About = () => {
  const [text, setText] = useState('');
  const [method, setMethod] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleChange = (event) => {
    setMethod(event.target.value);
  };

  const submitForm = () => {
    console.log('Text:', text, 'Method:', method);
  }

  return (
    <div className='m-5'>
      <h1>Reusable Components</h1>
      <MenuList method={method} setMethod={setMethod} handler={handleChange} />
      <TextBox setText={setText} onChange={handleTextChange} label="Test field" />
      <Box className="flex justify-around items-center">
        <Button 
          variant="contained" 
          onClick={submitForm}
          color='primary'
        >
          Place Bet
        </Button>

        <Button 
          variant="text" 
          color='success'
          onClick={submitForm}
        >
          Place Bet
        </Button>

        <Button 
          variant="outlined" 
          color="success" 
          onClick={submitForm}
        >
          Place Bet
        </Button>


        <Button 
          variant="tonal" 
          color='warning'
          onClick={submitForm}
        >
          Place Bet
        </Button>

        <Button 
          variant="iconLabel" 
          color="success" 
          endIcon={<OutboxIcon />} 
          onClick={submitForm}
        >
          Place Bet
        </Button>
      </Box>
      <SwipeableTemporaryDrawer/>
    </div>
  );
};

export default About;
