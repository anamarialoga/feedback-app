import { Card } from "./shared/Card";
import {FaTimes} from "react-icons/fa";
export const FeedbackItem = ({item, handleDelete}) => {
    return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={() => handleDelete(item.id)}>
            {/* CREATES A FUNCTION THAT CALLS HANDLEDELETE WITH AN ARGUMENT ITEM.ID*/}
            {/* ARROW FUNCTION BECAUSE IT WILL TRIGGER ONLY FOR ONCLICK*/}
            {/* SENDS THE ITEM.ID THROUGH FUNCTION PARAMETER --> FEEDBACK LIST*/}
            <FaTimes color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>);
}