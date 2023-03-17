import { Square } from "./core/Square";
import { IViewer } from "./core/types";

class SquareConsoleViewer implements IViewer{

    public constructor(private _square:Square){

    }
    show(): void {
        console.log(this._square.color,this._square.point)
    }
    remove(): void {
        
    }
}
const sq = new Square({x:0,y:0},'red')
sq.viewer = new SquareConsoleViewer(sq)
sq.viewer.show()
sq.point = {
    x: 4,
    y: 4
}