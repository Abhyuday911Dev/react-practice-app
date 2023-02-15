import React, { useRef } from 'react';

const Useref = () => {

    const inputUsername = useRef(null);
    const buttonC = useRef(null);
    const ChangeHandler = async (e) => {
        let i = inputUsername.current;
        if (i.value.length < 5) {
            i.style.outline = "3px solid red";
            i.style.border = "3px solid red";
            buttonC.current.disabled = true;
        } else {
            i.style.outline = "initial";
            i.style.border = "initial";
            buttonC.current.disabled = false;
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e, "pp", inputUsername)
    }

    return (
        <div>
            <h2> UseRef </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, fugiat!</p>
            <form className="pt-2" onSubmit={ e => submitHandler(e)} >
                <input
                    className="form-control w-50"
                    type="text"
                    placeholder="username"
                    onChange={ChangeHandler}
                    ref={inputUsername}
                />
                <button ref={buttonC} className="mt-2 btn btn-primary" disabled>
                    Submit
                </button>
            </form>
            <h3>{}</h3>
        </div>
    )
}

export default Useref