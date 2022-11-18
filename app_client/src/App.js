import react, {useState} from 'react'
import axios from 'axios'
import {Button} from '@mui/material';
import { Input } from '@mui/material';
import { TextField } from '@mui/material'

import Select from 'react-select'

const App = () => {

  const [content,setContent] = useState('')
  const [toggleState, setToggleState] = useState(false)
  const [emailID,setEmailID] = useState('')
  const [days, setDays] = useState({value: '0', label: 'Today'})
  
  const handleDayChange = (obj) => {
    setDays(obj)
  }

  const sendEmail = (event) => {

      const sendObject = {
        emailID: emailID,
        content: content,
        days: days.value,
      }

      console.log('Obejct to be sent is', sendObject)
      axios.post('/sendEmail', sendObject).then(response => {
          console.log(`Response has been sent!!!`)
      })

      setEmailID('')
      setContent('')
      setDays(days.value = '0', days.label = 'Today')

  }
  //dayselect logic

  const options = [
    { value: '0', label: 'Today' },
    { value: '1', label: 'Tomorrow' },
    { value: '7', label: 'Next week' }
  ]


  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "light-grey"
    }}>
      <h2>Recaller</h2>
      <form 
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={(e) => e.preventDefault()}>
        <label>Write your thoughts out</label>
        <div>
          <Input
            style={{
              width: "60vw",
              marginTop: "10px",
              marginBottom: "10px",
            }} 
            variant = 'standard' multiline = 'true' placeholder='What do you want to recall later' value={content} onChange={(e) => setContent(e.target.value)}/>
        </div>
        <div>
        {
          toggleState === false
          ?<div>
              <Button size = 'medium' variant = 'outlined' onClick={() => {setToggleState(true)} }>Send to email</Button>
            </div>
          :null
        }
        </div>
        {
          toggleState === true
          ?
            (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField id="outlined-basic" label="Email" variant="outlined" value={emailID} onChange={(event) => setEmailID(event.target.value)} />
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
                <p>When do you want to schedule?</p>
          
                <Select 
                  value={days}
                  options={options}
                  onChange={handleDayChange}
                  getOptionLabel={x => x.label}
                  getOptionValue={x => x.value} />
                  
                <Button 
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                  }} 
                  size = 'medium' variant = 'outlined' onClick={sendEmail}>Recall</Button>
                
              </div>
            )
          : 
            (
              null
            )
        }
      
        

      </form>
    </div>
  )
}

export default App