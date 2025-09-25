import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"


const App = () => {
    // 作用中的變數
    const [activeQuestion, setActiveQuestion] = useState(null)


    // FAQ資料
    const questions = [
        {
            id: 1,
            question: "賞味期限與保存方式",
            answer: "答案1",
        },
        {
            id: 2,
            question: "大量訂購是否有額外優惠呢？",
            answer: "若為30盒以上訂單，歡迎透過 LINE客服 或 聯絡我們 與專員聯繫，我們將另外提供您大量訂購的專屬優惠。",
        },
        {
            id: 3,
            question: "詢問送禮服務：喜餅/彌月/企業訂購等",
            answer: "如有喜餅訂購、彌月訂購、企業採購、節慶贈禮訂購、客製化詢問等需求，歡迎直接加入官方LINE由一對一的專員為您服務。",
        }
    ]




    return (
        <div className='wrap' style={{
            maxWidth: '100vw',
            height: '100vh',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div className='accordion' style={{
                width: "80%",
                margin: "auto",
                maxWidth: "1400px",

                padding: "8px",
                borderRadius: "5px",
            }}>
                <h2 style={{
                    textAlign: "center",
                    marginBottom: "6px",
                }}>FAQ標題</h2>


                {
                    // 帶出陣列中的資料
                    questions.map((q) => {
                        return (
                            <div key={q.id} style={{ marginBottom: "5px" }}>
                                {/* QA按鈕 */}
                                <button
                                    style={{
                                        width: "100%",
                                        textAlign: "left",
                                        border: "none",
                                        outline: "none",
                                        padding: "4px",

                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                    onClick={() => { setActiveQuestion(activeQuestion === q.id ? null : q.id) }}
                                >
                                    {/* 帶出題目 */}
                                    {q.question}
                                    {/* 加號減號的icon */}
                                    {activeQuestion === q.id ? "-": "+"}
                                </button>
                                {/* 折疊動畫 */}
                                <AnimatePresence>
                                    {
                                        activeQuestion === q.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                style={{ marginTop:"5px", color:"#333", fontSize:"14px"}}
                                            >
                                                {/* 內容 */}
                                                {q.answer}
                                            </motion.div>
                                        )
                                    }
                                </AnimatePresence>
                            </div>
                        )
                    })


                }
            </div>
        </div>
    )
}


export default App

