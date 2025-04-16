//1)
//  function camelize(str){
//     let splStr=str.split('-')
//     let mpStr=splStr.map(
//         (str1,i)=>i==0?str1:str1[0].toUpperCase()+str1.slice(1)
//     )
//     return mpStr.join("")
// }
// console.log(camelize("list-style-image"))

// 2)
// function filterRange(arr, a, b){
//     return arr.filter(i=>a<=i&i<=b)
// }
// console.log(filterRange([2,4,1,8,7],3,9))

// 3)
// function filterRangeInPlace(arr, x, y) {
//     for (let i = 0; i < arr.length; i++) {
//       let val = arr[i];
//       if (val < x || val > y) {
//         arr.splice(i, 1);
//         i--;
//       }
//     }
//   }
// let arr = [2,5,1,6,7,9]
// filterRangeInPlace(arr,2,7)
// console.log(arr)

// 4)
// let arr=[5,2,1,-10,8]
// console.log(arr.sort((x,y)=>y-x))

// 5)
// let arr = ["HTML", "JavaScript", "CSS"]
// function copySorted(arr){
//     let newArr=arr.concat()
//     return newArr.sort()
// }
// console.log(copySorted(arr))

// 7)
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];
// let names=users.map(i=>i.name)
// console.log(names)

// 8)
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let users = [ vasya, petya, masha ];
// let usersMapped = users.map(i=>({
//     fullName:i.name+i.surname,
//     id:i.id,
// }))
// console.log(usersMapped)

// 9)
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let arr = [ vasya, petya, masha ];
// function ageSort(arr){
//     return arr.sort((x,y)=>x.age-y.age)
// }
// console.log(ageSort(arr))

// 10)
// function shuffle(array){
//     return array.sort(()=>Math.random()-0.5)
// }
// console.log(shuffle([2,4,1,6]))
// console.log(shuffle([2,4,1,6]))

// 11)
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let arr = [ vasya, petya, masha ];
// function getAverageAge(arr){
//     return (arr[0].age+arr[1].age+arr[2].age)/arr.length
// }
// console.log(getAverageAge(arr))

// 12)
// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ]
// function unique(strings){
//     let uStrings=[]
//     for(let str of strings){
//         if (!uStrings.includes(str)){
//             uStrings.push(str)
//         }
//     }
//     return uStrings
// }
// console.log(unique(strings))

// 13)
// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ];
// function groupById(arr) {
//     return arr.reduce((obj,val)=>{
//       obj[val.id]=val;
//       return obj;
//     },{})
//   }
// console.log(groupById(users))