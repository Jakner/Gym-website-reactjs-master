import React from 'react'
import '../../styles/exercise.css'
import '../../styles/responsive.css'
import lunges from '../../assets/img/lunges.png'
import yoga from '../../assets/img/yoga-pose.png'
import extended from '../../assets/img/extended.png'

const Exercise = () => {
  return (
    <section id='schedule'>
      <div className='container exercise_container'>
        <div className='exercise_top'>
          <h2 className='section_title'>
            Beneficios dos <span className='highlights'>Exercícios</span>
          </h2>

          <p>
            O exercício regular traz inúmeros benefícios  <br /> tanto para o físico quanto para
            saúde mental.
          </p>
        </div>

        {/* =====  exercise list ===== */}
        <div className='exercise_wrapper'>
          <div
            className='exercise_item'
            data-aos='zoom-in'
            data-aos-duration='1500'
          >
            <span className='exercise_icon'>
              <img src={lunges} alt='' />
            </span>

            <div className='exercise_content'>
              <h4>Vida Saudável</h4>
              <p>
              O exercício regular também pode reduzir o risco de doenças crônicas
              como diabetes, doenças cardíacas e alguns tipos de câncer.
              </p>
            </div>
          </div>

          <div
            className='exercise_item'
            data-aos='zoom-in'
            data-aos-duration='1500'
          >
            <span className='exercise_icon'>
              <img src={yoga} alt='' />
            </span>

            <div className='exercise_content'>
              <h4>Maior flexibilidade</h4>
              <p>
                O exercício ajuda a fortalecer músculos e ossos, melhorar
                saúde cardiovascular e aumentar a flexibilidade e o equilíbrio.
              </p>
            </div>
          </div>

          <div
            className='exercise_item'
            data-aos='zoom-in'
            data-aos-duration='1500'
          >
            <span className='exercise_icon'>
              <img src={extended} alt='' />
            </span>

            <div className='exercise_content'>
              <h4>Reduzindo a pressão arterial</h4>
              <p>
              O exercício regular pode melhorar sua saúde cardiovascular e
                fortalecer seus músculos, levando ao aumento de energia e
                energia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exercise
