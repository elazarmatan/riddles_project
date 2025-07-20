import readline from 'readline-sync';


export async function updateRiddle(){
    const id = readline.question('what the id of riddle do you want to change: ')
    const property = readline.question('what do you want to change: ')
    const change = readline.question('what the change do yo want to push: ')
    await fetch(`http://localHost:2030/riddle/update/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"changes":change,"property":property})
    })
}

