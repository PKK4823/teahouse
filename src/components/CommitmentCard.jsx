import React from 'react'

const CommitmentCard = ({ img, text, title }) => {
    return (
        <div className='CommitmentCard'>
            <div className='img-box'>
                {/* <img src="" alt="" /> */}

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
