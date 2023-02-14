import React from 'react'

const Props = (props) => {

    const { pp, name, setName } = props

    function nameChange() {
        let namee = Math.floor(Math.random() * 1000000)
        setName(namee)
    }

    return (
        <>
            <h2>{pp}</h2>
            <h5 style={{marginBottom: "10px"}}>I am {name}</h5>
            <button className='btn btn-primary' onClick={nameChange}>name changer</button>
        </>
    )
}

export default Props