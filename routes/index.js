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
        .catch((err) => {
            //console log the error
            console.error(err);
            // return response status of 500 and a JSON object with key of 'error' and value of message matching 500 (Intern. Serv. Err)
            return res.status(500).json({ error : 'Internal Server Error' });
        });
});

module.exports = notesApi;
