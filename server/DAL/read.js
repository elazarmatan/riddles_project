import {readFile} from 'node:fs/promises'


export async function read(path) {
    try{
    const res = await readFile(path, 'utf8')
    return JSON.parse(res)
    }
    catch(err){
        console.error(err)
    }
}