import { useState } from 'react'
import { Tasks } from './Components/Tasks'

function App() {

  return (
    <>
    <div className='container'>
      <div className='row justify-content-center'>
       <div className='col-8'>
       <Tasks></Tasks>
       </div>
      </div>
    </div>
     
    </>
  )
}

export default App
