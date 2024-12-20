import { useState } from 'react'
import background from '../img/background.png'
import img from '../img/2023-orange-rabbit-festival.png'
import './css/App.css' 
import Signup from './signup'

function App() {
  const [opgave, setOpgave] = useState(null)

  return (
    <div style={{backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>
     
     <div className='img'>
      <img src={img}/>
      <Signup />
     </div>
    </div>
  )
}

export default App
