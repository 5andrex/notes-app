const fs = require('fs');
const chalk = require('chalk');


// addNote
const addNote = (title, body) => {
  const notes = loadNotes();

  // check if note already exists
  const duplicateNote = notes.find((note) => note.title === title);

  if (duplicateNote) {
    console.log(chalk.red.inverse('Note already taken'))
  } else {
    notes.push({
      title: title,
      body: body
    })
    saveNote(notes);
  console.log(chalk.green.inverse('Note added!'));
  } 
}

// removeNote
const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'))
  } else {
    console.log(chalk.red.inverse('No note found'))
  }

  saveNote(notesToKeep);
}

// listNote
const listNote = () => {
  const notes = loadNotes();

  if(notes.length > 0) {
    console.log(chalk.cyan.inverse('Your Notes:'));
    notes.forEach((note) => console.log(note.title))
  } else {
    console.log(chalk.cyan.inverse('Your Notes:'));
    console.log('<-- You have no notes -->')
  } 
}

// readNote
const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => note.title === title);

  if(!noteToRead) {
    console.log(chalk.red.inverse('No note found!'))
  } else {
    console.log(chalk.cyan.inverse(noteToRead.title));
    console.log(chalk.bold(noteToRead.body));
  }

}

// clearNoteList
const clearNoteList = () => {
  const notes = loadNotes();
  while (notes.length > 0) {
    notes.pop();
  }
  saveNote(notes);
}


// saveNote()
const saveNote = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}


// loadNotes()
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
  clearNoteList: clearNoteList
}
