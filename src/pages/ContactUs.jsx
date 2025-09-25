import React, { useState } from 'react'

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    tel: '',
    email: '',
    message: ''
  });

  // 處理表單輸入
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 處理表單提交
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 這裡可以加入表單驗證邏輯
    console.log('表單資料:', formData);
    
    // 顯示彈窗
    setShowModal(true);
    
    // 清空表單（可選）
    setFormData({
      service: '',
      name: '',
      tel: '',
      email: '',
      message: ''
    });
  };

  // 關閉彈窗
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main className="contactUs-main">
      <section className="contactUs">
        <header className="contact-header">
          <h1 className="page-title">聯絡我們</h1>
          <p className="page-subtitle">不論您有哪些需求，我們都樂於聽聞</p>
        </header>
        
        <div className="form-container">
          <form 
            name="contactform" 
            id="contactform" 
            method="post" 
            acceptCharset="UTF-8"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            {/* 項目 */}
            <div className="form-group">
              <label htmlFor="service">*洽詢項目:</label>
              <input 
                type="text" 
                name="service" 
                id="service" 
                title="洽詢項目" 
                placeholder="請輸入洽詢項目"
                value={formData.service}
                onChange={handleInputChange}
                required
                autoFocus
              />
            </div>

            {/* 聯絡人 */}
            <div className="form-group">
              <label htmlFor="name">*聯絡人:</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                title="聯絡人" 
                placeholder="聯絡人姓名"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

              {/* 連絡電話 */}
            <div className="form-group">
              <label htmlFor="tel">連絡電話:</label>
              <input 
                type="tel" 
                name="tel" 
                id="tel" 
                maxLength="10" 
                title="連絡電話欄位" 
                placeholder="例如:0912345678"
                value={formData.tel}
                onChange={handleInputChange}
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">*Email:</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required 
                title="Email欄位" 
                placeholder="請輸入Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* 留言 */}
            <div className="form-group">
              <label htmlFor="message">留言:</label>
              <textarea 
                name="message" 
                id="message" 
                rows="7" 
                placeholder="請輸入您的需求"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button className="btn-animate submit-btn" type="submit">
              <span>送出</span>
            </button>

          </form>
        </div>
      </section>

      {/* 成功提交彈窗 */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="success-icon">✓</div>
            </div>
            <div className="modal-body">
              <h2>謝謝您的填寫</h2>
              <p>我們將盡快與您聯繫</p>
            </div>
            <div className="modal-footer">
              <button className="modal-btn" onClick={closeModal}>
                確定
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default ContactUs