import { Link } from 'react-router-dom';
import Commitment from '../data/Commitment.json'
import CommitmentCard from '../components/CommitmentCard';
import { useEffect, useState } from 'react';

import { ReactLenis, useLenis } from 'lenis/react'


const Home = () => {
  // state管理
  const [arrCommitment] = useState(Commitment);

  // 滾動到頁面頂部的函數
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }



  return (
    <main className='home-main'>

      {/* 版面 */}
      <section className='banner'>
        <div className='wrap'>

          <h1 className='brand-name'>Tea House</h1>
          <figure>
            <img src="./images/pic/Mask group.png" alt="" />

          </figure>
          <p className='text' data-aos="fade-up">品味世界的紅茶時光， <br className='show' />讓香氣與層次交織 <br className='show' /> 陪伴你度過生活中每一個美好瞬間。</p>
          {/* <img src="./images/header.png" alt="" /> */}
        </div>
      </section>

      {/* 品牌理念 */}
      <section className='concept'>

        <h2 className='title'><img src="./images/title-box/concept.svg" alt="" /></h2>
        <div className='concept-text'>
          <h2 data-aos="fade-up" data-aos-delay="300">品味世界紅茶的最短距離</h2>
          <div className='text-box'>
            <p className='text-1' data-aos="fade-up" data-aos-delay="300">2013年創立的 Tea House，相信紅茶是自然風土與人類工藝交織而成的藝術品。我們專注於嚴選來自世界各地知名茶園的紅茶，為台灣茶愛好者帶來更寬廣的風味想像。</p>
            <p className='text-2' data-aos="fade-up" data-aos-delay="350">多樣化的紅茶品種，來自大吉嶺高山、阿薩姆平原、錫蘭島嶼到非洲茶園，各自孕育出獨特的氣候風土與香氣層次。每一片茶葉，都是大自然與匠人手藝共同譜寫的詩篇。</p>
            <p className='text-3' data-aos="fade-up" data-aos-delay="400">在沖泡與品味的過程中，或許你會對不同的茶香、濃淡與口感產生疑問。Tea House 期盼透過多元的內容，帶領您探索紅茶世界的奧秘──從風味知識、產地故事到沖泡技巧，陪伴您在日常中，找到那一杯專屬於自己的紅茶時光。</p>
          </div>
        </div>
        <div className='concept-img1' ><img src="./images/navBar/pic1.jpg" alt="品牌概念圖片" /></div>
        <div className='concept-img2'><img src="./images/navBar/pic2.jpg" alt="品牌概念圖片" /></div>
        <div className='concept-img3' ><img src="./images/navBar/pic3.jpg" alt="品牌概念圖片" /></div>
      </section>

      {/* 品質檢測 */}
      <section className='commitment'>

        <div className='title-wrap' data-aos="fade-up" data-aos-delay="300">
          <h2 className='title'> <img src="./images/title-box/commitment.svg" alt="" /></h2>
        </div>
        <div className='text-wrap' data-aos="fade-up" data-aos-delay="300">
          <p className='text'>隨著台灣對進口農作物檢驗標準日益嚴格，茶葉進口產業面臨前所未有的挑戰。然而，我們始終堅持高規格的採購原則，拒絕在品質上妥協。面對食安風暴與疫情嚴峻的環境，我們選擇打破品牌迷思，專注於實質的安全與透明，確保每一杯茶都能讓您喝得安心、喝得健康。</p>

        </div>
        <div className='content'>

          <div className='card-box' data-aos="fade-up" data-aos-delay="300">
            {arrCommitment.map((item) => {
              return (
                <CommitmentCard
                  key={item.id}
                  title={item.title}
                  text={item.text}
                  img={item.img}
                />
              );
            })}
          </div>
        </div>

      </section>


      {/* 最新消息 */}

      {/* 營業資訊 */}
      <section className='information'>
        <div className='title-wrap' data-aos="fade-up" data-aos-delay="300">
          <h2><img src="./images/title-box/information.svg" alt="營業資訊" /></h2>
        </div>

        <div className='info-wrap' data-aos="fade-up" data-aos-delay="400">

          <div className='info-box'>
            <address className='info'>
              <p className='inline'>地址</p>
              <p>100台北市中正區濟南路一段321號</p>
            </address>
            <address className='info'>
              <p className='inline'>營業時間</p>
              <p>10:00~17:00</p>
            </address>
            <address className='info'>
              <p className='inline'>連絡電話</p>
              <p>+886 123 456 789</p>
            </address>
          </div>

          <div className='map-box'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7546295681077!2d121.52546979999998!3d25.0423998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a970a11a84ad%3A0x58e05f2528812097!2z5ZyL56uL6Ie65YyX5ZWG5qWt5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1753778149565!5m2!1szh-TW!2stw"
              allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      {/* 聯絡我們 */}
      <section className='contact'>
        <div className='container'>
          <p className='text'>不論您有哪些需求，我們都樂於聽聞。 歡迎聯繫我們</p>
          <Link to='/ContactUs' onClick={scrollToTop} className='contact-btn'>
            <p>Contact us <br /> <span>聯絡我們</span></p>
          </Link>
        </div>
      </section>

    </main>

  )
}

export default Home
