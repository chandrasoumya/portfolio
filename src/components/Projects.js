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

            <div className="each-projects" id="courses-app">
                <h1>2. Courses App </h1>
                <div className="projectCont">
                <img src="/photos/courses-app.png" alt="loading"/>
                <p>The Courses App project is a e-learning platform. It is basically a frontend project made with 
                    React js and SCSS. It is a fully responsive frontend project.
                    <br/><br/>
                    <a href="https://courses-app-soumya.vercel.app/">Click here</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects;