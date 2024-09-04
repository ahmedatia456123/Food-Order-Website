import React from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
import { useContext, useEffect,useState } from 'react'

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext)
    const [bumpState,setBumpState] = useState(false)

    useEffect(() => {
        if(cartCtx.items.length === 0) {
            return
        }
        setBumpState(true)
        const timerBump = setTimeout(() => setBumpState(false),300)

        return () => clearTimeout(timerBump)
        
    }, [cartCtx.totalAmount])
    const numberOfItems = cartCtx.items.reduce((currentNum , item) => {
        return currentNum + item.amount
    } , 0)
    const bumpClass = `${classes.button} ${bumpState && classes.bump}`
    return <button onClick={props.onClick} className={bumpClass}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItems}</span>
        <span></span>
    </button>
}

export default HeaderCartButton;