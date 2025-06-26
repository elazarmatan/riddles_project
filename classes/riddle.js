import readline from 'readline-sync';
export default class riddle{

constructor({id,name,taskDescription,correctAnswer}){
    this.id =id
    this.name = name
    this.taskDescription = taskDescription
    this.correctAnswer = correctAnswer
}

ask(){
    console.log(`id : ${this.id}`)
    console.log(`question : ${this.taskDescription}`)
    let flag = true
    while(flag){
        const res = readline.question();
        if(res === this.correctAnswer){
            console.log('correct answer')
            flag = false
        }
        else{
            console.log('you fail')
        }
    }
}
}
