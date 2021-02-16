import React from "react";
import List from "./components/List/List"
import Form from "./components/Form/Form"

function App() {
    const [wishs, setWish] = React.useState([]);
    const addWish = (wish) => setWish([wish, ...wishs]);
    const remove = (name) => {
        console.log("Name",name.wish);
        let wishsList = [...wishs]
        console.log("wishList", wishsList);
        wishsList = wishsList.filter((wish)=>{
            return wish.wish != name.wish
        });
        setWish(wishsList)
    }
    return (
        <div className="container">
            <h1>App</h1>
            <List data = {wishs} onClick={remove}/>
            <Form onSubmit={addWish} />
        </div>
    )
}

export default App