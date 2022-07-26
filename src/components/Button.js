import "../css/Button.css"

const Button = ({text}) => {
    return ( 
        <button className="default-button">
            {text}
        </button>
     );
}
 
export default Button;