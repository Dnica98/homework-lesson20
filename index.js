
const arr = [1,2,3,4,5,6,107,200,240];

// const arr1 = arr.map((item,idex,arr) => item + 1)

// console.log(arr1)

// const arr2 = arr.map((item,idex,arr)=>{return item*2;})

// console.log(arr2)

// const arr3 = arr.map((item,index,arr)=>{return item - 2;})

// console.log(arr3)

// const arr4 = arr.map((item,index,arr)=>{return item/3})

// console.log(arr4)

// const arr5 = arr.map((item,index,arr)=>{return Math.floor(item/3)})

// console.log(arr5)

// const arr6 = arr.filter((item,index,arr)=>{
//     if (item > 5) return item})

// console.log(arr6)

// const arr7 = arr.filter((item,index,arr)=>{
//     if (item < 100) return item})

// console.log(arr7)

// const rezultat = arr.map(item => item + 1).map(item=> item*2).map(item=>item - 2).map(item=> item/3).map(item=> Math.floor(item/3)).filter(item=> {if (item > 5) return item}).filter(item=>{if (item < 100) return item})

// console.log(rezultat)

// const sortASC = arr.sort((a,b)=> a - b)

// console.log('ASC', sortASC)

// const sortDSC =arr.sort((a,b)=> b - a)

// console.log('DSC', sortDSC)

const str = ['mere','afine','pere','rosii','dovlecei','nuci','ananas','in','uncuvantde10caractere']

// const str1 = str.map((item,index) => item + index)

// console.log(str1)

// const str2 =str.map(item=>item.slice(1))

// console.log(str2)

// const str3 = str.filter(item=>{if(item.length > 3) return item})

// console.log(str3)

// const str4 = str.filter(item=>{if(item.length < 10) return item})

// console.log(str4)

// const rezultatSTR = str.map((item,index) => item + index).map(item=>item.slice(1)).filter(item=>{if(item.length > 3) return item}).filter(item=>{if(item.length < 10) return item})

// console.log(rezultatSTR)

// const redArr1 = arr.reduce((acc,curr,index,arr)=>{
//     acc.push(curr + 1);

//     return acc;
// }, [])

// console.log(redArr1)

// const redArr2 = arr.reduce((acc,curr,index,arr)=>{
//     acc.push(curr * 2);
//     return acc;
// }, [])

// console.log(redArr2)

// const redArr3 = arr.reduce((acc,curr,index,arr)=>{
//     acc.push(curr - 2);
//     return acc;
// }, [])

// console.log(redArr3)


// const redArr4 = arr.reduce((acc,curr,index,arr)=>{
//     acc.push(curr / 3);
//     return acc;
// }, [])

// console.log(redArr4)


// const redArr5 = arr.reduce((acc,curr,index,arr)=>{
//     acc.push(Math.floor(curr / 3));
//     return acc;
// }, [])

// console.log(redArr5)


// const redArr6 = arr.reduce((acc,curr,index,arr)=>{
//     if (curr > 5) acc.push(curr);
//     return acc;
// }, [])

// console.log(redArr6)

// const redArr7 = arr.reduce((acc,curr,index,arr)=>{
//     if (curr < 100) acc.push(curr);
//     return acc;
// }, [])

// console.log(redArr7)


// const redStr1 = str.reduce((acc,curr,index)=>{
//     acc.push(curr + index);
//     return acc;
// }, [])

// console.log(redStr1)

// const redStr2 = str.reduce((acc,curr)=>{
//     acc.push(curr.slice(1))
//     return acc;
// }, [])

// console.log(redStr2)


// const redStr3 = str.reduce((acc,curr)=>{
//     if(curr.length > 3) acc.push(curr);
//     return acc;
// }, [])

// console.log(redStr3)


// const redStr4 = str.reduce((acc,curr)=>{
//     if(curr.length < 10) acc.push(curr)

//     return acc;
// }, [])

// console.log(redStr4)


// const sumARR = arr.reduce((acc,curr)=>{
//         return acc + curr;
// }, 0)

// console.log(sumARR)

// const smallARR = arr.reduce((acc,curr)=>{
//     return Math.min(acc,curr);
// })

// console.log(smallARR)

// const bigARR = arr.reduce((acc,curr)=>{
//     return Math.max(acc,curr);
// })

// console.log(bigARR)

// const smallSTR = str.reduce((acc,curr)=>{
//     return acc.length < curr.length ? acc : curr;
// })

// console.log(smallSTR)

// const bigSTR = str.reduce((acc,curr)=>{
//     return acc.length > curr.length ? acc : curr;
// })

// console.log(bigSTR)

// arr.forEach(function(item){ console.log(item);})
// str.forEach(function(element){ console.log(element);})


// function cautaElemet(lista,element) {
//     return lista.some(item=> item === element)
// }

// console.log(cautaElemet(str,'mere'))
// console.log(cautaElemet(str,'dragon fruit'))


// function cautaElemet(lista,element) {
//     return lista.find(item=> item === element) !== undefined;
// }

// console.log(cautaElemet(str,'mere'))
// console.log(cautaElemet(str,'dragon fruit'))


function cautaElemet(lista,element) {
    return lista.filter(item=> item === element).length > 0;
}

console.log(cautaElemet(str,'mere'))
console.log(cautaElemet(str,'dragon fruit'))