import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  // 滾動到頁面頂部的函數
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer>
        <div className='inner'>
            <nav className='footer-nav'>
                <ul className='footer-menu'>
                    <li>
                        <Link to='/' onClick={scrollToTop}>Home</Link>
                    </li>
                    <li>
                        <Link to='/Information' onClick={scrollToTop}>Information</Link>
                    </li>
                    <li>
                        <Link to='/Flavor' onClick={scrollToTop}>Flavor</Link>
                    </li>
                    <li>
                        <Link to='/FAQ' onClick={scrollToTop}>FAQ</Link>
                    </li>
                    <li>
                        <Link to='/OnlineShop' onClick={scrollToTop}>Online shop</Link>
                    </li>
                    <li>
                        <Link to='/ContactUs' onClick={scrollToTop}>Contact us</Link>
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