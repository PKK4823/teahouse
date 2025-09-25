import { main } from 'motion/react-client'
import React from 'react'

const ContactUs = () => {
  return (
    <main>
        <section>
            <header></header>
            <div>
                <form name="contactform" id="contactform" method="post" accept-charset="UTF-8">
                    <label for="usernsme">*姓名:</label>
                    <input type="text" name="usernsme" id="usernsme" title="姓名欄位" placeholder="請輸入您的姓名" required
                        autofocus></input>
                    <label for="tel">連絡電話:</label>
                    <input type="tel" name="tel" id="tel" maxlength="10" title="連絡電話欄位" placeholder="例如:0912345678"></input>
                    <label for="email">*Email:</label>
                    <input type="email" name="email" id="email" required title="Email欄位" placeholder="請輸入Email"></input>
                     <label for="">留言:</label>
                    <textarea name="messenge" id="messenge" rows="7" placeholder="請輸入您的意見"></textarea>
                    <button class="btn-animate" type="submit">
                        <span>送出</span>
                    </button>
                </form>
            </div>
        </section>
    </main>
  )
}

export default ContactUs
