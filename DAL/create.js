import { writeFile } from 'node:fs/promises'



export function create(path, dataExists, dataReceived) {
    
    const id = (dataExists[dataExists.length-1]).id
    const answer = dataReceived(id)
    dataExists.push(answer)
    let finishData = JSON.stringify(dataExists,null,2)
    writeFile(path, finishData)
}

