import G from 'glob';
import React, { useState } from 'react';

const Portfolio = () => {

    const [projects] = useState([
        {
            title: 'Silver Stream',
            image: 'silver-stream.png',
            description: 'Silver string is a website that allows users to generate random list of movies',
            hub: 'https://github.com/JazmyneB/JazmyneB.github.io/tree/main/Silver-Stream-main',
            live: 'https://colesammons.github.io/Silver-Stream/'
        },
        {
            title: 'Food Festival',
            image: 'food-festival2.JPG',
            description: 'This is an app for food festivals.',
            hub: 'https://github.com/JazmyneB/food-festival',
            live: 'https://jazmyneb.github.io/food-festival/'
        },
        {
            title: 'Daily Scheduler',
            image: 'weekly2.jpeg',
            description: 'An app to keep track of the daily tasks.',
            hub: 'https://github.com/JazmyneB/JazmyneB.github.io/tree/main/weekly',
            live: 'https://jazmyneb.github.io/weekly/'
        },
        {
            title: 'Weather Forecast',
            image: 'weather2.jpeg',
            description: 'This project consists of getting a forecast of the weather within the work weekday in a desired city.',
            hub: 'linking',
            live: 'https://jazmyneb.github.io/weather/'
        },
        {
            title: 'Code Quiz',
            image: 'code-quiz2.jpeg',
            description: 'A timed quiz to test your coding knowledge.',
            hub: 'https://github.com/JazmyneB/JazmyneB.github.io/tree/main/code-quiz',
            live: 'https://jazmyneb.github.io/code-quiz/'

        },
        // {
        //     title: 'Project 6',
        //     image:
        //     description: 'This here',
        //     github: 'linking',
        //     live: 'live site'
        // }
    ])

    
    const [currentProject, setCurrentProject] = useState();

    return (
        <section>
            <h1 id = "portfolio">Projects</h1>
            {projects.map((project, i) =>
            <div className="img-container">
                <h3>{project.title}</h3>
                <img src={require(`../../assets/project/${project.image}`).default} className="image img-thumbnail mx-1" alt={project.title} ></img>
                <div class="middle">
                    <div class="text">
                        <p>{project.description}</p>
                        <p><a href={project.hub}>Github Repo</a></p>
                        <p><a href={project.live}>Live App!</a></p>
                    </div>
                    </div>
            </div>
            )}
        </section>
    )
}

export default Portfolio;