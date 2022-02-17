import { React, useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList() {

    const { feedback, isLoading } = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0))
        return <p>No feedback(s) yet...</p>

    return isLoading ? (<Spinner />) : (
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
