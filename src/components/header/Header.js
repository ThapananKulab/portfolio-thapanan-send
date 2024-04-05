import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  AiOutlineHome,
  AiOutlineBook,
  AiOutlineProject,
  AiOutlineMessage,
} from 'react-icons/ai'
import { FaBriefcase } from 'react-icons/fa'
import { HiMoon, HiSun } from 'react-icons/hi' // Icons for toggling themes
import './Header.css'

function Header({ theme, setTheme }) {
  // Toggle theme and optionally force a refresh
  const changeTheme = (e) => {
    e.preventDefault()
    const newTheme =
      theme.name === 'light' ? { name: 'dark' } : { name: 'light' }
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme.name)

    // Refresh the page to apply theme changes across all components
    // Note: This is not recommended in a single-page application.
    window.location.reload()
  }

  const themeIcon = theme.name === 'light' ? <HiMoon /> : <HiSun />

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
      <div onClick={changeTheme} className="theme-toggle-link">
        {themeIcon}
      </div>
    </nav>
  )
}

export default Header
