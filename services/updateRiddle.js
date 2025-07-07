import readline from 'readline-sync';


export function updateRiddle(arrObj){
    const id = readline.question('what the id of riddle do you want to change: ')
    const property = readline.question('what do you want to change: ')
    const change = readline.question('what the change do yo want to push: ')
    const idx = arrObj.findIndex(obj => obj.id === parseInt(id, 10))
    arrObj[idx][property] = change
    return arrObj
}

