import { useContext } from 'react'

import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ feedbackItem }) {

    const { deleteFeedback } = useContext(FeedbackContext)

    return (
        <Card>
            <div className="num-display">{ feedbackItem.rating }</div>
            <button onClick={ () => deleteFeedback(feedbackItem.id)} className="close">
                <FaTimes color="red"/>
            </button>
            <div className="text-display">{ feedbackItem.text }</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    feedbackItem: PropTypes.object.isRequired,
}
export default FeedbackItem
