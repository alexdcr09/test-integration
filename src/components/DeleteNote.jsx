import React, { useState } from 'react';
import useNoteStore from '../store/store';

const DeleteNote = ({ noteId, isConfirming, setIsConfirming }) => {
    const deleteNote = useNoteStore((state) => state.deleteNote);

    const handleDelete = () => {
        deleteNote(noteId);
        setIsConfirming(false);
    };

    const handleCancel = () => {
        setIsConfirming(false);
    };

    return (
        <div>
            {isConfirming && (
                <div>
                    <p>Êtes-vous sûr de vouloir supprimer cette note ?</p>
                    <button className="confirmBtn" onClick={handleDelete}>Confirmer</button>
                    <button onClick={handleCancel}>Annuler</button>
                </div>
            )}
        </div>
    );
};

export default DeleteNote;
