import seats from "../images/homeimgs/seats.jpg"
import yo from "../images/homeimgs/yo.mp4"
import { Link } from "react-router-dom";
import { useEffect, useState} from "react"

export default function Home(){

    const namesForDisplay = ["Arturo Chica Villa", "My Portfolio, the Movie", "Full Stack Dev", "Fast Learner", "Team Worker", "Always Improving", "Hire Me"];
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % namesForDisplay.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [namesForDisplay]);

    return (
 
            <div className="home-container"> 
        
                <div className="screen-container">
                    <video autoplay muted autoPlay className="yo-vid" src={yo} />
                </div>                
                <div className="button-container">
                    <Link to="/Contact"><button className="button-vid">Hire Me</button></Link>
                    <p className="name">{namesForDisplay[index]}</p>
                    <Link to="/Experience"><button className="button-vid">Next Chapter</button></Link>  
                </div>

                <div className="image-container">
                    <img className="seats-img" src={seats} alt="Seats" />
                </div>
            </div>

    )
}
