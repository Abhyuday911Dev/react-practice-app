import React, { useEffect } from 'react'
// import Props from './Components/Props'
import { NavLink, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Insidehome from './Components/Insidehome';
import Pagechanger from './Components/Pagechanger';
import User from './Components/User';
import Useref from './Components/Useref';

const App = () => {

  // const [name, setName] = useState("vinod");

  useEffect(() => {
    console.log("i render at every state change")
  })

  useEffect(() => {
    console.log("i only render when the component mounts")
  }, [])



  return (
    <div className='container pt-5'>
      <nav>
        <NavLink className='me-3' to="/homepage">homepage route</NavLink>
        <NavLink className='me-3' to="/">user page</NavLink>
        <NavLink to="/useref">useref page</NavLink>
      </nav>
      {/* <h2 style={{ marginBottom: "30px" }}>This is my app file and my name is {name}</h2> */}
      {/* <Props pp="Hello im from props" name={name} setName={setName} /> */}

      <Routes>
        <Route path="/" element={<User />}></Route>
        <Route path="/homepage" element={<Home />}>
          <Route path="/homepage/homechild" element={<Insidehome />}>home ka child</Route>
        </Route>
        <Route path="/changepage" element={<Pagechanger />}></Route>
        <Route path="/useref" element={<Useref />}></Route>
      </Routes>
    </div>
  )
}

export default App