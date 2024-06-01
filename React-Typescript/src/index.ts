let id: number = 5
let str: string = "Hi"

let arr : number[] = [1,2,3,4]

enum Direction {
    Up,
    Down,
    Left,
    Right
}


interface User {
    id: number,
    name: string
}


const user: User = {
    id: 1,
    name: "John"
}


let cid: any = 1
let cusId = cid as number



interface PersonInterface {
    pid: number
    pname: string
    print(): void
}


class Person implements PersonInterface{
    pid: number
    pname: string

    constructor(pid: number, pname: string){
        this.pid = pid;
        this.pname = pname;
    }

    print() {
        console.log(this.pid, this.pname)
    }

}


const John = new Person(1, 'John')





function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['a','b','c'])















