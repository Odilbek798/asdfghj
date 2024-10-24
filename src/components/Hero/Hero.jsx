import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <h2>Что меня ждет впереди</h2>
        <div className="cards">
          <div className="card">
            <img src="https://abbos29.github.io/dream/img/icon1.png" alt="" />
            <h3>Свободное время</h3>
            <p>Мне нужно свободное время на семью <br/> и самое настоящее</p>
          </div>
          <div className="card">
            <img src="https://abbos29.github.io/dream/img/icon2.png" alt="" />
            <h3>Яркие путешествия</h3>
            <p>Мне нужно свободное время на семью <br/> и самое настоящее</p>
          </div>
          <div className="card">
            <img src="https://abbos29.github.io/dream/img/icon3.png" alt="" />
            <h3>Создание ценности</h3>
            <p>Мне нужно свободное время на семью <br/> и самое настоящее</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero