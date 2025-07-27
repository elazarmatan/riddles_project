import {writeFile,readFile} from 'node:fs/promises'

export async function saveToken(token){
    try{
    await writeFile('./token.txt',token)
    }
    catch(err){
        console.error(err)
    }
}

export async function rescueToken(){
    try {
        const token = await readFile('./token.txt','utf-8') 
        return token
    } catch (error) {
        console.error(error)
    }
}