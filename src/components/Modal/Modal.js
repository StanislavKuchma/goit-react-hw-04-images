import React, { useEffect } from "react";
import s from './Modal.module.css'

const Modal = ({ onClose, image }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)
  
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  });
 
const handleKeydown = e => {
    if (e.code === 'Escape') {
      onClose()
    }
  }
const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }
  return  <div
      className={s.Overlay}
      onClick={handleBackdropClick}>
      <div className={s.Modal}>
          <img src={image} alt="" />
      </div>
  </div>
}

export default Modal;