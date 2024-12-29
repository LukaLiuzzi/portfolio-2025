"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect } from "react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeItem, setActiveItem] = useState("home")

  useEffect(() => {
    setMounted(true)
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDarkMode)
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", String(newDarkMode))
    document.documentElement.classList.toggle("dark", newDarkMode)
  }

  if (!mounted) {
    return null
  }

  const menuItems = [
    { id: "home", label: "Sobre mí", href: "/" },
    { id: "works", label: "Trabajos", href: "/works" },
  ]

  const buttonStyles =
    "w-10 h-10 flex justify-center items-center bg-background border rounded-md hover:shadow-sm transition-shadow border-border"

  return (
    <div className="flex justify-between items-center bg-background text-foreground p-4 relative border-b border-border">
      <button onClick={toggleMenu} className={`md:hidden ${buttonStyles}`}>
        <div className="space-y-1">
          <div className="w-6 h-1 bg-foreground"></div>
          <div className="w-6 h-1 bg-foreground"></div>
          <div className="w-6 h-1 bg-foreground"></div>
        </div>
      </button>

      <div className="hidden md:flex w-full items-center justify-between">
        <button onClick={toggleDarkMode} className={buttonStyles}>
          {darkMode ? (
            <svg
              className="w-6 h-6 text-foreground"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-foreground"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        <nav className="flex items-center space-x-12">
          {menuItems.map((item) => (
            <div key={item.id} className="relative">
              <Link
                href={item.href}
                onClick={() => setActiveItem(item.id)}
                className={`cursor-pointer text-lg font-medium py-2 transition-colors duration-200 ${
                  activeItem === item.id
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
              <div
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-foreground transform origin-left transition-transform duration-300 ease-out ${
                  activeItem === item.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </div>
          ))}
        </nav>

        <button className={buttonStyles}>
          <Image
            src="https://flagcdn.com/w40/ar.png"
            alt="Argentina Flag"
            className="w-6 h-auto"
            width={40}
            height={40}
          />
        </button>
      </div>

      <div className="flex gap-2 md:hidden">
        <button className={buttonStyles}>
          <Image
            src="https://flagcdn.com/w40/ar.png"
            alt="Argentina Flag"
            className="w-6 h-auto"
            width={40}
            height={40}
          />
        </button>
        <button onClick={toggleDarkMode} className={buttonStyles}>
          {darkMode ? (
            <svg
              className="w-6 h-6 text-foreground"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-foreground"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen ? (
        <div className="fixed md:hidden top-0 left-0 w-48 h-full bg-background border-r border-foreground/20 shadow-lg z-50 transition-transform transform translate-x-0">
          <button
            onClick={toggleMenu}
            className="text-foreground text-xl absolute top-4 right-4"
          >
            ✖
          </button>
          <nav className="mt-32 p-4">
            <ul className="space-y-12 flex flex-col items-center">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="relative flex flex-col items-center"
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.id)
                      toggleMenu()
                    }}
                    className={`text-xl font-semibold cursor-pointer transition-colors duration-200 ${
                      activeItem === item.id
                        ? "text-foreground"
                        : "text-foreground/60 hover:text-foreground/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                  <div
                    className={`absolute -bottom-2 h-0.5 bg-foreground transform origin-left transition-transform duration-300 ease-out ${
                      activeItem === item.id ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{ width: activeItem === item.id ? "100%" : "0%" }}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : (
        <div className="fixed md:hidden top-0 left-0 w-48 h-full bg-background border-r border-foreground/20 shadow-lg z-50 transition-transform transform -translate-x-full">
          <button
            onClick={toggleMenu}
            className="text-foreground text-xl absolute top-4 right-4"
          >
            ✖
          </button>
          <nav className="mt-32 p-4">
            <ul className="space-y-12 flex flex-col items-center">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="relative flex flex-col items-center"
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.id)
                      toggleMenu()
                    }}
                    className={`text-xl font-semibold cursor-pointer transition-colors duration-200 ${
                      activeItem === item.id
                        ? "text-foreground"
                        : "text-foreground/60 hover:text-foreground/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                  <div
                    className={`absolute -bottom-2 h-0.5 bg-foreground transform origin-left transition-transform duration-300 ease-out ${
                      activeItem === item.id ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{ width: activeItem === item.id ? "100%" : "0%" }}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}

export default Navbar