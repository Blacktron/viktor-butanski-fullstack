import express from 'express';

import {
    getAllNotes,
    getNoteById,
    createNote,
    updateNoteById,
    deleteNoteById
} from "../controllers/notes.js";

const router = express.Router();

router.get('/notes', async (req, res) => {
    res.send(await getAllNotes());
});

router.get('/notes/:id', async (req, res) => {
    res.send(await getNoteById(req.params.id));
});

router.post('/notes', async (req, res) => {
    await createNote(req.body.name, req.body.content);
    res.statusCode = 201;
    res.json({
        status: 'Note created successfully!'
    });
});

router.put('/notes/:id', async (req, res) => {
    let isNoteUpdate = await updateNoteById(req.params.id, req.body.name, req.body.content);
    res.statusCode = 201;
    res.json({
        'status': isNoteUpdate ? 'Note updated successfully' : `Note with ID ${req.params.id} was not found`
    });
});

router.delete('/notes/:id', async (req, res) => {
    let isDeleted = await deleteNoteById(req.params.id);
    res.statusCode = 200;
    res.json({
        'status': isDeleted ? 'Note deleted successfully' : `Note with ID ${req.params.id} was not found`
    });
})

export default router;