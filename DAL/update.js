import {writeFile} from 'node:fs/promises'

export async function update(path,updateData,dataExist,id,property) {
    dataExist[id][property] = updateData     
    try{
        await writeFile(path, JSON.stringify(dataExist,null,2))
        console.log('Updated successfully!!!!')
    }catch(err){
        console.error('elazar',err)
    }
}