import readline from 'readline-sync';

export function deleteRiddle(arrObj){
    const id = readline.question('what the id of riddle do you want to delete: ')
    const idx = arrObj.findIndex(obj => obj.id === parseInt(id, 10))
    arrObj.splice(idx,1)
    return arrObj
}