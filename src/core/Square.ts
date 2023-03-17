//小方块类
import { IPoint, IViewer } from "./types"
export class Square {
    private _viewer?:IViewer;
    public constructor(private _point:IPoint,private _color:string) {
        
    }

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

    public get viewer(){
        return this._viewer;
    }

    public set viewer(v){
        this._viewer = v
    }
}