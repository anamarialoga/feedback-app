//main App component
import { AboutIconLink } from "./components/AboutIconLink.jsx";
import { FeedbackForm } from "./components/FeedbackForm.jsx";
import { FeedbackList } from "./components/FeedbackList.jsx";
import { FeedbackStats } from "./components/FeedbackStats.jsx";
import { Header } from "./components/Header.jsx"

export const App = () => {
    return (
        <>
        <Header text="Feedback UI"/>,
        <div className="container">
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
            <AboutIconLink/>
        </div>
        </>
        
    )
}