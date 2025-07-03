import readline from 'readline-sync';



export async function menu(){
    console.log('WELCOME TO RIDDLES')
    const name = readline.question('what your name')

    console.log('menu\n'+
        '1.new game\n'+
        '2.create new readle\n'+
        '3.')
}