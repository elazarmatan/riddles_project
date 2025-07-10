import readline from 'readline-sync';

export async function deleteRiddle(){
    const id = readline.question('what the id of riddle do you want to delete: ')
    await fetch(`https://riddles-project.onrender.com/riddle/delete/${id}`,{
        method:'DELETE'
    })
}