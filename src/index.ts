import { SquarePageViewer } from "./core/view/SquarePageViewer";
import $ from 'jquery'
import { createShapes } from "./core/squareTypes";
import { TetrisRule } from "./core/TetrisRule";
import { MoveDirection } from "./core/types";


const group = createShapes({ x: 3, y: 3 })
group.squares.forEach(sq => {
    sq.viewer = new SquarePageViewer(sq, $("#root"))
})

let timer = setInterval(()=>
{
    const res = TetrisRule.move(group,MoveDirection.right)
    if(!res){
        console.log('stop')
        clearInterval(timer)
        // group.rotate()
    }
},1000)


// TetrisRule.moveDirectly(group,MoveDirection.right)
// let timer = setInterval(()=>{
//     const res = TetrisRule.move(group,MoveDirection.down)
//     console.log(res)
//     if(!res){
//         clearInterval(timer)
//     }
// },1000)


