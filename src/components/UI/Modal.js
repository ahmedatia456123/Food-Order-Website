import {Fragment} from 'react'
import ReactDom from 'react-dom'
import classes from './Modal.module.css'
export const Backdrop = props => {
    return <div onClick={props.onClose} className={classes.backdrop} />
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal = props =>{
    return <Fragment>
        {ReactDom.createPortal(<Backdrop onClose={props.onClose} />,document.getElementById('overLayes'))}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('overLayes'))}
    </Fragment>
}
export default Modal