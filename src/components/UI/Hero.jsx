import React from 'react'
import heroImg from '../../assets/img/Capa Site 4 - Fabi Ponce.png'
import dumbleIcon from '../../assets/img/dumble.png'
import '../../styles/Hero.css'
import '../../styles/responsive.css'
import { aparecerFormulario } from '../../scripts';

const Hero = () => {
  return (
    <section id='home'>
      <div className='container'>
        <div className='hero_wrapper'>
          {/* ======= hero content ====== */}
          <div className='hero_content'>
            <h2
              className='section_title'
              data-aos='fade-up'
              data-aos-duration='1500'
            >
              Treino em grupo <span className='highlights'>Alegria Dobrada</span>{' '}
            </h2>
            <p data-aos='fade-up' data-aos-delay='100' data-aos-duration='1800'>
              Nada como treinas em grupos para se motivar e movimentar o corpo!
              <br /> FitBody now has its first large commercial location to
              offer several styles of personal training to our clients.
            </p>

            <div
              className='hero_btns'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='2000'
            >
              <button onClick={aparecerFormulario} className='register_btn'>Começe Agora</button>
              <button className='watch_btn'>
                <span>
                  <i class='ri-play-fill'></i>
                </span>
                Veja o Video
              </button>
            </div>
          </div>

          {/* ======= hero img ====== */}
          <div className='hero_img'>
            <div className='hero_img-wrapper'>
              <div className='box-01'>
                <div className='box-2'>
                  <div className='box-3'>
                    <div className='box_img'>
                      <img src={heroImg} alt='' />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className='heart_rate'
                data-aos='fade-right'
                data-aos-duration='1500'
              >
                <h5>Heart rate</h5>
                <span>
                  <i class='ri-heart-pulse-fill'></i>
                </span>
                <h5>2567 BPM</h5>
              </div>

              <div
                className='gym_location'
                data-aos='fade-left'
                data-aos-duration='1500'
              >
                <span>
                  <i class='ri-map-pin-2-fill'></i>
                </span>
                <h5>
                  Veja o nosso <br /> endereço.
                </h5>
              </div>

              <div
                className='dumble_icon'
                data-aos='fade-down'
                data-aos-duration='1500'
              >
                <img src={dumbleIcon} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

  )
}
export default Hero
