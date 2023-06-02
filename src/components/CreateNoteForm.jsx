import React, { useState } from 'react';
import useNoteStore from '../store/store';
import NoteList from './NoteList';
import {format} from "date-fns";

const CreateNoteForm = () => {
    const [titre, setTitre] = useState('');
    const [note, setNote] = useState(0);
    const [commentaire, setCommentaire] = useState('');
    const { notes, addNote } = useNoteStore();

    const handleCreateNote = (event) => {
        event.preventDefault();

        const nouvelleNote = {
            titre: titre,
            note: Number(note),
            commentaire: commentaire,
            dateCreation: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
        };

        addNote(nouvelleNote);

        setTitre('');
        setNote(0);
        setCommentaire('');
    };

    return (
        <div>
            <form onSubmit={handleCreateNote}>
                <label>
                    Titre:
                    <input
                        type="text"
                        value={titre}
                        onChange={(e) => setTitre(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Note:
                    <input
                        type="number"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Commentaire:
                    <textarea
                        value={commentaire}
                        onChange={(e) => setCommentaire(e.target.value)}
                    />
                </label>
                <br />
                <button className="createBtn" type="submit">Créer</button>
            </form>

            <h2>Notes existantes :</h2>
            <NoteList notes={notes} />
        </div>
    );
};

export default CreateNoteForm;
