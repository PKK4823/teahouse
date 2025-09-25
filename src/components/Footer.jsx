import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className='inner'>
            <nav className='footer-nav'>
                <ul className='footer-menu'>
                    <li>
                        <Link to='#'>Home</Link>
                    </li>
                    <li>
                        <Link to='#'>Abouts us</Link>
                    </li>
                    <li>
                        <Link to='#'>Flavor</Link>
                    </li>
                    <li>
                        <Link to='#'>FAQ</Link>
                    </li>
                    <li>
                        <Link to='#'>Online shop</Link>
                    </li>
                    <li>
                        <Link to='#'>Contact us</Link>
                    </li>
                </ul>
            </nav>
            <ul className='footer-sns'>
                <li>
                    <Link><img src="./images/icon/ins-w.svg" alt="ig連結圖片" /></Link>
                </li>
                <li>
                    <Link><img src="./images/icon/fb-w.svg" alt="fb連結圖片" /></Link>
                </li>
            </ul>
            <p className='copyright'>© 2025 TEA HOUSE</p>
        </div>
    </footer>
  )
}

export default Footer
