
import { useEffect, useState } from "react"
import { GoThreeBars } from "react-icons/go"

import {
   Link,
   useLocation
} from "react-router-dom";


const links = [
    {
        name: "About Me",
        link: "/about",
        id: "about",
        priority: false
    },
    {
        name: "Experience",
        link: "/experience",
        id: "experience",
        priority: false
    },
    {
        name: "Project",
        link: "/project",
        id: "project",
        priority: false
    },
    {
        name: "ICS4U0",
        link: "/ICS4U0",
        id: "ICS4U0",
        priority: false
    }
]

   /*
   {
       name: "Sign Up",
       link: "/sign-up",
       id: "call-to-action",
       priority: true
   },
   */

 
const Navbar = () => {
   const [showDropdown, setShowDropdown] = useState(false);
   const { pathname } = useLocation();

   return (
    //{pathname ? opacity:0 : opacity:1}
       <header className="border-[#130611] border-solid border-2 flex flex-col bg-[#130611] z-[99999999] min-h-[7vh] py-2 lg:py-4 shadow-xl fixed w-full top-0">
           <div className="container px-4 mx-auto lg:flex lg:items-center m-30">
               <div className="flex justify-between items-center">
                   <Link className="flex flex-row items-center gap-4 font-bold text-xl text-teal" to="/">
                       {/* <img src="" alt="Logo" width={29} height={42} /> */}
                       <h2 className="text-2xl text-white font-mono">Stephen Ni</h2>
                   </Link>
 
                   <button
                       className="border border-solid border-gray-200 px-3 py-1 rounded text-gray-200 opacity-50 hover:opacity-75 lg:hidden cursor-pointer"
                       aria-label="Menu"
                       data-test-id="navbar-menu"
                       onClick={
                           () => {
                               setShowDropdown(!showDropdown);
                           }}
                   >
                       <GoThreeBars />
                   </button>
               </div>
 
               <div className={`${showDropdown ? "flex" : "hidden"} lg:flex flex-col lg:flex-row lg:ml-auto mt-3 lg:mt-0`} data-test-id="navbar">
                    <div>
                        {links.map(({ name, link, priority, id }) => 
                            <Link key={name} className={`${priority ? "text-purple-900 hover:bg-purple-900 hover:text-white text-center border border-solid border-purple-900 mt-1 lg:mt-0 lg:ml-1" : "text-white hover:bg-gray-200/25 hover:text-red-200"} p-2 lg:px-4 lg:mx-2 rounded duration-300 transition-colors ${pathname === name && "font-bold"}`} to={link}>
                                {name}
                            </Link>
                        )}
                        
                  
                    </div>      
               </div>     
           </div>
       </header>
   )
}
 
export default Navbar;
