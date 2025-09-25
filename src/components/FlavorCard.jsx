import React from 'react'
import { Link } from 'react-router-dom'

const FlavorCard = () => {
    return (
        <>
            <Link to='/' className='flavor-card'>
                <figure className='flavor-pic'>
                    <img src="./images/tea-pic/image 13.png" alt="茶葉示意圖" />
                </figure>
                <div className='tea-info'>
                    <p className="tea-name">糖栗子茶</p>
                    <p className='tea-text'>
                        栗子、糖衣與波旁香草結合，與法國著名甜點 Marrons Glaces相呼應，是一款巴黎色彩濃厚的薰香紅茶。葉片中滲有糖栗子碎片，濃郁的栗子香帶著香甜滋味。
                    </p>
                    <div className='card-body'>
                        <p className='flavor-box'>
                            甘甜：●●●
                            <br />
                            苦澀：●
                            <br />
                            層次：●●●●●
                            <br />
                            香氣：●●●●●
                        </p>

                    </div>

                </div>

            </Link>
        </>
    )
}

export default FlavorCard
