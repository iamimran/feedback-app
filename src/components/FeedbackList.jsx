import { React, useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackList() {

    const { feedback } = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0)
        return <p>No feedback(s) yet...</p>

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
                        />

                    </motion.div>
                ))}
            </AnimatePresence>

        </div>
    )
}

export default FeedbackList
