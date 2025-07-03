import readline from 'readline-sync';

export function createRiddle(lastId) {
    let newRiddle = {id:lastId + 1}
    const name = readline.question('what name the riddle: ')
    newRiddle.name = name
    const taskDescription = readline.question('what the riddle: ')
    newRiddle.taskDescription = taskDescription
    const correctAnswer = readline.question('what the correct answer: ')
    newRiddle.correctAnswer = correctAnswer
    const hint = readline.question('give me hint: ')
    newRiddle.hint = hint
    let difficulty
    let timeLimit
    let flag = true
    while (flag) {
        difficulty = readline.question('what the difficulty: ')

        switch (difficulty) {
            case "hard":
                timeLimit = 20000
                newRiddle.timeLimit = timeLimit
                newRiddle.difficulty = difficulty
                flag = false
                break
            case "easy":
                timeLimit = 5000
                 newRiddle.timeLimit = timeLimit
                newRiddle.difficulty = difficulty
                flag = false
                break
            case "medium":
                timeLimit =10000
                 newRiddle.timeLimit = timeLimit
                newRiddle.difficulty = difficulty
                flag = false
                break
            default:
                console.log('is not a difficulty')
                break;
        }

    }
    return newRiddle
}