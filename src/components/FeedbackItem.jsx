import { Card } from "./shared/Card";
import {FaTimes} from "react-icons/fa";
import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
export const FeedbackItem = ({item}) => {

    //EXTRACT THE FUNCTIONALITY FOR DELETING AN ITEM FROM CONTEXT
    const {deleteFeedbackItem} = useContext(FeedbackContext);
    
    return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={() => deleteFeedbackItem(item.id)}>
            <FaTimes color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>);
}