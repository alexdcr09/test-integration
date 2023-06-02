import React, {useState} from 'react';
import useNoteStore from '../store/store';
import NoteEditor from './NoteEditor';

const NoteList = () => {
    const { notes } = useNoteStore();
    const [selectedNote, setSelectedNote] = useState(null);
    const [editingNote, setEditingNote] = useState(null);

    const handleNoteClick = (note) => {
        setSelectedNote(note);
    };

    const getNoteBackgroundColor = (note) => {
        if (note.note < 8) {
            return 'red';
        } else if (note.note < 10) {
            return 'orange';
        } else if (note.note < 13) {
            return 'yellow';
        } else {
            return 'green';
        }
    };

    const handleEditNote = (note) => {
        setEditingNote(note);
    };

    const handleSaveNote = (note) => {
        setEditingNote(null);
    };

    const handleCancelEdit = () => {
        setEditingNote(null);
    };

    return (
        <div>
            <h2>Liste des notes :</h2>
            {notes.map((note) => (
                <div
                    key={note.titre}
                    style={{ backgroundColor: getNoteBackgroundColor(note) }}
                    onClick={() => handleNoteClick(note)}
                >
                    <h3>{note.titre}</h3>
                    <h3>{note.note}</h3>
                    <p>Date de création : {new Date(note.dateCreation).toLocaleString()}</p>
                    <p>Extrait du commentaire : {note.commentaire.slice(0, 50)}</p>
                    <button onClick={() => handleEditNote(note)}>Modifier</button>
                </div>
            ))}
            {notes.map((note, index) => (
                <div key={index} className="note">
                    {editingNote === note ? (
                        <NoteEditor
                            note={editingNote}
                            onSave={handleSaveNote}
                            onCancel={handleCancelEdit}
                        />
                    ) : (
                        <div onClick={() => handleEditNote(note)}>
                            <h3>{note.title}</h3>
                            <p>{note.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default NoteList;
