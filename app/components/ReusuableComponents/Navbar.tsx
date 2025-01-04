import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Logo from '../assets/home/logo.png'

const Navbar = () => {
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'Creators', path: '/creators' },
    { name: 'Pages', path: '/pages', subPages: [
      { name: 'Creators', path: '/pages/creators' },
      { name: 'Arts', path: '/pages/arts' },
      { name: 'Uploads', path: '/pages/uploads' },
      { name: 'Terms', path: '/pages/terms' },
      { name: 'FAQs', path: '/pages/faqs' },
      { name: 'Login', path: '/pages/login' },
      { name: 'Register', path: '/pages/register' },
      { name: 'Error', path: '/pages/error' },
    ]},
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setActiveDropdown(null)
    }, 3000) // Delay of 300ms before closing the dropdown

    return () => clearTimeout(timer)
  }

  return (
    <nav className="px-9 py-4 text-white w-full bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={157}
            height={79}
            className="object-contain"
          />
        </Link>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              {item.subPages ? (
                <div
                  ref={dropdownRef}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span 
                    className={`cursor-pointer hover:text-gray-300 transition duration-300 ${
                      pathname.startsWith(item.path) ? 'text-[#21E7B7] font-bold' : ''
                    }`}
                  >
                    {item.name}
                  </span>
                  {activeDropdown === item.name && (
                    <ul className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                      {item.subPages.map((subPage) => (
                        <li key={subPage.name}>
                          <Link 
                            href={subPage.path}
                            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-300 ${
                              pathname === subPage.path ? 'text-[#21E7B7] font-bold' : ''
                            }`}
                          >
                            {subPage.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link 
                  href={item.path} 
                  className={`hover:text-gray-300 transition duration-300 ${
                    pathname === item.path ? 'text-[#21E7B7] font-bold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar