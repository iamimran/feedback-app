import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this item?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return(
        <>
            <Header text = "Feedback App"></Header>
            <div className="container">
                <FeedbackForm handleAdd = { addFeedback }></FeedbackForm>
                <FeedbackStats feedback = { feedback }></FeedbackStats>
                <FeedbackList feedback = { feedback } handleDelete = { deleteFeedback }></FeedbackList>
            </div>
        </>
    );
}

export default App;
