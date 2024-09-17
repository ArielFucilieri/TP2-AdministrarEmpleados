/* eslint-disable react/prop-types */

import styles from '../styles/Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
