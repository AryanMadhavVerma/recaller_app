import react, {useState} from 'react'
import axios from 'axios'
import ToggleEmail from './components/ToggleEmail'



const App = () => {

  const [content,setContent] = useState('')
  const [toggleEmail, setToggleEmail] = useState(false)




  return (
    <div>
      <h2>Recaller</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Write your thoughts out</label>
        <div>
          <input placeholder='What do you want to recall later' value={content} onChange={(e) => setContent(e.target.value)}/>
        </div>
        <div>
        {
          toggleEmail === false
          ?<button onClick={() => {setToggleEmail(true)} }>Send to email</button>
          :null
        }
        </div>
        <div>
          <ToggleEmail toggleValue={toggleEmail} content= {content}/>
        </div>
      </form>
    </div>
  )
}

export default App