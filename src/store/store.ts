import create from 'zustand';

type Note = {
    id: number;
    titre: string;
    note: string;
    commentaire: string;
    dateCreation: Date;
};

type NoteStore = {
    notes: Note[];
    selectedNoteId: number | null;
    addNote: (note: Note) => void;
    deleteNote: (id: number) => void;
    selectNote: (id: number) => void;
    updateNote: (updatedNote: Note) => void;
};

const useNoteStore = create<NoteStore>((set) => ({
    notes: [],
    addNote: (note) =>
        set((state) => ({
            notes: [...state.notes, note],
        })),
    deleteNote: (id) =>
        set((state) => ({
            notes: state.notes.filter((note) => note.id !== id),
        })),
    updateNote: (updatedNote) =>
        set((state) => ({
            notes: state.notes.map((note) =>
                note.id === updatedNote.id ? { ...note, ...updatedNote } : note
            ),
        })),
    selectNote: (id) =>
        set(() => ({
            selectedNoteId: id,
        })),
}));

export default useNoteStore;
