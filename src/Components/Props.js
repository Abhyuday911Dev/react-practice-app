import React from 'react'

const Props = (props) => {

    const { pp, name, setName } = props

    function nameChange() {
        let namee = Math.floor(Math.random() * 1000000)
        setName(namee)
    }

    return (
        <>
            <div>{pp}</div> <br />
            <p>I am {name}</p>
            <button onClick={nameChange}>name changer</button>
        </>
    )
}

export default Props