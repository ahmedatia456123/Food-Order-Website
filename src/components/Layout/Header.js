import {Fragment} from 'react'
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>SalSah</h1>
            <HeaderCartButton onClick={props.onClick} />
        </header>
        <div className={classes['main-image']}>
            <img src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt='A table full of delicious food!' /> 
        </div>
    </Fragment>
}

export default Header