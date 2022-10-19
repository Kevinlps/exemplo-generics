import IPolygon from "./IPolygon";

export default class Triangle implements IPolygon{
    size: number

    constructor(size: number){
        this.size = size
    }
    area(): number {
      return (Math.pow(this.size,2)* Math.sqrt(3))/4
    }
    perimeter(): number {
        return this.size * 3
    }
}