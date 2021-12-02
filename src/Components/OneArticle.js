import React from "react";
import getPosts from "../Helpers/getPosts";

function OneArticle(props){
    let id = props.id;
    console.log(id);

    getPosts(id)
    .then(data=>{
        console.log(data);
    })

    
        return (
            <main className = "Main">
                    <img
                        src={props.imageURL}
                        alt="article idea"
                        align="top"
                        // width="500"
                        height="80"
                    ></img>
                    <h1>{props.title}</h1>
                    
                        <h6>Updated on: {props.dateCreated} </h6>
                    
                    
                    <p>{props.description}</p>
            </main>
        ) 
}

export default OneArticle;