import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className="last__footer">
    <div className="container">
      <h1 className='forma'>Форма заказа билета в будущее</h1>
      <div className="inputs">
        <input type="text" placeholder='Имя' />
        <input type="text" placeholder='E-mail' />
        <input type="text" placeholder='Телефон' />
        <input type="text" placeholder='Куда я полечу ближайшее время?' />
        <button className='yellow'>Двигаться к мечте</button>
      </div>
    </div>
    <div className="padding">
      <div className="footer">
        <p>© Все мои мечты защищены моим трудолюбием</p>
      </div>
    </div>
    </div>
      

      
  )
}

export default Footer