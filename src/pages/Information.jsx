import React from 'react'

const Informamtion = () => {
    return (
        <>

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
        </>
    )
}

export default Informamtion