const array = [1,34,56,78768,87,8,2345]
const result = array.reduce((acc,item)=> {
    console.log(acc);
    return acc + item;
},0)
console.log(result);