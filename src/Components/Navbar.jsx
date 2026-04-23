// import React from 'react'
// import { Link ,NavLink, useLocation } from "react-router-dom";
// import logo from "../assets/images/logo.png";

// export default function Navbar() {


// const loc =useLocation()


//   return (
// <>

// <div className="navbar  d-flex justify-content-between fixed-top ">
//   <div className='me-3 d-flex mt-2'>


//     <div className="logo ms-2 "> <img className='logo-img' src={logo} alt="logo" />
//  </div>


//  <div className="logo-add"><h2>عدسة</h2>
//  <h3>عالم التصوير الفوتوغرافي</h3></div>


//   </div>
//   <div className='links-style'>  

//   <div className="links">

// <ul className='list-unstyled  d-flex gap-4  mt-3'>

//   <li ><NavLink  className='text-decoration-none hli nlink ${loc.pathname="/"? "active":""}' to="/">الرئيسية</NavLink></li>
//   <li ><NavLink className='text-decoration-none hli nlink ${loc.pathname="blog"? "active":""}' to="blog">المدونة</NavLink></li>
//   <li ><NavLink className='text-decoration-none hli  nlink ${loc.pathname="about"? "active":""} ' to="about">من نحن</NavLink></li>
// </ul>

//   </div>


//    </div>

// <div className="start d-flex gap-2">
// <div className='search-icon mt-4 ' ><i className="fa-solid fa-magnifying-glass"></i></div>
// <button className='btn1 hov8 ms-2'  >ابدأ القراءة</button>

// </div>
// </div>
// </>  )

// }




















import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .navbar {
          background-color: #161616;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          box-sizing: border-box;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .logo-img { width: 40px; }

        .logo-add h2 { font-size: 20px; color: white; font-weight: 700; margin: 0; }
        .logo-add h3 { font-size: 12px; color: rgba(255,120,25,0.8); margin: 0; }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 8px;
          list-style: none;
          margin: 0;
          padding: 8px 16px;
          border: 1px solid #453b3b;
          border-radius: 40px;
          background-color: transparent;
        }

        .nav-links li a {
          color: rgb(149, 140, 140);
          font-weight: 500;
          font-size: 14px;
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 20px;
          transition: 0.2s;
        }

        .nav-links li a:hover { color: white; }

        .nav-links li a.active {
          background-color: #F16511;
          color: white !important;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .search-icon { color: rgb(72, 77, 77); font-size: 16px; }

        .btn1 {
          background-color: #F16511;
          color: white !important;
          border-radius: 20px;
          padding: 10px 16px;
          border: none;
          cursor: pointer;
          font-family: 'Cairo', sans-serif;
          font-size: 14px;
          transition: 0.3s;
        }

        .btn1:hover { transform: translateY(-3px); }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: transparent;
          border: none;
          padding: 5px;
        }

        .hamburger span {
          display: block;
          width: 25px;
          height: 2px;
          background-color: white;
          border-radius: 2px;
          transition: 0.3s;
        }

        /* Mobile Menu */
        .mobile-menu {
          display: none;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          background-color: #161616;
          padding: 20px;
          position: fixed;
          top: 60px;
          left: 0;
          width: 100%;
          z-index: 999;
          border-bottom: 1px solid #2a2828;
          box-sizing: border-box;
        }

        .mobile-menu.open { display: flex; }

        .mobile-menu a {
          color: rgb(149, 140, 140);
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 20px;
          width: 100%;
          text-align: center;
          border: 1px solid #2a2828;
          transition: 0.2s;
        }

        .mobile-menu a:hover { color: white; border-color: #F16511; }

        .mobile-menu a.active {
          background-color: #F16511;
          color: white !important;
          border-color: #F16511;
        }

        .mobile-menu .btn1 { width: 100%; text-align: center; }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-actions { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <div className="navbar">
        {/* Logo */}
        <div className="nav-logo">
          <div className="logo">
            <img className="logo-img" src={logo} alt="logo" />
          </div>
          <div className="logo-add">
            <h2>عدسة</h2>
            <h3>عالم التصوير الفوتوغرافي</h3>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><NavLink to="/">الرئيسية</NavLink></li>
          <li><NavLink to="/blog">المدونة</NavLink></li>
          <li><NavLink to="/about">من نحن</NavLink></li>
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
<Link to="/blog" className="btn1" style={{textDecoration:"none"}}>ابدأ القراءة</Link>        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>الرئيسية</NavLink>
        <NavLink to="/blog" onClick={() => setMenuOpen(false)}>المدونة</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>من نحن</NavLink>
<Link to="/blog" className="btn1" style={{textDecoration:"none"}} onClick={() => setMenuOpen(false)}>ابدأ القراءة</Link>      </div>
    </>
  );
}