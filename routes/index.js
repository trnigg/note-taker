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
        return res.status(500).json({ error : 'Internal Server Error' });
    });
});


module.exports = notesApi;
