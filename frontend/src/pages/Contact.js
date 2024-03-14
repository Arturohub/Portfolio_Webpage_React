import { useState } from "react"
import axios from "axios"


export default function Contact(){

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    const axiosPostData = async () => {
        const postData = {
            name: name,
            email: email,
            message: message
        }

        await axios.post("https://portfolio-webpage-react-backend.onrender.com" + "/contact", postData)
        .then(res => setError(<p className="success">{res.data}</p>))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(!message || !name || !email) {
            setError(<p className="required">Name, Email or Messenger are still empty. Please, fill them all and click Submit again.</p>)
        } else{
            setError("")
        }
    
        setError("")
        axiosPostData()
    };
    

    return (
        <div className="form-container">
            <p className="contact-text"><span>C</span><span>O</span><span>N</span><span>T</span><span>A</span><span>C</span><span>T</span><span>&nbsp;</span><span>&nbsp;</span><span>M</span><span>E</span></p>
            <form>
                <div className="input-container">
                    <label className="name-label" htmlFor="name">Name:</label>
                    <input type="text" className="name-input" name="name" value={name} onChange={ (e) => setName(e.target.value) } required />
                </div>
                
                <div className="input-container">
                    <label className="email-label" htmlFor="email">Email:</label>
                    <input type="email" className="email-input" name="email" value={email} onChange={ (e) => setEmail(e.target.value) } required />
                </div>

                <div className="input-container">
                    <label className="message-label" htmlFor="message">Message:</label>
                    <textarea className="message-input" value={message} onChange={ (e) => setMessage(e.target.value) } rows="8" required />
                </div>
                <button onClick={handleSubmit} className="submit-button" type="submit">Submit</button>
                {error}
            </form>
        </div>
    );
};



