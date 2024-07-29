import React, { useRef } from 'react'
import '../../styles/header.css'
import '../../styles/responsive.css'
import logo from '../../assets/img/dumble.png'
import { useEffect } from 'react'

const nav_links = [
  {
    path: '#home',
    display: 'Home',
  },
  {
    path: '#schedule',
    display: 'Agenda',
  },
  {
    path: '#classes',
    display: 'Aulas',
  },
  {
    path: '#pricing-plan',
    display: 'Preços',
  },
]

const Header = () => {
  const headerRef = useRef(null)

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add('sticky_header')
    } else {
      headerRef.current.classList.remove('sticky_header')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', headerFunc)

    return () => window.removeEventListener('scroll', headerFunc)
  }, [])

  const handleClick = (e) => {
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 80,
    })
  }

  return (
    <header className='header' ref={headerRef}>
      <div className='container'>
        <div className='nav_wrapper'>
          {/* ==== LOGO ==== */}

          <div className='logo'>
            <div className='logo_img'>
              <img src={logo} alt='' />
            </div>
            <h2>PersonalFabianaPonce</h2>
          </div>

          <div class="dropdown list-resp">
            <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <svg width="15px" height="15  px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="#000000"
                />
              </svg>
            </button>
            <ul class="dropdown-menu">
              {nav_links.map((item) => (
                <li className='nav_item'>
                  <a onClick={handleClick} href={item.path}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ====== Navigation menu ======= */}

          <div className='navigation'>
            <ul className='menu'>
              {nav_links.map((item) => (
                <li className='nav_item'>
                  <a onClick={handleClick} href={item.path}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ======= nav right ======= */}
          <div className='nav_right'>
            <a href="http://crud.personalfabianaponce.com.br/" target='_blank' rel='noreferrer'>
              <button className='register_btn register_btn_resp'>Login</button>
              <span className='mobile_menu'>
                <i class='ri-menu-line'></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
