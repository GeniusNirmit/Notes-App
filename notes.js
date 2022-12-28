const fs = require('fs')
const color = require('coloring')

const saveNotes = (notes) => {
        const dataJSON = JSON.stringify(notes)
        fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
        try {
                const dataBuffer = fs.readFileSync('notes.json')
                const dataJSON = dataBuffer.toString()
                return JSON.parse(dataJSON)
        }
        catch (e) {
                return []
        }
}

const addNotes = (title, body) => {
        const notes = loadNotes()
        const duplicates = notes.find((note) => note.title === title)
        if(!duplicates)
        {
                notes.push({
                        title: title,
                        body: body
                })
                saveNotes(notes)
                console.log(color.green("Note added successfully".bold))
        }
        else
                console.log(color.red("Title already present".bold))
}

const removeNote = (title) => {
        const notes = loadNotes()
        if(notes.findIndex(note => note.title === title) !== -1)
        {
                for(var i=0;i<notes.length;i++)
                {
                        if(notes[i].title === title)
                                notes.splice(i, 1)
                }
                saveNotes(notes)
                console.log(color.green("Note removed successfully".bold))
        }
        else
                console.log(color.red("Title not present".bold))
}

const listNotes = () => {
        const notes = loadNotes()
        console.log("Listing all Notes...")
        notes.forEach((note) => console.log(note.title))
}

const readNotes = (title) => {
        const notes = loadNotes()
        const noteDetails = notes.find((note) => note.title === title)
        if(noteDetails)
        {
                console.log(color.blue(noteDetails.title))
                console.log(color.yellow(noteDetails.body))
        }
        else
                console.log(color.red("No note found?"))
}

module.exports = {
        addNotes: addNotes,
        removeNote: removeNote,
        listNotes: listNotes,
        readNotes: readNotes
}
