import { useContext } from "react";
import { useState } from "react"
import { FeedbackContext } from "../context/FeedbackContext";
import { FeedbackSelect } from "./FeedbackSelect";
import { Button } from "./shared/Button";
import { Card } from "./shared/Card"

export const FeedbackForm = () => {
    const [text, setText] = useState(""); 
    const [rating, setRating] = useState(10);
    //console.log(rating);
    
    //VALIDATION FOR MIN CHARACTERS 
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [validationMess, setValidationMess] = useState("")

    const validateInput=(text)=>{
        if(text.length>=9)
        {
            setValidationMess("");
            setBtnDisabled(false);
        }
        else
            { 
                setValidationMess("Minimum 10 characters needed!");
                setBtnDisabled(true);
            }
    }

    //EXTRACT THE Add FUNCTIONALITY FROM CONTEXT
    const {addFeedbackItem} = useContext(FeedbackContext);

    const handleSubmit = (e)=>{
        e.preventDefault(); 
        if(text.length>=9)
        {
            const newFeedback = {
                text,
                rating,
            }
            addFeedbackItem(newFeedback);
            setText(''); //resetting text input after submitting;
        }
    }

    return( 
    <Card>
        <form onSubmit={handleSubmit}>
            {/* IN FORMS THERE'S A STATE FOR EACH INPUT FIELD */}
            <h2>How would you rate your service with us?</h2>
            {/* RECEIVES THE SELECTED RATING THROUGH SELECT() & SETS IT INTO THE FORM*/}
            <FeedbackSelect select={(rating)=> setRating(rating)} />
            <div className="input-group">
                <input onChange={(inp)=> {setText(inp.target.value); validateInput(text)}} value={text} type='text' placeholder="Write a review"/>
                <Button isDisabled={btnDisabled}>Submit</Button>
            </div>
            {validationMess? <div className="message">{validationMess}</div>: <></>}
        </form>
    </Card>)
}

