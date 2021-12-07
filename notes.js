const fs = require('fs')

// const addNote = (title , body)=>{
//     const notes = loadNote()
//     notes.push(
//         {
//             title,
//             body
//         }
//     )
//     saveNote(notes)
// }
const addNote = (title , body)=>{
    const notes = loadNote()
    const duplicateTitle = notes.filter((note)=>{
        return note.title === title
    })
    if(duplicateTitle.length === 0 ){
        notes.push(
            {
                title,
                body
            }
        )
        saveNote(notes)
        console.log("Save Successfully");
    }else{
        console.log("Error duplicate title ");
    }
}
const deleteNotes = (title)=>{
    const notes = loadNote()
    const notesToKeep = notes.filter((note)=>{
        return note.title !== title 
    })
    const titleInNotes = notes.filter((note)=>{
        return note.title === title 
    })
    if(titleInNotes.length === 0){
        console.log("Sorry, This title not found");
    }else{
        saveNote(notesToKeep)
        console.log("Delete Successfully");
    }
}

const readNotes = (title)=>{
    const notes = loadNote()
    const note = notes.find((note)=>{
        return note.title === title
    })

    if(note){ 
        console.log(note.body)
    }else{
        console.log("Sorry, This title not found");
    }
}

const listNotes = ()=>{
    const load = loadNote()
    load.forEach(element => {
        console.log(element);
    });
}

const loadNote = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch(e){
        return []
    }
}

const saveNote = (note)=>{
    const saveData = JSON.stringify(note)
    fs.writeFileSync('notes.json',saveData)
}



module.exports = {
    addNote,
    deleteNotes,
    readNotes,
    listNotes
}