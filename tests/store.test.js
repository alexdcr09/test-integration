import { test, expect, beforeEach } from 'vitest';
import useNoteStore from "../src/store/store";

beforeEach(() => {
    useNoteStore.setState({
        notes: [],
        selectedNoteId: null,
    });
});

test('should add a note to the store', () => {

    expect(useNoteStore.getState().notes).toHaveLength(0);

    useNoteStore.getState().addNote({
        id: 1,
        titre: 'Ma note',
        note: '8',
        commentaire: 'Mon commentaire',
        dateCreation: new Date(),
    });

    expect(useNoteStore.getState().notes).toHaveLength(1);
    expect(useNoteStore.getState().notes[0].titre).toBe('Ma note');
    expect(useNoteStore.getState().notes[0].note).toBe('8');
    expect(useNoteStore.getState().notes[0].commentaire).toBe('Mon commentaire');
});

test('should delete a note from the store', () => {

    useNoteStore.getState().addNote({
        id: 1,
        titre: 'Ma note',
        note: '8',
        commentaire: 'Mon commentaire',
        dateCreation: new Date(),
    });

    expect(useNoteStore.getState().notes).toHaveLength(1);
    useNoteStore.getState().deleteNote(1);
    expect(useNoteStore.getState().notes).toHaveLength(0);
});

test('should update a note in the store', () => {

    const initialNote = {
        id: 1,
        titre: 'Ma note',
        note: '8',
        commentaire: 'Mon commentaire',
        dateCreation: new Date(),
    };

    useNoteStore.getState().addNote(initialNote);

    const addedNote = useNoteStore.getState().notes[0];
    const updatedNote = {
        ...addedNote,
        titre: 'Nouveau titre',
        note: '9',
        commentaire: 'Nouveau commentaire',
    };

    useNoteStore.getState().updateNote(updatedNote);
    const updatedNoteInStore = useNoteStore.getState().notes[0];
    expect(updatedNoteInStore.titre).toBe('Nouveau titre');
    expect(updatedNoteInStore.note).toBe('9');
    expect(updatedNoteInStore.commentaire).toBe('Nouveau commentaire');
});

test('should select a note in the store', () => {
    const note = {
        id: 1,
        titre: 'Ma note',
        note: '8',
        commentaire: 'Mon commentaire',
        dateCreation: new Date(),
    };

    useNoteStore.getState().addNote(note);

    expect(useNoteStore.getState().selectedNoteId).toBe(null);

    useNoteStore.getState().selectNote(note.id);

    expect(useNoteStore.getState().selectedNoteId).toBe(note.id);
});