import React from 'react'

function FeedbackCard(props) {
    return (
        <div className='feedback-card'>
            <img src={props.photo} id="feedback-photo"></img>
            <div className='feedback-text'>
                <h2>{props.name}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default FeedbackCard