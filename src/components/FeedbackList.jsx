import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

function FeedbackList({ feedback, handleDelete }) {

    if(!feedback || feedback.length === 0)
        return <p>No feedback(s) yet...</p>

    // return (
    //     <div className='feedback-list'>
    //         {feedback.map((feedbackItem) => (
    //             <FeedbackItem
    //                 key = { feedbackItem.id }
    //                 feedbackItem = { feedbackItem }
    //                 handleDelete = { (id) => { handleDelete(id) }}>
    //             </FeedbackItem>
    //         ))}
    //     </div>
    // )

    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((feedbackItem) => (
                    <motion.div
                        key={ feedbackItem.id }
                        initial = {{ opacity: 0}}
                        animate = {{ opacity: 1}}
                        exit = {{ opacity: 0 }}
                    >
                        <FeedbackItem
                            key = { feedbackItem.id }
                            feedbackItem = { feedbackItem }
                            handleDelete = { (id) => { handleDelete(id) }}>
                        </FeedbackItem>
                    </motion.div>
                ))}
            </AnimatePresence>

        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ),
}
export default FeedbackList
