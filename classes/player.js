export default class Player{
    constructor(name){
        this.name = name
        this.time = []
    }
    recordTime(time){
        this.time.push(time)
    }
    showStats(){
        let result = 0
        for (const element of this.time) {
            result += element
        }
        console.log(`all time ${(result / 1000).toFixed(3)} average ${(result / this.time.length/ 1000).toFixed(3)}`)
    }
}
