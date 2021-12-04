import React from "react";
import { useParams } from "react-router-dom";

function OneArticle(){
    let { id } = useParams();
    let url = `http://localhost:9999/atlas/articles/OneArticle/${id}`;
    
    fetch(url).then(res=>{
        //console.log(res);
        return res.json();
    })
    .then(data =>{
        console.log(data);
        return(
                <div className="Article">
                    <h1>{data.title}</h1>
                    <img src={data.imgURL} alt="Articleimg"/>
                    <br />
                    <div>{data.dateCreated}</div>
                    <br />
                    <p>{data.description}</p>
                </div>  
        )
    });
    
}

export default OneArticle;