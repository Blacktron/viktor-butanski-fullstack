import notes from "../routes/notes.js";

let id = 1;
const notesDb = [
    {
        id: 1,
        name: 'First note',
        content: 'Content for first note'
    },
    {
        id: 2,
        name: 'Second note',
        content: 'Content for second note'
    },
    {
        id: 3,
        name: 'Third note',
        content: 'Content for third note'
    },
];

/**
 * Gets all currently existing notes.
 * @returns The list of all currently existing notes.
 */
export async function getAllNotes(){
    return notesDb;
}

/**
 * Searches for a note by given ID.
 * @param id
 * @returns null if note with the given ID was not found.
 * Otherwise, the function returns the note.
 */
export async function getNoteById(id) {
    for (const entry of notesDb) {
        if (entry.id === parseInt(id)) {
            return entry;
        }
    }

    return null;
}

/**
 * Creates a new note
 * @param {string} name The name of the note.
 * @param {string} content The contents of the note.
 * @returns {Promise<void>}
 */
export async function createNote(name, content) {
    notesDb.push({
        id: id,
        name: name,
        content: content
    });

    id++;
}

/**
 * Updates a note with new name and contents if such are provided.
 * @param {string} id The ID by which to search for a note.
 * @param {string} name The new name of the note.
 * @param {string} content The new contents of the note.
 * @returns {Promise<boolean>}
 */
export async function updateNoteById(id, name, content) {
    let isNoteUpdated = false;

    for (const entry of notesDb) {
        if (entry.id === parseInt(id)) {
            isNoteUpdated = true;

            if (name) {
                entry.name = name;
            }

            if (content) {
                entry.content = content;
            }
        }
    }

    return isNoteUpdated;
}

/**
 * Deletes a note by ID.
 * @param {string} id The note with the ID which to delete.
 * @returns {Promise<boolean>} true if note with such ID was
 * found and deleted, false otherwise.
 */
export async function deleteNoteById(id) {
    let indexToDelete = -1;

    for (let i = 0; i < notesDb.length; i++) {
        if (notesDb[i].id === parseInt(id)) {
            indexToDelete = i;
            break;
        }
    }

    if (indexToDelete >= 0) {
        notesDb.splice(indexToDelete, 1);
    }

    return indexToDelete >= 0 ? true : false;
}