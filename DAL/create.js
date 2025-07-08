import { writeFile } from 'node:fs/promises'



export async function create(path, dataExists, dataReceived,player) {
    
    const id = (dataExists[dataExists.length-1]).id
    const answer = dataReceived(id,player)
    dataExists.push(answer)
    let finishData = JSON.stringify(dataExists,null,2)
    await writeFile(path, finishData)
}

