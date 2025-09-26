import React, { useEffect } from 'react'
import FlavorCard from '../components/FlavorCard'
import { section } from 'motion/react-client'


const Flavor = () => {


  return (
    <>
      <main className='flavor-main'>
        {/* banner */}
        <section className='select-tea' data-aos="fade-up" data-aos-delay="400">


          <h2  data-aos="fade-up" data-aos-delay="300"><img src="./images/title-box/Flavor.svg" alt="" /></h2>

          <figure data-aos="fade-up" data-aos-delay="400">
            <img src="./images/pic/p1.png" alt="下午茶" />

          </figure>

          <div className='text'>

            <p>紅茶的風味，隨著產地的氣候、土壤，以及茶葉的品種與製法而展現出不同姿態。
              我們相信，最重要的不是品牌名聲，而是能找到一杯真正契合自己口味的紅茶。
              透過嘗試來自世界各地的紅茶，您能感受到酸潤、甘甜、苦澀與花果香氣的層次變化，最終遇見那一杯只屬於您的獨特滋味。</p>
          </div>
        </section>

        {/* 第一種風味 */}
        <section className="flavor-1" data-aos="fade-up" data-aos-delay="300">
          <div className='head'>
            <h3>
              <span className='num'>01</span>
              <span className='title'>以柔和口感、<br className='show' />好入口為特色的紅茶 </span>
            </h3>
          </div>
          <div className='content'>
            <div className='card-box'>
              <FlavorCard />
              <FlavorCard />
              <FlavorCard />
            </div>
          </div>
        </section>



        {/* 第二種風味 */}
        <section className="flavor-2" data-aos="fade-up" data-aos-delay="300">
          <div className='head'>
            <h3>
              <span className='num'>02</span>
              <span className='title'>風味平衡的紅茶 </span>
            </h3>
          </div>
          <div className='content'>
            <div className='card-box'>
              <FlavorCard />
              <FlavorCard />
              <FlavorCard />
            </div>
          </div>
        </section>


        {/* 第三種風味 */}
        <section className="flavor-3" data-aos="fade-up" data-aos-delay="300">
          <div className='head'>
            <h3>
              <span className='num'>03</span>
              <span className='title'>帶有適度層次<br />與醇厚感的紅茶</span>
            </h3>
          </div>
          <div className='content'>
            <div className='card-box'>
              <FlavorCard />
              <FlavorCard />
              <FlavorCard />
            </div>
          </div>
        </section>

        {/* 第四種風味 */}
        <section className="flavor-4" data-aos="fade-up" data-aos-delay="300">
          <div className='head'>
            <h3>
              <span className='num'>04</span>
              <span className='title'>香氣深邃、<br className='show' />表現突出的紅茶 </span>
            </h3>
          </div>
          <div className='content'>
            <div className='card-box'>
              <FlavorCard />
              <FlavorCard />
              <FlavorCard />
            </div>
          </div>
        </section>

        {/* 第五種風味 */}
        <section className="flavor-5" data-aos="fade-up" data-aos-delay="300">
          <div className='head'>
            <h3>
              <span className='num'>05</span>
              <span className='title'>以豐富醇厚感<br className='show' />為特色的紅茶 </span>
            </h3>
          </div>
          <div className='content'>
            <div className='card-box'>
              <FlavorCard />
              <FlavorCard />
              <FlavorCard />
            </div>
          </div>
        </section>

      </main>


    </>
  )
}

export default Flavor
