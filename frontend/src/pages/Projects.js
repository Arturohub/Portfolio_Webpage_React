import { useState } from 'react';
import smartphone from '../images/projectsPictures/smartphone.jpg';

export default function Projects() {
    
    const projects = [
        {url: "https://arturohub.github.io/Furniture-Restoration-Website/", title: "Project 1. Furniture Restoration Shop"},
        {url: "https://arturohub.github.io/Todo-App-React/", title: "Project 2. To-Do App"},
        {url: "https://arturohub.github.io/FoodApp/", title: "Project 3. Food Recipe App"}
    ]

    const [page, setPage] = useState(0)
    
    function handleClick() {
       setPage((page + 1) % projects.length)
    }

    return (
        <div className="project-container">
            
            <img src={smartphone} alt="Smartphone"/>
            <div className="screen-content">
                <iframe className='project1' key={page} src={projects[page].url} />
                <button onClick={handleClick}>To switch project!</button>
                <p>{projects[page].title}</p>
            </div>
        </div>
    );
}

