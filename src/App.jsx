import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [coloor, setColor] = useState({backgroundColor:'white'})
  const changeblue=()=>
  {
    if(coloor.backgroundColor !== 'blue')
    {
      setColor({backgroundColor:'blue'});
    }
    else{
      setColor({backgroundColor:'white'});
    }

  }
   const changegreen =()=>{
    if(coloor.backgroundColor !== 'green')
    {
      setColor({backgroundColor:'green'});
    }
    else{
      setColor({backgroundColor:'white'});
    }

   }

  return (
    <>

      <div id='one' style={coloor}>
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={changeblue}>
  Blue
</button>
<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={changegreen}>
  Green
</button>
</div>
    </>
  )
}

export default App
