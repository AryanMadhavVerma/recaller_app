import react, {useState} from 'react'
import axios from 'axios'
import {Button} from '@mui/material';
import { Input } from '@mui/material';



const App = () => {

  const [content,setContent] = useState('')
  const [toggleState, setToggleState] = useState(false)
  const [emailID,setEmailID] = useState('')



    

  const sendEmail = (event) => {
      console.log(`${content} and ${emailID}`)
      axios.post('/sendEmail', {
          emailID,
          content,
      }).then(response => {
          console.log(`Rnesponse has been sent!!!`)
      })

      setEmailID('')
      setContent('')

  }

    
    


  

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
          ?<Button size = 'medium' variant = 'outlined' onClick={() => {setToggleState(true)} }>Send to email</Button>
          :null
        }
        </div>
        {
          toggleState == true
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
                <p>Enter email</p>
                <Input 
                  style={{
                    width: "40vw",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }} 
                  inputProps={{min: 0, style: { textAlign: 'center' }}}
                  variant='outlined' 
                  color='secondary'
                  size='small'
                  placeholder="Email to send to" value={emailID} onChange={(event) => setEmailID(event.target.value)}/>
                <Button size = 'medium' variant = 'outlined' onClick={sendEmail}>Send</Button>
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