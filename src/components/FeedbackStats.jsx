export const FeedbackStats=({feedback})=>{
    let len = feedback ? feedback.length : 0;
    let nr = feedback.length !== 0 ? feedback.map((item)=> item.rating ).reduce((a,b)=>a+b) : 0;
    let avg = nr !== 0 ? nr/ feedback.length : 0;

    return(<>
    <div className="feedback-stats">
        <h4>{len} reviews</h4>
        <h4>Average rating: {avg !== 0? avg : 0}</h4>
    </div>
    </>)
}