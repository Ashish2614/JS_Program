//store information in pair of keys and keys which must be unique ,values may be duplicate,mutable data type//
//---------object literals--------//

// var emp = {
//     id           : 1001,
//     Name         : "Nitin Chauhan",
//     Designation  : 'Trainer',
//     Salary       : 189000,
//     City         : "Faridabad",
//     State        : "Haryana"
// }
// console.log(emp)

//---------------Empty Object Literal------------
// var emp = {}
// emp.id                  =  1001,
//     emp.Name            = "Nitin Chauhan",
//     emp['Designation'] = 'Trainer',
//     emp["Salary"]       = 189000,
//     emp["City"]         = "Noida",
//     emp.State           = "UP"
// console.log(emp)

//---------------New Object()---------------

//     var emp              =  object ()
//      emp.id              =  1001
//      emp.Name            = "Nitin Chauhan"
//      emp['Designation']  = 'Trainer'
//      emp["Salary"]       = 189000
//      emp["City"]         = "Noida"
//      emp.State           = "UP"
//  console.log(emp)

//-------Accessing object value with the help of keys------//

//     var emp              =  object ()
//      emp.id              =  1001
//      emp.Name            = "Nitin Chauhan"
//      emp['Designation']  = 'Trainer'
//      emp["Salary"]       = 189000
//      emp["City"]         = "Noida"
//      emp["State"]           = "UP"
//   console.log(emp.id)
//  console.log(emp.address)
//  console.log(emp.city)

//  console.log(emp.Name)
//  console.log(emp['Name'])
//  console.log(emp[" "])
//  console.log(emp[`Name`])


//-----Accessing object value through Loop -------[only for loop is used]//

// for(let key in emp){
//     console.log(`${key} = ${emp[key]}`)
// }

//----Adding item to existing object-----//

// emp['email']   = "ashishtring@gmail.com"
// emp['phone']   = "9873457212"
// emp['Subject'] = "Mern Stack"
// emp['address'] = "Faridabad"
// console.log(emp)


//-------Deleting Object item ------//
// delete emp.dsg
// delete emp['Salary']
// delete emp['City']
// delete emp['State']
// console.log(emp)

//---------Nesting Of Objects ie,. Objects within Objects----------//

// var emp = {
//     id        : 1001,
//     name      : "Nitin Chauhan",
//     dsg       : 'Trainer',
//     salary    : 189000,
//     address : {
//         addressLine1: {
//             building : {
//                 number : "A - 43",
//                  floor : "2nd",

//             }
//         },
//         addressLine2: {
//             street : "16A",
//             locality : "Sector 16",
//             nearby    : "MacD"
//         }
//     }
// }
// console.log(emp)
// console.log(emp.address)
// console.log(emp.address.addressLine1)
// console.log(emp.address.building)
// console.log(emp.address.addressLine1.building.floor)


//--------Function/method in Object---------//

// var obj = {
//     a : 10,
//     b : 20,
//     display1(){
//         console.log(`In display1() a = ${obj.a} and b = ${obj.b}`)
//     },
//     display2(){
//         console.log(`In display2() a = ${this.a} and b = ${this.b}`)
//     },
//     display3: function(){
//         console.log(`In display3() a = ${obj.a} and b = ${obj.b}`)
//     },
//     display4: function(){
//         console.log(`In display4() a = ${this.a} and b = ${this.b}`)
//     },
//     display5:()=> console.log(`In display 5() a = ${obj.a}and b = ${this.b}`),

//     display6:()=> console.log(`In display 6() a = ${obj.a}and b = ${this.b}`),

// }
// obj.display1()
// obj.display2()
// obj.display3()
// obj.display4()
// obj.display5() 
// obj.display6()


// var emp = {
//     id            : 1001,
//     Name          : "Nitin chauhan",
//     dsg           : 'Trainer',
//     basicSalary   : 999999,

//     calculate() {
//         this.ta = this.basicSalary*10/100
//         this.da = this.basicSalary*40/100
//         this.hra = this.basicSalary*20/100
//         this.ma = this.basicSalary*5/100

//         this.gross = this.basicSalary + this.ta + this.da + this.hra + this.ma
//         this.itax  = this.gross * 10/100
//         this.net   = this.gross - this.itax
//     },
//     display() {
//         console.log(`
//             Employee I   : ${this.id}
//             Name         : ${this.name}
//             Designation  : ${this.dsg}
//             Ta           : ${this.ta}
//             Da           : ${this.da}
//             Hra          : ${this.hra}
//             Ma           : ${this.ma}
//             Gross Salary : ${this.GorssSalary}
//             Net   Salary : ${this.NetSalary}
//               `)
//     }
// }
// emp.calculate()
// emp.display()

//------------GETTER and SETTET Property-------------------//

