import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css' // Ensure your styles are properly imported
import {
  AiOutlineHome,
  AiOutlineBook,
  AiOutlineProject,
  AiOutlineMessage,
} from 'react-icons/ai'
import { FaBriefcase } from 'react-icons/fa'

function Header() {
  return (
    <nav>
      <NavLink to="/home" activeClassName="active">
        <AiOutlineHome />
      </NavLink>
      <NavLink to="/education" activeClassName="active">
        <AiOutlineBook />
      </NavLink>
      <NavLink to="/experience" activeClassName="active">
        <FaBriefcase />
      </NavLink>
      <NavLink to="/projects" activeClassName="active">
        <AiOutlineProject />
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        <AiOutlineMessage />
      </NavLink>
    </nav>
  )
}

export default Header
