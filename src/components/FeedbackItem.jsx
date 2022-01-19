import { React, useState } from 'react'

function FeedbackItem({ feedbackItem }) {

    return (
        <div className='card'>
            <div className="num-display">{ feedbackItem.rating }</div>
            <div className="text-display">{ feedbackItem.text }</div>
        </div>
    )
}

export default FeedbackItem
