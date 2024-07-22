import React from 'react'
import '../../styles/footer.css'
import logo from '../../assets/img/dumble.png'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='footer' data-aos='fade-up' data-aos-duration='1500'>
      <div className='container'>
        <div className='footer_wrapper'>
          <div className='footer_box'>
            <div className='logo'>
              <div className='logo_img'>
                <img src={logo} alt='' />
                <h2>Personal</h2>
              </div>
            </div>

            <p>
              Our top-of-the-line facilities and professionally certified
              personal trainers provide our members with a holistic experience.
            </p>
          </div>

          <div className='footer_box'>
            <h4 className='footer_title'>Company</h4>
            <ul className='footer_links'>
              <li>
                <a href='#top'>Nossos  programas</a>
              </li>
              <li>
                <a href='#top'>Nossos Planos</a>
              </li>
              <li>
                <a href='#top'>Se torne um mebro</a>
              </li>
            </ul>
          </div>

          <div className='footer_box'>
            <h4 className='footer_title'>Links rapidos</h4>
            <ul className='footer_links'>
              <li>
                <a href='#top'>Sobre nós</a>
              </li>
              <li>
                <a href='#top'>Nossos contatos</a>
              </li>
              <li>
                <a href='#top'>Suporte</a>
              </li>
            </ul>
          </div>

          <div className='footer_box'>
            <h4 className='footer_title'>Links Rapidos</h4>
            <ul className='footer_links'>
              <li>
                <a href='#top'>Nobre nós</a>
              </li>
              <li>
                <a href='#top'>Nossos contatos</a>
              </li>
              <li>
                <a href='#top'>Supoorte</a>
              </li>
            </ul>
          </div>
        </div>

        <p className='copyright'>
          Copyright - {year} developed by <a href='https://linkedin.com/in/vagner-miranda-83854531' target='_blank'>Vagner Miranda.</a> All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
export default Footer
