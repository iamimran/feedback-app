import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback }) {

    if(!feedback || feedback.length === 0)
        return <p>No feedback(s) yet...</p>

    return (
        <div className='feedback-list'>
            {feedback.map((feedbackItem) => (
                <FeedbackItem feedbackItem = { feedbackItem }></FeedbackItem>
            ))}
        </div>
    )
}

export default FeedbackList
