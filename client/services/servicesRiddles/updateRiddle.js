import readline from 'readline-sync';


export async function updateRiddle(token) {
    const id = readline.question('what the id of riddle do you want to change: ')
    let property = ''
    let flag = true
    while (flag) {
        property = readline.question('what property do you want to change\n' +
            'name\ntaskDescription \n' +
            'correctAnswer\nhint \n' +
            'timeLimit\ndifficulty: \n'
        )
        if (property !== 'name' || property !== 'taskDescription' || property !== 'correctAnswer' || property !== 'hint ' || property !== 'timeLimit' || property !== 'difficulty') {
            flag = false
        }
    }
    const change = readline.question('what the change do yo want to push: ')
    const res = await fetch(`http://localhost:2030/riddle/update/${id}`, {
        method: 'PUT',
        headers: {
            'cookies':token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "changes": change, "property": property })
    })
    return res
}