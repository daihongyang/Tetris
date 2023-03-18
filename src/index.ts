import { SquarePageViewer } from "./core/view/SquarePageViewer";
import $ from 'jquery'
import { SquareGroup } from "./core/SquareGroup";
const group = new SquareGroup([{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:0,y:-1}],{x:3,y:3},"red")
group.squares.forEach(sq=>{
    sq.viewer = new SquarePageViewer(sq,$("#root"))
})
