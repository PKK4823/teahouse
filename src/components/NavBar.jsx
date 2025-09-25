import { Link } from 'react-router-dom'
import $ from 'jquery'
import { useEffect } from 'react';

const NavBar = () => {
    useEffect(() => {
        // 關閉選單的函式
        const closeMenu = () => {
            $('.hamburger').removeClass('is-active');
            $('.navigation').removeClass('show');
            $('.rightNavBar').removeClass('show');
            $('.leftNavBar').removeClass('show');
            $('.nav-title').text("MENU");
        };

        // 漢堡按鈕
        const handler = function () {
            $(this).toggleClass('is-active');
            $('.navigation').toggleClass('show');
            $('.rightNavBar').toggleClass('show');
            $('.leftNavBar').toggleClass('show');

            if ($('.nav-title').text() === "MENU") {
                $('.nav-title').text("CLOSE");
            } else {
                $('.nav-title').text("MENU");
            };
        };

        const $btn = $('.hamburger');
        // 先解除同一個 handler，避免重複綁定
        $btn.off('click', handler).on('click', handler);

        // 為所有選單項目綁定點擊關閉事件
        $('.menu-item-1, .menu-item-2, .menu-item-3, .menu-item-4, .menu-item-5, .menu-item-6').off('click.closeMenu').on('click.closeMenu', function() {
            // 延遲一點關閉，確保路由跳轉能正常執行
            setTimeout(closeMenu, 100);
        });

        $('.menu-item-1').off('mouseenter').on('mouseenter', function() {
            $('.mask img').removeClass('current');
            $('.mask img').eq(0).addClass('current');
        });

        $('.menu-item-2').off('mouseenter').on('mouseenter', function() {
            $('.mask img').removeClass('current');
            $('.mask img').eq(1).addClass('current');
        });

        $('.menu-item-3').off('mouseenter').on('mouseenter', function() {
            $('.mask img').removeClass('current');
            $('.mask img').eq(2).addClass('current');
        });

        $('.menu-item-4').off('mouseenter').on('mouseenter', function() {
            $('.mask img').removeClass('current');
            $('.mask img').eq(3).addClass('current');
        });

        $('.menu-item-5').off('mouseenter').on('mouseenter', function() {
            $('.mask img').removeClass('current');
            $('.mask img').eq(4).addClass('current');
        });

        $('.menu-item-6').off('mouseenter').on('mouseenter', function() {
            $('.mask img').removeClass('current');
            $('.mask img').eq(5).addClass('current');
        });

        // 清理（StrictMode 下第二次 mount/unmount 也不會殘留）
        return () => {
            $btn.off('click', handler);
            $('.menu-item-1, .menu-item-2, .menu-item-3, .menu-item-4, .menu-item-5, .menu-item-6').off('click.closeMenu');
            for(let i = 1; i <= 6; i++) {
                $(`.menu-item-${i}`).off('mouseenter');
            }
        };

    }, []);

    return (
        <div className='topbar'>
            {/* logo */}
            <Link to='/' className='logo'>
                <img src="./images/pic/logo.svg" alt="" />
            </Link>

            <div className='navbar'>

                {/* 右側 */}
                <div className='rightNavBar'>

                    <nav className='navigation'>
                        <ul>
                            <li >
                                <Link to="/" className='menu-item-1'>
                                    <figure className='sitemap_item_content'>
                                        <p>01</p>
                                        <div>
                                            <p>Home </p>
                                            <p>首頁</p>
                                        </div>
                                        <img src="./images/icon/arrow-w.svg" alt="箭頭" />
                                    </figure>
                                </Link>
                            </li>
                            <li >
                                <Link to="/Informamtion" className='menu-item-2'>
                                    <figure className='sitemap_item_content'>
                                        <p>02</p>
                                        <div>
                                            <p>Information </p>
                                            <p>關於我們</p>
                                        </div>
                                        <img src="./images/icon/arrow-w.svg" alt="箭頭" />
                                    </figure>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Flavor" className='menu-item-3'>
                                    <figure className='sitemap_item_content'>
                                        <p>03</p>
                                        <div>
                                            <p>Flavor</p>
                                            <p>風味一覽</p>
                                        </div>
                                        <img src="./images/icon/arrow-w.svg" alt="箭頭" />
                                    </figure>
                                </Link>
                            </li>
                            <li >
                                <Link to="/FAQ" className='menu-item-4'>
                                    <figure className='sitemap_item_content'>
                                        <p>04</p>
                                        <div>
                                            <p>FAQ </p>
                                            <p>常見問題</p>
                                        </div>
                                        <img src="./images/icon/arrow-w.svg" alt="箭頭" />
                                    </figure>
                                </Link>
                            </li>
                            <li >
                                <Link to="/" className='menu-item-5'>
                                    <figure className='sitemap_item_content'>
                                        <p>05</p>
                                        <div>
                                            <p>Online shop </p>
                                            <p>線上商店</p>
                                        </div>
                                        <img src="./images/icon/arrow-w.svg" alt="箭頭" />
                                    </figure>
                                </Link>
                            </li>
                            <li>
                                <Link to="/ContactUs" className='menu-item-6'>
                                    <figure className='sitemap_item_content menu-item-6'>
                                        <p>06</p>
                                        <div>
                                            <p>Contact us </p>
                                            <p>聯絡我們</p>
                                        </div>
                                        <img src="./images/icon/arrow-w.svg" alt="箭頭" />
                                    </figure>
                                </Link>
                            </li>

                        </ul>
                    </nav>

                </div>

                {/* 左側 */}
                <div className='leftNavBar'>
                    <div className='mask'>
                        <img className='current' src="./images/navBar/pic1.jpg" alt="" />
                        <img className='' src="./images/navBar/pic2.jpg" alt="" />
                        <img className='' src="./images/navBar/pic3.jpg" alt="" />
                        <img className='' src="./images/navBar/pic4.jpg" alt="" />
                        <img className='' src="./images/navBar/pic5.jpg" alt="" />
                        <img className='' src="./images/navBar/pic6.jpg" alt="" />

                    </div>

                </div>

                {/* 漢堡按鈕 */}
                <button className="hamburger">
                    <div className='menu-box'>
                        <p className='nav-title'>MENU</p>
                        <span className="bar" style={{ width: '60px' }}></span>
                        <span className="bar" style={{ width: '60px' }}></span>

                    </div>
                </button>

            </div>
        </div >
    )
}

export default NavBar