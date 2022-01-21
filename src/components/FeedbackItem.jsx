import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'


function FeedbackItem({ feedbackItem, handleDelete }) {

    return (
        <Card>
            <div className="num-display">{ feedbackItem.rating }</div>
            <button onClick={ () => handleDelete(feedbackItem.id)} className="close">
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
