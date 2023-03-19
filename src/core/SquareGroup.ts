import { Square } from "./Square";
import { IPoint, Shape } from "./types";

//小方块组合类
export class SquareGroup {

    private _squares: readonly Square[]
    constructor(private _shape: Shape, private _centerPoint: IPoint, private _color: string) {
        const arr: Square[] = []
        this._shape.forEach(point => {
            const sq = new Square()
            sq.color = this._color
            sq.point = {
                x: this._centerPoint.x + point.x,
                y: this._centerPoint.y + point.y
            }
            arr.push(sq)
        })
        this._squares = arr
    }

    get squares() {
        return this._squares
    }

    get shape() {
        return this._shape
    }


    get centerPoint() {
        return this._centerPoint
    }

    set centerPoint(value: IPoint) {
        this._centerPoint = value
        //每次更改中心点坐标也要更改形状数组
        this._shape.forEach((point, i) => {
            this._squares[i].point = {
                x: this._centerPoint.x + point.x,
                y: this._centerPoint.y + point.y
            }
        })
    }

    get color() {
        return this._color
    }

    set color(color: string) {
        this.color = color
    }
    //旋转后获取其他点的坐标
    private setSquarePoints(){
        this._shape.forEach((point, i) => {
            this._squares[i].point = {
                x: this._centerPoint.x + point.x,
                y: this._centerPoint.y + point.y
            }
        })
    }
    //顺时针Or逆时针
    protected isClockwise = true
    //获取旋转后的形状坐标
    afterRotatePoint(): Shape {
        if (this.isClockwise) {
            return this._shape.map(item => {
                return {
                    x: -item.y,
                    y: item.x
                }
            })
        }else{
            return this._shape.map(item => {
                return {
                    x: item.y,
                    y: -item.x
                }
            })
        }
    }
    //旋转函数
    rotate(){
        const newShape = this.afterRotatePoint()
        this._shape = newShape
        this.setSquarePoints()
    }



}