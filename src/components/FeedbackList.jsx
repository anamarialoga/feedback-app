import { AnimatePresence, motion } from "framer-motion";
import { FeedbackItem } from "./FeedbackItem";

export const FeedbackList = ({feedback, handleDelete}) =>
{
    //console.log(feedback);
    if(feedback.length > 0)
    return (
    <div className="feedback-list">
        <AnimatePresence>
            {feedback.map((item)=> (
            <motion.div
                    key={item.id} 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity:0}}
            >
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
            </motion.div>))}
            {/* FEEDBACK LIST ONLY RECEIVES THE FUNCTION DECLARATION, DOESN'T CALL IT */}
            {/* SENDS THE FUNCTION DECLARATION FURTHER TO APP.JS, WHICH HOLDS THE DATA*/}
        </AnimatePresence>
    </div>)
    return <>No Feedback Yet</>
}