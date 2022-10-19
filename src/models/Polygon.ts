export default abstract class Polygon {
    abstract area():number

    abstract perimeter():number

    static sumAreas(pol1:Polygon ,pol2:Polygon ):number{
        return pol1.area() + pol2.area()
    }
    static sumPerimeters(pol1:Polygon ,pol2:Polygon ):number{
        return pol1.perimeter() + pol2.perimeter()
    }
}