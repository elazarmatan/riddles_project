export default class Player{
    constructor(name){
        this.name = name
        this.time = []
    }
    recordTime(time){
        this.time.push(time)
    }
    showStats(){
        let allTime = 0
        for (const element of this.time) {
            allTime += element
        }
        console.log(`stats of player ${this.name}: all time ${(allTime / 1000).toFixed(3)} average ${(allTime / this.time.length/ 1000).toFixed(3)}`)
    }
    getAlltime(){
        
        let allTime = 0
        for (const element of this.time) {
            allTime += element
        }
        return allTime
    }
    ResetArray(){
        this.time = []
    }
}
