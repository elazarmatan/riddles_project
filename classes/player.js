export default class Player{
    constructor(name){
        this.name = name
        this.time = []
    }
    recordTime(start,end){
        const ti = end - start
        this.time.push(ti)
    }
    showStats(){
        let result = 0
        for (const element of this.time) {
            result += element
        }
        console.log(`all time ${result / 1000} average ${result / this.time.length/ 1000}`)
    }
}
