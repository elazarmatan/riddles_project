import readline from 'readline-sync';

export async function deleteRiddle(token){
    const id = readline.question('what the id of riddle do you want to delete: ')
    await fetch(`http://localhost:2030/riddle/delete/${id}`,{
         headers: {
            'cookies':token,
        },
        method:'DELETE'
    })
}