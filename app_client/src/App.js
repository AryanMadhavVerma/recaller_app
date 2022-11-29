import react, { useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { Input } from '@mui/material';
import { TextField } from '@mui/material';

import logo from './recaller-logo-light.png';

// ...later

import Select from 'react-select';

const App = () => {
  //config for dropdown
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: 'transparent',
      // match with the menu
      borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? 'lightGrey' : 'grey',
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      '&:hover': {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? 'lightGrey' : 'lightGrey',
      },
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused ? 'grey' : isSelected ? 'dark' : undefined,
      zIndex: 1,
    }),
    menu: (base) => ({
      ...base,
      // override border radius to match the box
      backgroundColor: 'black',
      borderRadius: 0,
      // kill the gap
      marginTop: 0,
      zIndex: 100,
    }),
    menuList: (base) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
    }),
    // set schedule selection button text color to grey
    singleValue: (base) => ({
      ...base,
      color: 'grey',
    }),
  };

  const [content, setContent] = useState('');
  const [toggleState, setToggleState] = useState(false);
  const [emailID, setEmailID] = useState('');
  const [days, setDays] = useState({ value: '0', label: 'right now' });

  const handleDayChange = (obj) => {
    setDays(obj);
  };

  const sendEmail = (event) => {
    const sendObject = {
      emailID: emailID,
      content: content,
      days: days.value,
    };

    console.log('Obejct to be sent is', sendObject);
    axios.post('/sendEmail', sendObject).then((response) => {
      console.log(`Response has been sent!!!`);
    });

    setEmailID('');
    setContent('');
    setDays((days.value = '0'), (days.label = 'right now'));
  };
  //dayselect logic

  const options = [
    { value: '0', label: 'right now' },
    { value: '0.125', label: '3 hours later' },
    { value: '0.25', label: '6 hours later' },
    { value: '1', label: 'tomorrow' },
    { value: '7', label: 'next week' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'linear-gradient(#e66465, #9198e5)',
      }}
    >
      <h1>
        <a href='#'>
          <img src={logo} alt='recaller logo' height={'50vw'} />
        </a>
      </h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#f5f4f2',
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <h3>what do you want to recall later?</h3>
        <div>
          <Input
            sx={{
              width: '80vw',
              marginTop: '20px',
              marginBottom: '20px',
              background: 'transparent',
              outline: 'none',
              overflow: 'auto',
              fontSize: '1em',
              color: 'white',
            }}
            multiline={true}
            placeholder='start typing'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          {toggleState === false ? (
            <div>
              <Button
                style={{
                  marginRight: '20px',
                }}
                size='medium'
                variant='outlined'
                onClick={() => {
                  setToggleState(true);
                }}
              >
                Send to Email
              </Button>
              <Button
                style={{
                  color: 'grey',
                  borderColor: 'grey',
                }}
                disabled={true}
                size='medium'
                variant='outlined'
                onClick={() => {
                  setToggleState(false);
                }}
              >
                Send to Whatsapp
              </Button>
            </div>
          ) : null}
        </div>
        {toggleState === true ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TextField
              sx={{
                width: '300px',
                '& .MuiInputLabel-root': { color: 'lightGrey' }, //styles the label
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': { borderColor: 'default' },
                },
              }}
              inputProps={{
                style: {
                  color: 'white',
                },
              }}
              id='outlined-basic'
              label='Email'
              variant='outlined'
              value={emailID}
              onChange={(event) => setEmailID(event.target.value)}
            />
            {/* <Input 
                    style={{
                      width: "40vw",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }} 
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    variant='outlined' 
                    color='secondary'
                    size='small'
                    placeholder="Email to send to" value={emailID} onChange={(event) => setEmailID(event.target.value)}/> */}
            <p>when to schedule?</p>

            <Select
              styles={customStyles}
              value={days}
              options={options}
              onChange={handleDayChange}
              getOptionLabel={(x) => x.label}
              getOptionValue={(x) => x.value}
            />

            <Button
              style={{
                marginTop: '10px',
                marginBottom: '10px',
              }}
              size='medium'
              variant='outlined'
              onClick={sendEmail}
            >
              Recall
            </Button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default App;
