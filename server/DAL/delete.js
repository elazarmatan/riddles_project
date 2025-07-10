import {writeFile} from 'node:fs/promises'


export async function Delete(path, idx, dataExist) {
    dataExist.splice(idx, 1)
    await writeFile(path, JSON.stringify(dataExist, null, 2))
    console.log('deleted successfully!!!!')
}


