import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'
import CartItem from './CartItem'

const Cart = props => {
    const cartCtx = useContext(CartContext)

    const sendOrder = async () => {
        let orderedMeals = {}
        cartCtx.items.map((item,i) => {
            orderedMeals[i]={
                name: item.name,
                price: item.price,
                amount: item.amount,
            }
        })
        const response = await fetch('https://react-test-d74cd-default-rtdb.firebaseio.com/orders.json',{
            method: 'POST',
            header: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderedMeals)
        })
    }

    const removeItemHandler = (id) => {
        cartCtx.removeItem(id)
    }
    const addItemHandler = item => {
        cartCtx.addItem(item, 'cart')
    }
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map(item => <CartItem key={item.id} price={item.price} name={item.name} amount={item.amount} onRemove={removeItemHandler.bind(null, item.id)} onAdd={addItemHandler.bind(null, item)} />)}</ul>
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${cartCtx.totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
                {cartCtx.items.length > 0 && <button onClick={sendOrder} className={classes.button}>Orders</button>}
            </div>
        </Modal>
    )
}

export default Cart