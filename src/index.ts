import { Square } from "./core/Square";
import { SquarePageViewer } from "./core/view/SquarePageViewer";
import $ from 'jquery'
const sq = new Square()
sq.viewer = new SquarePageViewer(sq,$('#root'))
sq.point = {x:0,y:3}
sq.color = "red"
