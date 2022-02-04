import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
import { FeedbackItem } from "./FeedbackItem";

export const FeedbackList = () =>
{
    //EXTRACT WHAT WE NEED FROM OUR CONTEXT, BY PASSING IT TO THE HOOK
    //wE HAVE ACCESS TO ANYTHING THAT'S IN THE VALUE PROPERTY -> feedback (in this case)
    //PASS THE VALUE INTO {}
    const {feedback} = useContext(FeedbackContext); 
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
            <FeedbackItem key={item.id} item={item}/>
            </motion.div>))}
        </AnimatePresence>
    </div>)
    return <>No Feedback Yet</>
}