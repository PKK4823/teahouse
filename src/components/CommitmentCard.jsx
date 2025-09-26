import React from 'react'

const CommitmentCard = ({ img, text, title }) => {
    return (
        <div className='CommitmentCard'>
            <div className='img-box'>
                <img src="./images/pic/tea-leaf.png" alt="" />

            </div>
            <div className='text-box'>
            <h3>{title}</h3>
            <p>
               {text}
            </p>

            </div>
        </div>
    )
}

export default CommitmentCard
