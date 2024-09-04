
import classes from './Card.module.css'

const Card = (porps) => {
    return <div className={classes.card}>{porps.children}</div>
}

export default Card;