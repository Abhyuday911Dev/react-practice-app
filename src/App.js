import React, { useState } from 'react'
import Props from './Components/Props'

const App = () => {

  const [name, setName] = useState("vinod");

  return (
    <>
      <div>This is my app file and my name is {name}</div>
      <Props pp="hello im your prop" name={name} setName= {setName}/>
    </>
  )
}

export default App