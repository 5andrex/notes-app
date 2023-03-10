const fs = require('fs');
const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes');


// Functionalities
// Add note
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
})

// Remove note
yargs.command({
  command: 'remove',
  describe: 'Remove note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
})

// List note
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler() {
    notes.listNote();
  }
})

// Read note
yargs.command({
  command: 'read',
  describe:  'Read note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})

// Clear note list
yargs.command({
  command: 'clear',
  describe: 'Clear note list',
  builder: {

  },
  handler: () => {
    notes.clearNoteList();
  }
})

yargs.parse();