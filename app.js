const fs = require('fs')
// const sum = require('./data')
const notes = require('./notes')

// const chalk = require('chalk')
// import chalk from 'chalk';
const yargs = require('yargs')
const validator = require('validator')
// fs.writeFileSync('notes.txt',"Heloooo")
// fs.appendFileSync( 'notes.txt', "Kasaby")

// console.log(fs.readFileSync('notes.txt').toString());
// console.log(sum(5,5));

// console.log(validator.isEmail('mohamed@gmail.com'));
// // console.log(chalk.blue('Done'));n
// // log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
// // console.log(yargs.argv);

yargs.command({
    command:'add',
    builder:{
        title:{
            describe:'this title in add command',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'this body in add command',
            demandOption: true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.addNote(argv.title,argv.body)
    }
})


yargs.command({
    command:'delete',
    builder:{
        title:{
            describe:'this title in delete command',
            demandOption: true,
            type:'string'
        },
    },
    handler:(argv)=>{
        notes.deleteNotes(argv.title)
        // console.log('Delete');
    }
})

yargs.command({
    command:'read',
    builder:{
        title:{
            describe:'this title in read command',
            demandOption: true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.readNotes(argv.title)
    }
})

yargs.command({
    command:'list',
    handler:()=>{
        notes.listNotes()
    }
})

yargs.command({
    command:'*',
    handler:()=>{
        console.log('Sorry this is not a command');
    }
})

yargs.parse()

/////////Task/////////////
// add Student ID(Num) NAme(String) Grade(Array) (Comment(String))
// Total Automatic in file
// (yargs.argv) this is best or (yargs.pars)
// Read and Delete by ID 
// List by All
