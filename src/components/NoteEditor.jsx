import React, { useState } from 'react';
import DeleteNote from "./DeleteNote";
import useNoteStore from '../store/store';

const NoteEditor = ({ note, onSave, onCancel }) => {
    const { updateNote } = useNoteStore();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState(note.commentaire);
    const [isConfirming, setIsConfirming] = useState(false);


    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleConfirm = () => {
        console.log('confirm');
        setIsConfirming(true);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleUpdateNote = (event) => {
        console.log('update');
        event.preventDefault();

        const updatedNote = {
            ...note,
            title,
            content,
        };

        onSave(updatedNote);
    };

    const handleCancel = () => {
        console.log('cancel');
        onCancel();
    };

    const handleSaveNote = () => {
        console.log('save');

        updateNote({ ...note, titre: title, commentaire: content });
    };

    return (
        <div>
            <h2>Modifier la note</h2>
            <form onSubmit={handleUpdateNote}>
                <label>
                    Titre:
                    <input
                        type="text"
                        name="titre"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </label>
                <br />
                <label>
                    Contenu:
                    <textarea
                        name="contenu"
                        value={content}
                        onChange={handleContentChange}
                    />
                </label>
                <br />
                <button onClick={handleSaveNote} type="submit">Enregistrer</button>
                <button onClick={handleCancel} type="button">Annuler</button>
                <button className="deleteBtn" onClick={handleConfirm} type="button">Supprimer</button>
                <DeleteNote isConfirming={isConfirming} setIsConfirming={setIsConfirming} />
            </form>
        </div>
    );
};

export default NoteEditor;
