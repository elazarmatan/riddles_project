import { writeFile } from 'node:fs/promises'
import readline from 'readline-sync';
import {read} from './r1.js'

export function create(data){
    let newarr
    try{
    newarr = JSON.parse(data)
    }catch(err){
        console.log("a",err.message)
        return
    }
    const answer = readline.question('what the data: ');
        let conans
        try{
        conans = JSON.parse(answer)
        }catch(err){
        console.log("b",err.message)
        return;
        }
        newarr.push(conans)
        let finishAnswer = JSON.stringify(newarr)
    writeFile('./riddle.txt',finishAnswer,(err)=> {
        if(err){
            console.log(err.message)
        }
        else{
            console.log('done')
        }
    })
}

