//import MyModel from "./models/MyModel";
//
//const m1 = new MyModel()
//m1.name = 'Kevin'
//m1.sayHello()
//m1.sayHello()
//
//const m2 = new MyModel()
//m1.name = 'Daiane'
//m1.sayHello()
//m1.sayHello()

import Polygon from "./models/Polygon";
import Square from "./models/Square";
import Triangle from "./models/Triangle";

//import MyGenericClass from "./models/MyGenericClass";
//import MyModel from "./models/MyModel";
//
//const obj1 = new MyGenericClass<string>('Olá! , Olá! ')
//obj1.sayMessage()
//
//const obj2 = new MyGenericClass<number>(32)
//obj2.sayMessage()
//
//const obj3 = new MyGenericClass<Date>(new Date)
//obj3.sayMessage()
//
//const m = new MyModel()
//m.name= 'Kevin'
//
//const obj4 = new MyGenericClass<MyModel>(m)
//obj4.sayMessage()
//
//const obj5 = new MyGenericClass<any[]>([])
//obj5.sayMessage()

const sqr = new Square(12)
console.log(`Area : ` , sqr.area())
console.log(`Perimetro: `, sqr.perimeter())

const tri = new Triangle(12)
console.log(`Area : ` , tri.area())
console.log(`Perimetro: `, tri.perimeter())

console.log(`soma das areas : `, Polygon.sumAreas(sqr,tri))
console.log(`soma dos perimetros : `, Polygon.sumPerimeters(sqr,tri))