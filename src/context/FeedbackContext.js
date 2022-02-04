import { createContext, useState } from "react";

export const FeedbackContext = createContext();

//REFACTORING: MOVING ALLTHE HOOKS AND FUNCTIONALITY INTO THE CONTEXT
export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([{
        id: 1, 
        text: 'This feedback item 1 comes from Context',
        rating: 8
    }, {
        id: 2, 
        text: 'This feedback item 2 comes from Context',
        rating: 9
    }, {
        id: 3, 
        text: 'This feedback item 3 comes from Context',
        rating: 10
    }])

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
        <FeedbackContext.Provider value ={{ 
            feedback, 
            deleteFeedbackItem, 
            addFeedbackItem,
            }}>
        {children}
        </FeedbackContext.Provider>
        )
}