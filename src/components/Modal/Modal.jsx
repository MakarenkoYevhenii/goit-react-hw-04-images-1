import styles from '../Modal/Modal.module.css';
import { memo,useEffect } from 'react';
import PropTypes from 'prop-types';
import { Children } from 'react/cjs/react.production.min';


const Modal =(props)=>{
    useEffect(()=>{
        document.addEventListener("keydown", close)
        return ()=>document.removeEventListener("keydown", close)
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
        {props.children}
      </div>
    </div>
    )};
export default memo(Modal);


Modal.propTypes={
    handleClose:PropTypes.func.isRequired
  }