import { useState, useEffect } from "react"
import moviescreen from '../images/moviescreen.jpg'; // replace with the path to your image

const languages = [
    { name: 'HTML', level: "advance" },
    { name: 'CSS', level: "advance" },
    { name: 'JavaScript', level: "intermediate" },
    { name: "Python", level: "beginner" },
    { name: "PHP", level: "looking forward to learn" },
    { name: "SQL", level: "looking forward to learn" },
  ];

const frameworks = [
    { name: "React", level: "advance" },
    { name: "Express + MongoDB", level: "intermediate" },
    { name: "Bootstrap", level: "intermediate" },
    { name: "JQuery", level: "intermediate" },
  ];

const personality = [
    { name: "Team Player" },
    { name: "Experience in multinational companies" },
    { name: "Proactive" },
    { name: "Fast Learner" },
    { name: "Empathic" },
    { name: "Active Listener" },
    { name: "Emotional Intelligence" },
    { name: "Leadership Experience" },
    { name: "Decision taker" },
    { name: "Adaptation/Flexibility" },
    { name: "Creativity" },
    { name: "Everyday I seek improving myself and helping others" }
];


  export default function Skills() {

    const [ind, setInd] = useState(0)
    const [ind2, setInd2] = useState(0)
    const [ind3, setInd3] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setInd((prevIndex) => (prevIndex + 1) % languages.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval2 = setInterval(() => {
            setInd2((prevIndex) => (prevIndex + 1) % frameworks.length);
        }, 10000);
        return () => clearInterval(interval2);
    }, []);

    useEffect(() => {
        const interval3 = setInterval(() => {
            setInd3((prevIndex) => (prevIndex + 1) % personality.length);
        }, 10000);
        return () => clearInterval(interval3);
    }, []);


    return (
        <div className="skills-container"> 
            <div className="subskills-container">
                <img className="moviescreen-img" src={moviescreen} alt="Moviescreen"/>
                    <div className="whole-container">
                        <div className="languages-container">
                            <h1>Skills I currently have</h1>
                            <h2>Languages and level:</h2>
                            <p>{languages[ind].name}, {languages[ind].level}</p>
                        </div>
                        <div className="frameworks-container">
                            <h2>Frameworks and level:</h2>
                            <p>{frameworks[ind2].name}, {frameworks[ind2].level}</p>
                        </div>
                        <div className="personality-container">
                            <h2>Personal skills:</h2>
                            <p>{personality[ind3].name}</p>
                        </div>
                    </div>
            </div>
        </div>
    );
}