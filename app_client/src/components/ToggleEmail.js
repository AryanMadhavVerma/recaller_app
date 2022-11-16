import React, { useState } from "react";
import axios from 'axios'


const ToggleEmail = ({toggleValue, content}) => {

    const [emailID,setEmailID] = useState('')

    const sendEmail = (event) => {
        console.log(`${content} and ${emailID}`)
        axios.post('/sendEmail', {
            emailID,
            content,
        }).then(response => {
            console.log(`Response has been sent!!!`)
        })

        setEmailID('')

    }

    if(toggleValue===true) {
        return (
        <div>
            <p>Enter email</p>
            <input placeholder="Email to send to" value={emailID} onChange={(event) => setEmailID(event.target.value)}/>
            <button onClick={sendEmail}>Send</button>
        </div>
    )
        }
    
    return null

}

export default ToggleEmail