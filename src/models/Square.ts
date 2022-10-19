import Polygon from "./Polygon";

export default class Square extends Polygon{
    size: number

    constructor(size: number){
        super()
        this.size = size
    }
    area(): number {
        return this.size * this.size
    }
    perimeter(): number {
        return this.size * 4
    }
}