import { useState } from 'react'


function App() {
  const [color, setColor] = useState("")

  return (
    
      <div className='main h-screen w-full duration-200'
      style={{backgroundColor: color}}
      >
        <div className='bar fixed w-full h-9 flex flex-wrap items-center  justify-center  bg-black text-white gap-7'>
          <button
          onClick={()=> setColor("red")}
           className='btn border-spacing-2 rounded-lg bg-red-400 w-28 '
           >
            Red
          </button>
          <button
          onClick={()=> setColor("green")}
           className='btn border-spacing-2 rounded-lg bg-green-400 w-28 '
           >
            green
          </button>
          <button
          onClick={()=> setColor("pink")}
           className='btn border-spacing-2 rounded-lg bg-pink-400 w-28 '
           >
            pink
          </button>
          <button
          onClick={()=> setColor("violet")}
           className='btn border-spacing-2 rounded-lg bg-violet-400 w-28 '
           >
            violet
          </button>
          <button
          onClick={()=> setColor("blue")}
           className='btn border-spacing-2 rounded-lg bg-blue-400 w-28 '
           >
            blue
          </button>


        </div>
        </div>
       
    
  )
}

export default App
