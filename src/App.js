import React, { useState } from 'react'
import Props from './Components/Props'

const App = () => {

  const [name, setName] = useState("vinod");

  return (
    <div className='container pt-5'>
      <h2 style={{ marginBottom: "30px" }}>This is my app file and my name is {name}</h2>
      <Props pp="Hello im from props" name={name} setName={setName} />
    </div>
  )
}

export default App