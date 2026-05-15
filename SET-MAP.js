//set- How to make set using new set ()

//  var a = [10,20,30,40,50,60,70,80,90,100,10,10,10,10,20,20,20,30,40,40,40,50,50,50,50,60,60,60]
//  var b = new Set(a)
// var c = Array.from(b)
// console.log(a)
// console.log(b)
// console.log(c)

//add item to set //

// b.add()
// b.add()
// b.add(100)
// b.add(120)
// console.log(b)

//delete ():

// b.delete()
// b.delete(500)
// b.delete(50)
// console.log(b)

//clear():
// b.clear()
// console.log(b)

//size();

// console.log(b.size)

// has():

// console.log(b.has(80))
// console.log(b.has(800))

// console.log(b.keys())
// console.log(b.values())
// console.log(b.entries())

// const obj = {a : 1}
// obj.b = 2
// console.log(obj)

// const obj ={a:1, b:2}
// delete obj.a
// console.log(obj)

//----------------------MAPS---------------//
 var emp = new Map([
    ['id', 1001],
    ['name', 'Nitin'],
    ['designation', 'Trainer'],
    ['Salary', 189000],
    ['City', 'Faridabad'],
    ['State', 'Haryana'],
 ])
// console.log(emp)

//----set()----//

// emp.set('salry',289000)
// emp.set('email','ashish@gmail.com')
// console.log(emp)

//-----delete()-----//

// emp.delete('City')
// emp.delete('address')
// emp.delete()
// console.log(emp)

//----clear()-----//
//  emp.clear()
// console.log(emp)

//-------size()------//

// console.log(emp.size)(

//has()_---------
// console.log(emp.has('id'))
// console.log(emp.has('city'))

//get()--------
// console.log(emp.get("name"))

console.log(emp.keys())
console.log(emp.values())
console.log(emp.entries())

