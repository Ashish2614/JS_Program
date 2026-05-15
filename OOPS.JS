//CLASS WITHOUT CONSTRUCTOR //

// class Test{
//     show(){
//         console.log("In show() of Test Class")
//     }
//     display(){
//         console.log("In display() of Test Class")
//     }
// }
// var obj = new Test()
// obj.show()
// obj.display()

//addition //
// class Add {
//     setData(a, b) {
//         this.a = a
//         this.b = b
//         this.sum = a + b
//     }
//     display() {
//         console.log(`${this.a} + ${this.b} = ${this.sum}`)
//     }
// }
// var obj1 = new Add()
// var obj2 = new Add()
// var obj3 = new Add()

// obj1.setData(10, 20)
// obj2.setData(100, 200)

// obj1.display()
// obj2.display()

//MAGICAL NUMB2R//3
// class magical 4
//     setData(n)5{
//         this.n6= n
//     }
//     check() {
//         let sum = 0
//         let num = this.n
//         while (num != 0) {
//             let r = num % 10
//             sum = sum + r
//             num = parseInt(num / 10)
//         }
//         let rev = 0
//         num = sum
//         while (num != 0) {
//             let r = num % 10
//             rev = rev * 10 + r
//             num = parseInt(num / 10)
//         }
//         if (sum * rev === this.n)
//             console.log(`${this.n} is a magical number`)
//         else
//             console.log(`${this.n} is not a magical number`)
//     }
// }
// var obj = new magical()
// obj.setData(1458)
// obj.check()

// obj.setData(1729)
// obj.check()

// obj.setData(81)
// obj.check()

// obj.setData(1875)
// obj.check()

//CLASS WITH CONSTRUCTOR //

// class Test{
//     constructor(){
//         console.log("Constructing class Test")
//     }
//     show(){
//         console.log("In show() of Test Class")
//     }
//     display(){
//         console.log("In display() of Test class")
//     }
// }
// var obj = new Test()
// obj.show()
// obj.display()

//---Addition---//

// class Add{
//     constructor( a = 0, b = 0){
//         this.a = a
//         this.b = b
//         this.sum = a + b
//     }
//     display(){
//         console.log(`${this.a} + ${this.b} = ${this.sum}`)
//     }
// }
// var obj1 = new Add(10,20)
// var obj2 = new Add(100,200)
// var obj3 = new Add()

// obj1.display()
// obj2.display()
// obj3.display()

//-----INHERITENCE-----//

// class Test {
//     show1() {
//         console.log("In show() of Test Class")
//     }
//     display() {      //overrridden Method //
//         console.log("In display() of Test Class")
//     }
// }
// class Sample extends Test {
//     show2() {
//         console.log("In display() of sample class")
//     }

//     display() {
//         console.log("In display() of Sample Class")
//     }
// }

// var obj = new Sample()
// obj.show1()
// obj.show2()
// obj.display()

//-----ACCESSING OVERRIDDEN METHOD------//

// class Test {
//     display() {            //Overridden Method //
//         console.log("In display() of Test class")
//     }
// }
// class Sample extends Test {
//     display() {
//         super.display()    //Accessing overrdden method //
//         console.log("In display() of sample class")
//     }
// }
// var obj = new Sample()
// obj.display()

//-----CONSTRUCTOR IN PARENT CLASS-----//

// class parent {
//     constructor(){
//         console.log("Constructing class parent")
//     }
//     show(){
//         console.log("In show() of Parent Class")
//     }
// }
// class Child extends parent{
//     display(){
//         console.log("In display() of Parent class")
//     }
// }
// var obj = new Child()
// obj.show()

//---CONSTRUCTOR IN CHILD CLASS----//

// class Parent{
//     show(){
//         console.log("In show() of Parent Class")
//     }
// }
// class child extends Parent{
//     constructor(){
//         super()
//         console.log("Constructing class Parent")
//     }
//     display(){
//         console.log("In display() of Parent Class")
//     }
// }
// var obj = new child()
// obj.show()
// obj.display()

//1->Single Inheritance //

// class Parent{
//     constructor(a,b){
//         this.a = a
//         this.b = b
//     }
// }
// class child extends Parent{
//     display(){
//         console.log("In display a = ${this.a} and b = ${this.b}")
//     }
// }
// var obj = new child(10,20)
// obj.display()

//2-> multiple Inheritence//

// class parent{
//     constructor(){
//         this.a = [10,20,30,40,50,60,70,80,90,100]
//             }
//         }
//         class child extends parent{
//           display(){
//             console.log(this.a)
//           }
//         }
//         class Grandchild extends child{
//             reverse(){
//                 this.a.reverse()
//             }
//         }
//         var obj = new Grandchild()
//         console.log("Original Array is: ")
//         obj.display()
//         obj.reverse()
//         console.log("Reversed Array is: ")
//         obj.display()

//->Hierarchical Inheritence//

class parent{
    constructor(a,b){
        this.a = a
        this.b = b
    }
}
class Add extends parent{
    display(){
        console.log(`${this.a} + ${this.b} = ${this.a + this.b}`)
    }
}
class sub extends parent{
    display(){
        console.log(`${this.a} - ${this.b} = ${this.a - this.b}`)
    }
}class mul extends parent{
    display(){
        console.log(`${this.a} * ${this.b} = ${this.a * this.b}`)
    }
}class div extends parent{
    display(){
        console.log(`${this.a} / ${this.b} = ${this.a / this.b}`)
    }
}class pow extends parent{
    display(){
        console.log(`${this.a} ** ${this.b} = ${this.a ** this.b}`)
    }
}class mod extends parent{
    display(){
        console.log(`${this.a} % ${this.b} = ${this.a % this.b}`)
    }
}
var obj1 = new Add(15,6)
var obj2 = new sub(15,6)
var obj3 = new mul(15,6)
var obj4 = new div(15,6)
var obj5 = new pow(15,6)
var obj6 = new mod(15,6)

obj1.display()
obj2.display()
obj3.display()
obj4.display()
obj5.display()
obj6.display()


