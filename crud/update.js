import {writeFile} from 'node:fs/promises'


export function update(path,dataExists,updateData) {
    
    const answer = updateData(dataExists)
    let finishData = JSON.stringify(answer, null, 2)
    writeFile(path, finishData, (err) => {
        if (err) {
            console.log(err.message)
        }
        else {
            console.log('done')
        }
    })
}