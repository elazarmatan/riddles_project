import readline from 'readline-sync';


export default class Riddle {
  constructor({ id, name, taskDescription, correctAnswer, difficulty, timeLimit ,hint}) {
    this.id = id;
    this.name = name;
    this.taskDescription = taskDescription;
    this.correctAnswer = correctAnswer;
    this.difficulty = difficulty;
    this.timeLimit = timeLimit; 
    this.hint = hint
  }



// This method displays the riddle and repeatedly asks the player for an answer until it is correct.
// - If the player types 'v', a hint is shown and 5 seconds are added to their time.
// - Returns the total hint penalty time in milliseconds.

  ask() {
    console.log(`Riddle: ${this.name}`);
    console.log(`${this.taskDescription}`);
    let flag = true;
    let addhin = 0
    while (flag) {
    const hint = readline.question('if you want hint press v but will add you 5 seconds: ');
    if(hint === "v"){
        console.log(`the hint: ${this.hint}`)
        addhin += 5000
    }
      const res = readline.question('Answer: ');
      if (res === this.correctAnswer) {
        console.log('Correct!');
        flag = false;
      } else {
        console.log('Incorrect. Try again.');
      }
    }
    
    
    return  addhin
  }
}
