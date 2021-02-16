import React from "react";

function ListItem({data,onClick,name}){
    return(
        <div className="card">
            <p>Wish: {data.wish}</p>
            <button onClick={() => onClick(name)} className="button">remove</button>
        </div>
    )

}

export default ListItem;