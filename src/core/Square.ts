//小方块类
import { IPoint, IViewer } from "./types"
export class Square {
    //方块显示器
    private _viewer?:IViewer;
    private _point:IPoint = {x:0,y:0}
    private _color:string = ''
    public constructor() {
    }
    //方块坐标
    public get point(){
        return this._point;
    }

    public set point(value){
        this._point = value;
        if(this._viewer){
            this._viewer.show();
        }
    }

    public get color(){
        return this._color;
        
    }
    //方块颜色
    public set color(value){
        this._color = value
        if(this._viewer){
            this._viewer.show();
        }
    }

    public get viewer(){
        return this._viewer;
    }

    public set viewer(v){
        this._viewer = v
        if(this._viewer){
            this._viewer.show();
        }
    }
}