const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
                title: {
                        description: "Note title",
                        demandOption: true,
                        type: 'string'
                },
                body: {
                        description: "Note description",
                        demandOption: true,
                        type: 'string'
                }
        },
        handler (argv) {
                notes.addNotes(argv.title, argv.body)
        }
})

yargs.command({
        command: 'remove',
        describe: 'Remove a note',
        builder: {
                title: {
                        description: "Note title",
                        demandOption: true,
                        type: 'string'
                }
        },
        handler (argv) {
                notes.removeNote(argv.title)
        }
})

yargs.command({
        command: 'list',
        describe: 'List all notes',
        handler (argv) {
                notes.listNotes()
        }
})

yargs.command({
        command: 'read',
        describe: 'Reading a note',
        builder: {
                title: {
                        description: "Note title",
                        demandOption: true,
                        type: 'string'
                }
        },
        handler (argv) {
                notes.readNotes(argv.title)
        }
})

yargs.parse()
