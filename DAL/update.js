import {writeFile} from 'node:fs/promises'


export async function update(path,dataExists,updateData,playerTime,playername) {
    
    const answer = updateData(dataExists,playerTime,playername)
    let finishData = JSON.stringify(answer, null, 2)
    try{
        await writeFile(path, finishData)
    }catch(err){
        console.error('elazar',err)
    }
}