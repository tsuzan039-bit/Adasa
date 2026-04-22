import React from 'react'
import { Link ,NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {


const loc =useLocation()


  return (
<>

<div className="navbar  d-flex justify-content-between fixed-top ">
  <div className='me-3 d-flex mt-2'>


    <div className="logo ms-2 "> <img className='logo-img' src={logo} alt="logo" />
 </div>


 <div className="logo-add"><h2>عدسة</h2>
 <h3>عالم التصوير الفوتوغرافي</h3></div>


  </div>
  <div className='links-style'>  

  <div className="links">

<ul className='list-unstyled  d-flex gap-4  mt-3'>

  <li ><NavLink  className='text-decoration-none hli nlink ${loc.pathname="/"? "active":""}' to="/">الرئيسية</NavLink></li>
  <li ><NavLink className='text-decoration-none hli nlink ${loc.pathname="blog"? "active":""}' to="blog">المدونة</NavLink></li>
  <li ><NavLink className='text-decoration-none hli  nlink ${loc.pathname="about"? "active":""} ' to="about">من نحن</NavLink></li>
</ul>

  </div>


   </div>

<div className="start d-flex gap-2">
<div className='search-icon mt-4 ' ><i className="fa-solid fa-magnifying-glass"></i></div>
<button className='btn1 hov8 ms-2'  >ابدأ القراءة</button>

</div>
</div>
</>  )
}
