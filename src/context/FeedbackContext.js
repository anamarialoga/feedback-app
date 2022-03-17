import { createContext, useState , useEffect} from "react";

export const FeedbackContext = createContext();

//REFACTORING: MOVING ALLTHE HOOKS AND FUNCTIONALITY INTO THE CONTEXT
export const FeedbackProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);

    //empty array because we only want the effect to run once, when page loades;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{fetchFeedback()},[]) 

    const fetchFeedback = async () => {
        const response = await fetch(`/feedback`);
        const data = await response.json();
        //console.log(data);
        setFeedback(data);
        if(feedback) setLoading(false);
    }
    
    const deleteFeedbackItem = async (id) => {
        if(window.confirm('Are you sure you want to delete?'))
        {
            await fetch(`/feedback/${id}`, 
            {
                method: 'DELETE'
            })
            setFeedback(feedback.filter((item) => item.id !== id));
            // Re-filters the same feedback array for each on-click;
        }
    }

    const addFeedbackItem = async (newFeedObj) => {

        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedObj),
          })

        const data = await response.json();

        // let newId = Number(feedback.length + 1);
        // newFeedObj.id= newId;
        // console.log(newFeedObj);

        //preserves the state && adds the new object into the feedback list;
        setFeedback([data, ...feedback]); 
    }

    return (
        <FeedbackContext.Provider value ={{ 
            feedback, 
            deleteFeedbackItem, 
            addFeedbackItem,
            loading
            }}>
        {children}
        </FeedbackContext.Provider>
        )
}