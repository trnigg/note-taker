# Note Taker
>(```note-taker``` - Module 11 Challenge) 

A simple web-app to take and store personal notes that persist upon reload and across devices.

## Description
- This application allows you to enter and save notes for yourself (or other lucky people with access to the URL) that persist upon closing, reloading, and across devices!
- It is written in JS using the [Node.js](https://nodejs.org/en) runtime environment, leveraging [Express v4.18.2](https://www.npmjs.com/package/express/v/4.18.2) for the web framework/server-functionality, and was deployed using [Heroku](https://heroku.com/).
    - Additionally, this app makes use of [uuid v9.0.1](https://www.npmjs.com/package/uuid/v/9.0.1) for the creation of and assignment of v4 **Universally Unique IDentifiers** (UUID) to objects in the database.

## Installation
- No installation is necessary, simply visit the deployed app at &rarr; [this link](https://my-first-note-taker-01a67cc2e65b.herokuapp.com/) &larr;.

## Usage
To use the application:
1. Follow the link above, and you will land on the homepage:  
![Screenshot showing a simple landing page with a 'Get Started' button in the center.](./public/assets/screenshots/landing-page.png)
2. Click 'Get Started', and you will be redirected to the [/notes](https://my-first-note-taker-01a67cc2e65b.herokuapp.com/notes) page. If not notes have been created yet, the page will look like this:  
![Screenshot showing page with two columns and fields where note information can be entered.](./public/assets/screenshots/getting-started.png)
    - If notes already exist, you will see them in the left-hand column; see screenshots below for reference.
3. To add a new note, type the title and text of your note in the respective 'Note Title' and 'Note Text' fields. A new button with a 'save icon' will appear in the top right:  
![Screenshot representing a note being entered, with an arrow to highlight the save button in the top-right.](./public/assets/screenshots/save-note.png)
4. Click the 'save icon' to save your note; it will now appear in the column on the left.
5. Click on an existing note to see the contents of it on the right-hand side:  
![Annotated screenshot depicting a saved note on the left being clicked and data being shown on the right.](./public/assets/screenshots/saved-note.png)
6. To add an additional note, click on the 'plus icon' in the top right and repeat Step 3 and 4.
7. To delete a note, click on the red 'trash-bin icon' next to the note you wish to delete.  
![Annotated screenshot with arrows pointing toward red trash-can symbols on the left column, next to save notes.](./public/assets/screenshots/delete-note.png)

## Tests 
- No tests have been written for this application.

## License / Credits
- This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit).
    - Please refer to the [license](./LICENSE) section in the repo for further information.  

- The entirety of the front-end consists of starter-code that was supplied as part of coursework.  

- Please see the [Description](#description) section for an overview of 3rd-party packages/modules used in this app.  

## Questions
- For any questions, issues or feedback, please reach out to me on GitHub at [trnigg](https://github.com/trnigg/).