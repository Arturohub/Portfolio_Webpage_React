import { Link } from "react-router-dom";
import { FaHome, FaBriefcase, FaWrench, FaProjectDiagram, FaSmile, FaEnvelope } from "react-icons/fa";

export default function Navbar(){
    return (
        <nav className="navbar">
            <ul>
                
                <li><Link to="/"><FaHome size={25} className="icon"/></Link><span className="text-icon">Home</span></li>
                <li><Link to="/experience"><FaBriefcase size={25} className="icon"/></Link><span className="text-icon">Experience</span></li>
                <li><Link to="/skills"><FaWrench size={25} className="icon"/></Link><span className="text-icon">Skills</span></li>
                <li><Link to="/projects"><FaProjectDiagram size={25} className="icon"/></Link><span className="text-icon">Projects</span></li>
                <li><Link to="/about"><FaSmile size={25} className="icon"/></Link><span className="text-icon">About</span></li>
                <li><Link to="/contact"><FaEnvelope size={25} className="icon"/></Link><span className="text-icon">Contact</span></li>
            
                
            </ul>

            
        
        </nav>
    )
}