// var emp = {
//     id: 1001,
//     Name: " nitin chauhan",
//     dsg: "Trainer",
//     city: "Noida",
//     state: "UP",

//     setSalary(num) {
//         this.Salary = num
//     },
//     get display() {
//         console.log(`
// employeeId  : ${this.id}
// Name        : ${this.name}
// Designation : ${this.dsg}
// salary      : ${this.salary}
// city        : ${this.city}
// state       : ${this.state}
// `)
//     }
// }
// emp.setSalary  = 189000
// emp.display


//--------OBJECT DESTRUCTURING---------//

// var emp = {
//     id         : 1001,
//     name       : 'Nitin',
//     dsg        : 'Trainer',
//     salary     : 1890000,
//     city       : 'Faridabad'
//     State      : 'Haryana'

//     console.log(`
//         emp.Id         : ${emp.id}
//         Name           : ${emp.Name}
//         Designation    : ${emp.dsg}
//         Salary         : ${emp.salary}
//         City           : ${emp.city}
//         State          : ${emp.state}
//         `)
//         var{id,name,dsg,salary,city,state} = emp
//         console.log(`
//             employee Id      : ${id}
//             name             : ${name}
//             designation      : ${dsg}
//             salary           : ${salary}
//             city             : ${city}
//    `)
// }

//-------Object Constructor----------//

// var Employee = function (id,name,dsg,salary,city,state){
//     this.id = id 
//     this.name = name
//     this.designation = dsg
//     this.salary = salary
//     this.city  = city
//     this.state = state
// }
// var emp1 = new Employee(1001,"Nitin Chauhan","Trainer",189000,"Faridabad","Haryana","UP")
// var emp2 = new Employee(1002,"Punit Chauhan","Trainer",389000,"Noida","UP")
// var emp3 = new Employee(1003,"Mamta Chandel","Trainer",289000,"Delhi","NCR")
// console.log(emp1)
// console.log(emp2)
// console.log(emp3)

//OBJECT PROTOTYPE ()-------------------//
//Need of object property 

// var Employee = function(id,name,salary,city,state){
//     this.id = id
//     this.name = name 
//     this.salary = salary
//     this.city  = city
//     this.state = state
// }
// Employee.prototype.cmp = "Ducat"
// Employee.prototype.display = function() {
//      console.log(`
//               Employee Id = ${this.Id}
//               Name = ${this.name}
//               Designation = ${this.dsg}
//               Salary = ${this.salary}
//               City = ${this.city}
//               State = ${this.state}
//               Company = ${this.cmp}
//         `)
// }
// var emp1 = new Employee(1001,"Nitin Chauhan","Trainer",189000,"Faridabad","Haryana","UP")
// var emp2 = new Employee(1002,"Punit Chauhan","Trainer",389000,"Noida","UP")
// var emp3 = new Employee(1003,"Mamta Chandel","Trainer",289000,"Delhi","NCR")

// emp1.display()
// emp2.display()
// emp3.display()

//OBJECT-BUILT-IN METHOD---------------------------- //
//1-object.keys():
//2-object.values():
//3-object.entries():

// var emp = {
//     id : 1001,
//     name : "Nitin Chauhan"
//     designation : "dsg"
//     salary : "salary"
//     city : "Noida"
//     state : "UP"
// }
// console.log(Object.keys(emp))
// console.log(Object.values(emp))
// console.log(Object.entries(emp))

//4-object.assign():

// var obj1 = {
//     a: 10,
//     b: 20
// }
// var obj2 = {}
// obj2 = obj1                       //shallow copy//
// Object.assign(obj2. obj1)           //deep copy //
// console.log(obj1, obj2)
// obj2.a = 100
// obj2.b = 200

//5- OBJECT.CREATE():

// var obj1 = {
//     a : 10,
//     b : 20
// }
// var obj2 = Object.create(obj1)
// console.log(obj2)
// console.log(obj2.a, obj2.b)

//6-object.isFrozen():(
//7-object.freeze():

// Object.freeze(emp)
// console.log(Object.isFrozen(emp))
// emp.email = "vishank@gmail.com"
// delete emp.city
// emp.State = "Haryana"
// console.log(emp)

//8-object.isSealed() :
//9-object.seal() :

// Object.seal(emp)
// console.log(Object.isSealed(emp))
// emp.email = "vishank@gmail.com"
// delete emp.city
// emp.state = "Harayana"
// console.log(emp)

//10-object.getOwnpropertyDescription(object,property):

// console.log(Object.getOwnPropertyDescription(emp,'id'))
// console.log(Object.getOwnPropertyDescription(emp,'name'))
// console.log(Object.getOwnPropertyDescription(emp,'dsg'))

//11-object.setPrototypeOf((Object,prototype))
Object.setPrototypeOf(emp,{
    cmp: "Ducat"
})
console.log(emp.cmp)