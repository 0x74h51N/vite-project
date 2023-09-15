import React from "react";
import "../App.css";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  imageSrc: string;
  altText: string;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, imageSrc, altText }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <img src={imageSrc} alt={altText} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
