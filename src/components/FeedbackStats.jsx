import { React, useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {

    const { feedback } = useContext(FeedbackContext)

    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    average = average.toFixed(1)

    //replace trailing zero i.e. (4.0)
    average = average.replace(/[.,]0$/, '')

    return <div className='feedback-stats'>
        <h4>{ feedback.length } Reviews</h4>
        <h4>Averge Rating: { isNaN(average) ? 0 : average }</h4>
    </div>;
}


export default FeedbackStats;
