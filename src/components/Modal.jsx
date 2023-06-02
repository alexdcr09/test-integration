import React, { useState } from 'react';
import DeleteNote from "./DeleteNote";

const Modal = ({ onClose }) => {
    const [selectedNote, setSelectedNote] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const handleOutsideClick = (event) => {
        if (event.target === event.currentTarget) {
            // L'événement de clic a été déclenché à l'extérieur de la modale
            onClose();
        }
    };

    return (
        <div className="modal-container" onClick={handleOutsideClick}>
            <div className="modal">
                {showModal && (
                    <div className="modal">
                        <h3>{selectedNote.title}</h3>
                        <p>Creation Date: {selectedNote.dateCreation}</p>
                        <p>Comment: {selectedNote.comment}</p>
                        <DeleteNote />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
