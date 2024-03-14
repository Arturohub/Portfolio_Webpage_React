import Navbar from "./Navbar"
import Home from "../pages/Home"
import Experience from "../pages/Experience"
import Skills from "../pages/Skills"
import Projects from "../pages/Projects"
import About from "../pages/About"
import Contact from "../pages/Contact"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"

export default function Router(){

    const Layout = () => {
        return(
            <>
            <Navbar />
            <Outlet />            
            </>
        )
    }
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>  
    </BrowserRouter>
    )
}