import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"


const App = () => {
    // 作用中的變數
    const [activeQuestion, setActiveQuestion] = useState(null)


    // FAQ資料
    const questions = [
        {
            id: 1,
            question: "沖泡建議",
            answer: "熱泡 <br/>比例:  茶１g： 水１００ml<br/>水溫: １００℃<br/>時間: ３min<br/>*不喜歡苦澀味!!<br/>您也可以改用90~95℃的水沖泡, 雖然香氣會下降, 但比較容易帶出茶湯甘甜.<br/>茶葉久浸大多無法避免苦澀, 建議不超過5分鐘.<br/>＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿<br/>冷泡<br/>比例:  茶１g： 水２００ml<br/>水溫:  常溫水<br/>時間:  置入冰箱８～１２hr<br/><br/>*推薦使用冰鎮方式, 更能保留紅茶香氣!!<br/>使用熱泡方式沖泡出茶湯後, 將容器放入冰水中冰鎮.<br/>也可以使用茶1g : 水50ml 的比例沖泡出茶湯後, 加入冰塊稀釋降溫.",
        },
        {
            id: 2,
            question: "茶葉可以保存多久",
            answer: "密封包裝的茶葉保鮮期是12個月至24個月不等，但茶葉本身鮮活度會隨著時間增長而減少。",
        },
        {
            id: 3,
            question: "如何保紅茶茶葉？",
            answer: "如果是未開封的茶葉，放置陰涼處即可，避免太陽照射<br/>如有開封過，最簡單的方法為準備一條橡皮筋將真空袋前端袋口對折後束緊，放在陰涼處保存即可。<br/> 如果家中有密封罐，也可以將茶葉放置密封罐，並置於陰涼處可防止茶葉變質走味。",
        },
        {
            id: 4,
            question: "國家安全檢測都有符合標準嗎？",
            answer: "這部分絕對讓茶友放心，本公司進口的每批茶葉送農藥檢驗與SGS檢驗，<br/>符合中華民國國家標準，您絕對可以放一百個心，安心飲用。",
        },
        {
            id: 5,
            question: "大量訂購是否有額外優惠呢？",
            answer: "若為30盒以上訂單，歡迎透過聯絡我們進行聯繫，我們將另外提供您大量訂購的專屬優惠。",
        },
        {
            id: 6,
            question: "詢問送禮服務、企業訂購等",
            answer: "如有企業採購、客製化詢問等需求，歡迎透過聯絡我們進行聯繫。",
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
                display:"flex",
                flexDirection:"column",
                alignItems:"center"

            }}>
                <h2 style={{
                    textAlign: "center",
                    marginBottom: "5rem",
                    display:"flex",
                    justifyContent:"center",
                }}> <img src="./images/title-box/FAQ.svg" alt="" style={{ width: "14rem" }} /> </h2>


                {
                    // 帶出陣列中的資料
                    questions.map((q) => {
                        return (
                            <div key={q.id} style={{ marginBottom: "5px",width:"100%" ,display:"flex",alignItems:"center",flexDirection:"column"}}>
                                {/* QA按鈕 */}
                                <button
                                    style={{
                                        width: "100%",
                                        textAlign: "left",
                                        border: "none",
                                        outline: "none",
                                        padding: "4px",
                                        display: "flex",
                                        backgroundColor:"#797977",
                                        justifyContent: "space-between",
                                        color:"#F3F2EA", fontSize:"20px",
                                        maxWidth:"800px",
                                        borderRadius:"5px"
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
                                                style={{ marginTop:"5px", color:"#484742", fontSize:"16px",textAlign:"left"}}
                                            >
                                                {/* 內容 - 使用dangerouslySetInnerHTML讓<br/>標籤正確換行 */}
                                                <div dangerouslySetInnerHTML={{ __html: q.answer }} />
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