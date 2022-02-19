import styles from '../Modal/Modal.module.css';
import { Component,useEffect } from 'react';
import PropTypes from 'prop-types';


const Modal =(props)=>{
    useEffect(()=>{
        document.addEventListener("keydown", close)
        return ()=>        document.removeEventListener("keydown", close)
    },[])


    const close = (e)=> {
        if(e.code === "Escape") {
            return props.handleClose();
        }
        if(e.target === e.currentTarget) {
            return props.handleClose()
        }
    }
    
    return (
    <div className={styles.overlay} onClick={close}>
      <div className={styles.content}>
        <img src={props.image} alt="" className={styles.img}/>
      </div>
    </div>
    )};
export default Modal;


Modal.propTypes={
    image:PropTypes.string.isRequired,
    handleClose:PropTypes.func.isRequired
  }