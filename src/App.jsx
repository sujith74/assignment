import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import UserForm from './Components/Userform'
import RichTextEditor from './Components/Richtext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      COUNTER:
    </div>
  
     <Counter/>
<br/>

     <div>
      USERFORM:
      </div><br/>

      <UserForm/>
     <br/>
     <div>RICH TEXT EDITOR:</div>
     <br/>
     <RichTextEditor/>
    </>
  )
}

export default App
