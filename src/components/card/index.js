export const Card = ({label,icon,icomposition,backg}) =>{
    return(
        <div>
            <img
            className="card"
            src={backg}
            alt="test">
            </img>
            {icomposition === "left" && <span className="icon"><img src={icon}/></span> }
            <p>{label}</p>
            {icomposition === "right" && <span className="icon"><img src={icon}/></span> }

        </div>
    )
}