import { IPoint, MoveDirection, Shape } from "./types"
import { boardSize } from "./GameConfig"
import { SquareGroup } from "./SquareGroup"
//自定义类型推导
function isPoint(obj: any): obj is IPoint {
    if (obj.x === undefined) {
        return false
    }
    else { return true }
}


export class TetrisRule {
    static canIMove(shape: Shape, centerPoint: IPoint): boolean {
        //得到真实方块坐标
        const shapePoint: IPoint[] = shape.map(item => {
            return {
                x: item.x + centerPoint.x,
                y: item.y + centerPoint.y
            }
        })

        const result: boolean = shapePoint.some(item => {
            return item.x < 0 || item.x > boardSize.width - 1
                || item.y < 0 || item.y > boardSize.height - 1
        })
        if (result) {
            //超越了边界
            return false
        }
        else {
            return true
        }

    }
    static move(group:SquareGroup,targetPoint: IPoint):boolean
    static move(group:SquareGroup,direction: MoveDirection):boolean
    //函数重载使其拥有两个功能
    static move(group: SquareGroup, targetPointOrDirection: IPoint | MoveDirection): boolean {
        if (isPoint(targetPointOrDirection)) {
            if (this.canIMove(group.shape, targetPointOrDirection)) {
                group.centerPoint = targetPointOrDirection
                return true
            }
            return false
        }
        else {
            let targetPoint: IPoint;
            if (targetPointOrDirection === MoveDirection.left) {
                targetPoint = {
                    x: group.centerPoint.x - 1,
                    y: group.centerPoint.y
                }
            } else if (targetPointOrDirection === MoveDirection.right) {
                targetPoint = {
                    x: group.centerPoint.x + 1,
                    y: group.centerPoint.y
                }
            } else {
                targetPoint = {
                    x: group.centerPoint.x,
                    y: group.centerPoint.y + 1
                }
            }
            return this.move(group,targetPoint)
        }
    }

    static moveDirectly(group:SquareGroup,direction:MoveDirection){
        while(this.move(group,direction)){

        }
    }

    static rotate(group:SquareGroup):boolean{
        const newShape = group.afterRotatePoint()
        if(this.canIMove(newShape,group.centerPoint)){
            group.rotate()
            return true
        }else{return false}
    }
}