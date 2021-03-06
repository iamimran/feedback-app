import {React, useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    const { addFeedback, feedbackEdit, updateFeedback }= useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setErrorMessage(null)
        } else if (text !== '' && text.trim().length < 10) {
            setErrorMessage('Text must be atleast 10 characters')
            setBtnDisabled(true)
        } else {
            setErrorMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleFeedbackSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }

            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            setText('')
        }
    }
  return <Card>
            <form onSubmit={ handleFeedbackSubmit }>
                <h2>How would you rate our service with us?</h2>
                <RatingSelect select = { (rating) => setRating(rating)}></RatingSelect>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder='write a review'
                        value = { text }
                        onChange = { handleTextChange }/>
                    <Button type='submit' version='primary' isDisabled = {btnDisabled}>
                        Send
                    </Button>
                </div>
                { errorMessage && <div className='message'>{ errorMessage }</div>}
            </form>
        </Card>;
}

export default FeedbackForm;
