import img1 from '../images/aboutimgs/img1.jpg';
import img2 from '../images/aboutimgs/img2.jpg';
import img3 from '../images/aboutimgs/img3.jpg';
import img4 from '../images/aboutimgs/img4.jpg';
import img5 from '../images/aboutimgs/img5.jpg';
import img6 from '../images/aboutimgs/img6.jpg';
import img7 from '../images/aboutimgs/img7.jpg';
import img8 from '../images/aboutimgs/img8.jpg';
import background from "../images/aboutimgs/cinema.jpg"
import { useState } from "react"

const gallery = [
    {src: img1, description: 'Title: "Beginnings". This is my first Photoshop project, so it has a special place on my heart. It was very challenging to learn Photoshop self-taught, but this experience proved me I can do whatever I want in this life.'},
    {src: img2, description: 'Title: "Nature". I love hiking up in the mountains. This hiking trip was in Italy and is called "Strada delle 50 gallerie. It is my favourite hiking trip so far. Check it online and you will see how amazing it is'},
    {src: img3, description: 'Title: "Calahonda". Calahonda is the city where I currently live. It is quite unique and beautiful. After living in different countries and visiting many places in the world, I can definitely say I found my home here'},
    {src: img4, description: 'Title: "We believe". I found my home also thanks to my girlfriend, who is not just the most amazing person in the world, but also the most loving, beautiful, smart, artistic... fun fact, Calahonda in the background '},
    {src: img5, description: 'Title: "Bros surviving". My brother is my best friend and the most important person on my life. We like playing basketball together, playing videogames, joking, watching movies and above all, talking about new zombie tv shows or books'},
    {src: img6, description: 'Title: "Friends". Traveling and visiting friends is one of my main hobbies. Hereby in Barcelona with Adri, I really enjoy every time we meet. We joke non-stop and I always come back home with stomach pain for laughing too much. A great friend'},
    {src: img7, description: 'Title: "Laugh". I love making other people laugh and laughing with them. It is my favourite thing in this life. Never go to bed without making people laugh and laughing a couple of times that day. I would say thats my motto. '},
    {src: img8, description: 'Title: "She". About 3 years ago, I met my girlfriend. She introduced me to a new life. A life full of light where every day is beautiful. A life where the sun shines bright no matter how much darkness and madness rules the world. A life I want to enjoy with her'}
];

export default function About(){

    const [file, setFile] = useState(null)
    const [description, setDescription] = useState('')
    const [reveal, setReveal] = useState(false)

    const handleClick = () => {
        setReveal(!reveal)
    }

    return (
        <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${background})`, backgroundRepeat: 'no-repeat', backgroundAttachment: "fixed", backgroundPosition: "center center", backgroundSize: 'cover'}} className="about-container" >
            {!reveal && <button className="button-reveal" onClick={handleClick}>Click here to start the show!</button>}
            {reveal && (
            <div className="gallery-container">
                {gallery.map((file, index) => (
                    <div className="pictures" key={index} onClick={() => {setFile(file.src); setDescription(file.description)}}>
                        <img src={file.src} alt={`image ${index}`} />
                    </div>
                ))}
            </div>
            )}
            <div className="popup-container" style={{display: file ? "block" : "none"}}>
                <span onClick={() => {setFile(null); setDescription('')}}>×</span>
                {file && <img src={file} alt="Picked image by you" />}
                {description && <p>{description}</p>}
            </div>
        </div>
    )
}
