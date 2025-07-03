import { writeFile } from 'node:fs/promises'



export function create(path, dataExists, dataReceived) {
    let newarr
    try {
        ExistsArr = JSON.parse(dataExists)
    } catch (err) {
        console.log("a", err.message)
        return
    }
    const id = (ExistsArr[ExistsArr.length-1]).id
    const answer = dataReceived(id)
    ExistsArr.push(answer)
    let finishData = JSON.stringify(ExistsArr,null,2)
    writeFile(path, finishData, (err) => {
        if (err) {
            console.log(err.message)
        }
        else {
            console.log('done')
        }
    })
}

