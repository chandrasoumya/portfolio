import React from "react";

const Projects = ()=>{
    return(
        <div className="projects">
            <div className="each-projects" id="sorting-visualization">
                <h1>1. Sorting Visualization</h1>
                <div className="projectCont">
                <img src="/photos/sorting-visualization.png" alt="loading"/>
                <p>The sorting visualization project showcases the implementation of bubble sort, selection sort, 
                    and insertion sort algorithms using HTML, CSS, and JavaScript. The project visualizes how these algorithms sort an array of elements step by step, 
                    providing a clear demonstration of their functioning and efficiency in sorting data.
                    <br/><br/>
                    <a href="https://chandrasoumya.github.io/Sorting_Visualization/">Click here</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects;