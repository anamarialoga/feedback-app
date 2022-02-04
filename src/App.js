//main App component
import { useState } from "react"
import { AboutIconLink } from "./components/AboutIconLink.jsx";
import { FeedbackForm } from "./components/FeedbackForm.jsx";
import { FeedbackList } from "./components/FeedbackList.jsx";
import { FeedbackStats } from "./components/FeedbackStats.jsx";
import { Header } from "./components/Header.jsx"
import { FeedbackData } from "./data/feedbackData.js";
import { About } from "./pages_route/About.jsx";

export const App = () => {
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedbackItem = (id) => {
        if(window.confirm('Are you sure you want to delete?'))
            setFeedback(feedback.filter((item) => item.id !== id));
            // Re-filters the same feedback array for each on-click;
    }

    const addFeedbackItem = (newFeedObj) => {
        let newId = Number(feedback.length + 1);
        newFeedObj.id= newId;
        console.log(newFeedObj);

        //preserves the state && adds the new object into the feedback list;
        setFeedback([newFeedObj, ...feedback]); 
    }


    return (
        <>
        <Header text="Feedback UI"/>,
        <div className="container">
        <FeedbackForm handleAdd={addFeedbackItem}/>
        {/* APP.JS RECEIVES THE FUNCTION DECLARATION THROUGH FEEDBACK FORM */}
        {/* APP.JS IMPLEMENTS THE FUNCTIONALITY FOR THE FUNCTION DECLARATION */}
        <FeedbackStats feedback = {feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedbackItem}/>
        {/* APP.JS RECEIVES THE FUNCTION DECLARATION THROUGH FEEDBACK LIST */}
        {/* APP.JS IMPLEMENTS THE FUNCTIONALITY FOR THE FUNCTION DECLARATION */}
        <AboutIconLink/>
        </div>
        </>
        
    )
}