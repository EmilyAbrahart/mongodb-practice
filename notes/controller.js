const router = require('express').Router();
const Note = require('./model');


// Get note by ID
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const note = await (await Note.findById(id)).exec();
    res.status(200).json(note);
});

// Get all notes
router.get('/', async (req, res) => {
    const notes = await Note.find({}).exec();
    res.status(200).json(notes);
});

// Post a note
router.post('/', async (req, res) => {
    const noteToBeAdded = req.body;
    const note = await Note.create(noteToBeAdded);
    res.status(201).json(note.toJSON());
});

// Update a note
router.put('/:id', async (req, res) => {
    const noteId = req.params.id;
    const noteToUpdate = req.body.note;

    const updatedNote = await Note.findByIdAndUpdate(noteId, noteToUpdate, {new: true});
    res.status(201).json(updatedNote.toJSON());
});

module.exports = router;