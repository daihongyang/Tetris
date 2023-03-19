import { SquareGroup } from './SquareGroup'
import {IPoint} from './types'


//L
export class orangeRicky extends SquareGroup{
    constructor(_centerPoint:IPoint,_color:string){
        super([{x:-2,y:0},{x:-1,y:0},{x:0,y:0},{x:0,y:-1}],_centerPoint,_color)
    }
}

//reverse L
export class blueRicky extends SquareGroup{
    constructor(_centerPoint:IPoint,_color:string){
        super([{x:0,y:0},{x:0,y:-1},{x:1,y:0},{x:2,y:0}],_centerPoint,_color)
    }
}

// Z
export class clevelandZ extends SquareGroup{
    constructor(_centerPoint:IPoint,_color:string){
        super([{x:-1,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1}],_centerPoint,_color)
    }
    rotate(){
        super.rotate()
        this.isClockwise = ! this.isClockwise
    }
}

// reverse Z
export class rhodeIslandZ extends SquareGroup{
    constructor(_centerPoint:IPoint,_color:string){
        super([{x:-1,y:0},{x:0,y:0},{x:0,y:-1},{x:1,y:-1}],_centerPoint,_color)
    }
    rotate(){
        super.rotate()
        this.isClockwise = ! this.isClockwise
    }
}

//——
export class hero extends SquareGroup{
    constructor(_centerPoint:IPoint,_color:string){
        super([{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0}],_centerPoint,_color)
    }
    rotate(){
        super.rotate()
        this.isClockwise = ! this.isClockwise
    }
}

//T
export class teewee extends SquareGroup{
    constructor(_centerPoint:IPoint,_color:string){
        super([{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:0,y:-1}],_centerPoint,_color)
    }
}

//田
export class smashboy extends SquareGroup{
    constructor(_centerPoint:IPoint,_color:string){
        super([{x:0,y:0},{x:0,y:-1},{x:1,y:0},{x:1,y:-1}],_centerPoint,_color)
    }
    afterRotatePoint(){
        return this.shape
    }
}



const color:string[] = ['red','blue','yellow','green','purple']
export const shapes = [orangeRicky,blueRicky,clevelandZ,rhodeIslandZ,hero,teewee,smashboy]

function getRandom(min:number,max:number){
    return Math.floor(Math.random()*(max-min)+min)
}
export function createShapes(centerPoint:IPoint){
    let index = getRandom(0,color.length)
    const randomColor = color[index]
    index = getRandom(0,shapes.length)
    const randomShapes = shapes[index]

    return new randomShapes(centerPoint,randomColor) 
}


