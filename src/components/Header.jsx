export const Header = ({text}) =>{

    const headerStyles= {
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: '#ff6a95' 
    }

    return (
    <header style = {headerStyles}>
        <div className="container">
            <h1>{text}</h1>
        </div>
    </header>);
}