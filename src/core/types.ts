export interface IPoint {
    readonly x: number,
    readonly y: number
}
// 显示器接口
export interface IViewer {
    //显示函数
    show():void;
    //移除函数
    remove():void;
}