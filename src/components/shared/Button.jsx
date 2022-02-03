export const Button = ({children, version, type, isDisabled}) => {
    return (
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>)
}

Button.defaultProps={
    version: 'secondary',
    type: 'submit', 
    isDisabled: true //By default, the button will be disabled until input >= 10 chars
}
