import { writeFile } from 'node:fs/promises'




export async function create(path, dataExists, dataReceived) {
    const answer = dataReceived
    dataExists.push(answer)
    let finishData = JSON.stringify(dataExists,null,2)
    try{
    await writeFile(path, finishData)
    console.log('cretad successfully!!!!')
    }
    catch(err){
        console.error(err)
    }
}

