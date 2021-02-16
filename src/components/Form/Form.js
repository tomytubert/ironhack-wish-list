import React from "react";

function Form({onSubmit}){
    const initialState = {
        wish:""
    }
    const [state, setState] = React.useState(initialState);

    const handleChange = ({ target }) =>
    setState({ ...state, [target.name]: target.value });

    const handleSumbit = (event) => {
        event.preventDefault()
        onSubmit(state)
        setState(initialState)//El state me lo vacia, falta vaciar el input
    }

    return(
        <form onSubmit={handleSumbit} className="form">
            <label htmlFor="wish">Wish</label>
            <input onChange={handleChange} type="text" name="wish" value={state.wish}></input>
            <button type="submit">Add your wish</button>
        </form>
    )
}

export default Form;