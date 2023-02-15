import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { DataContext } from "../Context/Mycontext";

const Home = () => {
    const navigate = useNavigate();
    const [data, setData] = useContext(DataContext);

    const btnclickHandler = (e) => {
        navigate("/homepage/homechild")
    }

    const changepageHandler = (e) => {
        navigate('/changepage')
    }

    const stateSet = (params) => {
        setData(Math.random())

    }

    return (
        <div>
            <h2>home</h2>
            <button className='btn btn-primary mb-2' onClick={btnclickHandler}>child ko lao</button><br />
            <button className='btn btn-primary mb-2' onClick={changepageHandler}>this take me to another page</button><br />
            <button className='btn btn-primary' onClick={stateSet}> setstate</button><h5>{data}</h5>
            <Outlet />
        </div>
    )
}

export default Home