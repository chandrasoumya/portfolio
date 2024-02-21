import React, { useState } from "react";
import Contact from "./Contact";

const Home =()=>{
    const less =`
    A budding web developer embarks 
    on a coding journey, eagerly mastering
     HTML, CSS, and JavaScript. Learning React 
    for mastering frontend development
    and nodejs for backend development. 
    Also learning various databases like MySql and MongoDb.
    `;
    const more =`
    A budding web developer embarks 
    on a coding journey, eagerly mastering
     HTML, CSS, and JavaScript. Learning React 
    for mastering frontend development
    and nodejs for backend development. 
    Also learning various databases like MySql and MongoDb.
    Masering Data Structures and Algoriths in Java.
    Doing great in varios compititive 
    coding platform like leetcode and hackerrank. `
    const [details,setDetails] = useState(less);
    const [show,setShow] = useState("read more")
    const showMore = ()=>{
        if(details === less){
            setShow("read less");
            setDetails(more);
        }
        else{
            setShow("read more");
            setDetails(less);
        }
    }
    return(
        <div className="home">
            <div className="home-text">
                <h1>I'm</h1>
                <h2><span>S</span>oumyadeep <span>C</span>handra, </h2>
                <p>{details}</p>
                <p className="readmore" onClick={showMore}><img src="./photos/arrow.png" alt="arrow" id="arrow"/>{show} </p>
            </div>
            <Contact/>
            <img src="/photos/profileimage.png" alt="loading" />    
            <div className="list">
                <ul>
                    <li>Web developer</li>
                    <li>Designer</li>
                    <li>Software developer</li>
                </ul>
            </div>
        </div>
    )
}

export default Home;