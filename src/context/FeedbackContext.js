import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 9
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false, })

    // set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    const updateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map((item) => item.id = id ? { ...item, ...updatedItem } : item ))
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this item?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <FeedbackContext.Provider value = {{
            feedback, feedbackEdit, deleteFeedback, addFeedback, editFeedback, updateFeedback
        }}>
            { children }
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
