// import React, { useState } from 'react'
// import "./NavbarStyles.css"
// import {Link} from "react-router-dom"
// import { FaBars, FaTimes } from 'react-icons/fa';


// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   }

//   return (
//     <>
//       <div className="header">
//         <Link to="/">
//           <h1>Portfolio</h1>
//         </Link>
//         <ul className={showMenu ? "menu active" : "menu"}>
//           <li><Link to="/">Home</Link> </li>
//           {/* <li><Link to="/about">About</Link></li> */}
//           <li><Link to="/projects">Projects</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//         <div className="hamburger" onClick={toggleMenu}>
//           {showMenu ? (
//             <FaTimes size={20} style={{ color: "#000000" }} />
//           ) : (
//             <FaBars size={20} style={{ color: "#000000" }} />
//           )}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Navbar

import React, { useState } from 'react'
import "./NavbarStyles.css"
import {Link} from "react-router-dom"
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assests/logo.jpg"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/hanuman-portfolio1/">
          <img src={logo} alt="Portfolio Logo" />
        </Link>
      </div>
      <ul className={showMenu ? "navbar__links active" : "navbar__links"}>
        <li><Link to="/hanuman-portfolio1/">Home</Link> </li>
        <li><Link to="/hanuman-portfolio1/projects">Projects</Link></li>
        <li><Link to="/hanuman-portfolio1/contact">Contact</Link></li>
      </ul>
      <div className="navbar__menu" onClick={toggleMenu}>
        {showMenu ? (
          <FaTimes size={20} style={{ color: "#000000" }} />
        ) : (
          <FaBars size={20} style={{ color: "#000000" }} />
        )}
      </div>
    </nav>
  )
}

export default Navbar
