import CartContext from './cart-context'
import { useReducer } from 'react'

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
   
    if(action.type === "ADD"){
        const checkSource = action.source === 'form'
        console.log(action.source , checkSource)
        const updatedTotalAmount = state.totalAmount + action.item.price * (checkSource ? action.item.amount : 1)
        
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItems
        if(existingCartItem){
            let updatedItem;
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + (checkSource ? action.item.amount : 1)
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
                        
            updatedItems = state.items.concat(action.item);
        }
        
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }else if(action.type === "REMOVE"){
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id)
        const exisingItem = state.items[existingCartItemIndex]
        const updatedTotalAmount = state.totalAmount - exisingItem.price 
        console.log(existingCartItemIndex)
        let updatedItems
        if(exisingItem.amount === 1){
            updatedItems = state.items.filter((item) => item.id !== action.id )
        } else {
            const updatedItem = {...exisingItem, amount: exisingItem.amount - 1}
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState
}
const CartProvider = props => {

    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState)
    const addItemToCartHandler = (item,source) => {
        dispatchCartAction({
            type: 'ADD',
            item:item,
            source:source
        })
    }
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type: 'REMOVE',
            id: id
            
        })
    }
    
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
        
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;