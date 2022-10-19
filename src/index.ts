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

const square = new Square(12)
console.log(`Area : ` , square.area())
console.log(`Perimetro: `, square.perimeter())

const triangle = new Triangle(12)
console.log(`Area : ` , triangle.area())
console.log(`Perimetro: `, triangle.perimeter())