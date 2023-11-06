// File for API routing
const notesApi = require('express').Router();

// for promise-based file system:
const fs = require('fs').promises;
// for generating unique IDs: https://www.npmjs.com/package/uuid?activeTab=readme
const { v4: uuidv4 } = require('uuid');


// API GET route for notes
notesApi.get('/api/notes', (req, res) => {
    // read db.json
    fs.readFile('./db/db.json', 'utf-8')
        .then((data) => {
            // parse JSON data
            let notes = JSON.parse(data);
            // return JSON data
            return res.json(notes);
        })
        // error handling:
        .catch((err) => {
            //console log the error
            console.error(err);
            // return response status of 500 and a JSON object with key of 'error' and value of message matching 500 (Intern. Serv. Err)
            return res.status(500).json({ error : 'Internal Server Error' });
        });
});

// API POST route for notes
notesApi.post('/api/notes', (req, res) =>{
    // read db.json
    fs.readFile('./db/db.json', 'utf-8')
    .then((data) => {
        // parse JSON data
        let notes = JSON.parse(data);
        // create a new JSON note
        let newNote = {
            // create unique ID using uuid v4
            id : uuidv4(),
            // set title as request body title
            title : req.body.title,
            // set text as request body text
            text : req.body.text,
        };
        // add newNote to end of note array
        notes.push(newNote);
        // write the updated (stringified) array to the db.json file enconded as utf-8
        return fs.writeFile('./db/db.json', JSON.stringify(notes), 'utf-8')
        // return a response with the new item that was created (must wait for async writeFile)
        .then(() => {
            console.log(newNote);
            return res.json(newNote);
        });
    })
    // error handling:
    .catch((err) => {
        //console log the error
        console.error(err);
        // return response status of 500 and a JSON object with key of 'error' and value of message matching 500 (Intern. Serv. Err)
        return res.status(500).json({ error : "Internal Server Error" });
    });
});

notesApi.delete('/api/notes/:id', (req, res) => {
    // get ID from request
    const noteId = req.params.id;
    // read db.json
    fs.readFile('./db/db.json', 'utf-8')
    .then((data) => {
        // parse JSON data
        let notes = JSON.parse(data);
        // find index of note where note.id strictly matches id in req.params
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
        let noteIndex = notes.findIndex((note) => note.id === noteId)
        // if a matching index is found, splice it (remove it from array)
        if (noteIndex !== -1) { // -1 is returned if findIndex does not find a match
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
            notes.splice(noteIndex, 1); // noteIndex is the start and '1' is the deleteCount
            fs.writeFile('./db/db.json', JSON.stringify(notes), 'utf-8')
        // return a response with the new item that was created (must wait for async writeFile)
            .then(() => {
                console.log('Note successfully deleted.');
                return res.json({ message : "Note successfully deleted" });
            });
        } else {
            console.error(`Note ${noteId} not found.`, err);
            // Status 404 = 'Not Found'
            return res.status(404).json({ error : `Note ${noteId} not found.` });
        };
    })
    .catch((err) => {
        //console log the error
        console.error(err);
        // return response status of 500 and a JSON object with key of 'error' and value of message matching 500 (Intern. Serv. Err)
        return res.status(500).json({ error : 'Internal Server Error' });
    });
});

module.exports = notesApi;
