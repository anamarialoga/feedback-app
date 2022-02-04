import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    return (
        <FeedbackContext.Provider value ={{}}>
        {children}
        </FeedbackContext.Provider>
        )
}