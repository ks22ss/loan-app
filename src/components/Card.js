import "../css/Card.css"

const Card = ({src, alt, title, p, className}) => {
    return ( 
        <div className={`card-container ${className}`}>
            <img src={src} alt={alt}></img>
            <h2>{title}</h2>
            <p>{p}</p>
        </div>
     );
}
 
export default Card;