import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

export const FeedbackStats=()=>{

    const {feedback} = useContext(FeedbackContext);

    let len = feedback ? feedback.length : 0;
    let nr = feedback.length !== 0 ? feedback.map((item)=> item.rating ).reduce((a,b)=>a+b) : 0;
    let avg = nr !== 0 ? ((nr/ feedback.length).toFixed(1)) : 0;

    return(<>
    <div className="feedback-stats">
        <h4>{len} Reviews</h4>
        <h4>Average rating: {avg !== 0? avg : 0}</h4>
    </div>
    </>)
}