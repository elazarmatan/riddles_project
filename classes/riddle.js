import readline from 'readline-sync';


export default class Riddle {
  constructor({ id, name, taskDescription, correctAnswer, difficulty, timeLimit }) {
    this.id = id;
    this.name = name;
    this.taskDescription = taskDescription;
    this.correctAnswer = correctAnswer;
    this.difficulty = difficulty;
    this.timeLimit = timeLimit; 
  }

  ask() {
    console.log(`Riddle: ${this.name}`);
    console.log(`${this.taskDescription}`);
    let flag = true;
    while (flag) {
      const res = readline.question('Answer: ');
      if (res === this.correctAnswer) {
        console.log('Correct!');
        flag = false;
      } else {
        console.log('Incorrect. Try again.');
      }
    }
  }
}
