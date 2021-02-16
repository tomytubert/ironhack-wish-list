import React from "react";
import ListItem from "../ListItem/ListItem"

function List({data,onClick}){
    console.log("List data",data);
    return (
        <div className="cards-container">
            {data.map((item,idx)=> <ListItem data={data[idx]} name={data[idx]} onClick={onClick} />)}
        </div>
    )
}

export default List;