import readline from 'readline-sync';





export async function createLevel() {
    let flag = true
    while (flag) {
        let diffic = readline.question('Choose difficulty: easy / medium / hard: ');
        if (diffic === "easy" || diffic === "medium" || diffic === "hard") {
            const difarr = await fetch(`http://localhost:2030/riddle/getByLevel/${diffic}`)
            return await difarr.json()
        }
    }

}