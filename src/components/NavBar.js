import react from "react";
import { NavLink} from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-indigo-900">
            <div className="container mx-auto flex justify-between">
                <nav>
                    <NavLink to="/" exact 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-5 mr-4 text-green-500  hover:text-red-400 text-3xl font-bold cursive tracking-widest" >
                        Jesus Galvan
                    </NavLink>
                    <NavLink to="/post" 
                    activeClassName="text-green-400 bg-indigo-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-400 hover:text-yellow-400">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" 
                    activeClassName="text-green-400 bg-indigo-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-400 hover:text-yellow-400">
                        Projects
                    </NavLink>
                    <NavLink to="/about" 
                    activeClassName="text-green-400 bg-indigo-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-400 hover:text-yellow-400">
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex  py-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/jesgalvan" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://github.com/newbootz" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://www.instagram.com/jesggalvan" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}