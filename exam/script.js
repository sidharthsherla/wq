let a = 21;//<--- number
let c = 'character'; //<-- string input
console.log(c)
let array = [1, 4, 6, 7];//<--- array
let arr = ['sid', 'sherla', 'sidharth', 18];//<--- array
console.log(array)//<--- for printing complete array
console.log(array[3])//<--- for single element of array
let obj = {name:'siddharth', age:'20', college:"IARE"}; //<--- object
console.log(obj.name) // used to print single element of object
//operator are same as any language
let b = 57;
let f = a+b;
console.log(f)
console.log(a*b)
//if else else if conditions
if (a>b){
    console.log('Successful')
} else if(b>35){
    console.log('Danger')
} else {
    console.log('Abort')
}
let x = 'Sidharth';
switch(x){
    case "Sherla":
        console.log('Thats the surname');
        break;
    case "Siddharth":
        console.log("Nope wrong");
        break;
    case "sidharth":
        console.log("thats almost correct");
        break;
    default:
        console.log("sidharth is correct!")
}
//terenary operators
let y = (a<b) ? "super" : "dissapointed";
console.log(y)
// for loop
for (let key in obj){
    console.log(key + ":" + obj[key]);
}
for (let i in array){
    console.log(3 + " X " + array[i]+ " = " + array[i]*3)
}
//while loop
while (a!=0){
    console.log(a);
    a = a - 7;
}
//funcitons 
function square(l){    // general declaration of function
    return l + l;
}
let result = square(15); //function calling 
const sqaures = (x) => { //arrow function
    return x * x;
}
let r = sqaures(4)
// map, filter and reduce functions
let multipleofelements = array.map(function(ele){
    return ele * 3;
});
console.log(multipleofelements) // function can also be called this way

let filterofarray = arr.filter(function(ele){
    return ele.length <= 4;
});
console.log(filterofarray)

let reducearray = array.reduce(function(acc, cur){   // <-- sum of elements in array 
    return acc + cur
},0) 
console.log(reducearray)

//date
var currdate = new Date(); //<-- default date
console.log(currdate)
currdate.setDate(18)   //<-- manipulation of date
currdate.setFullYear(2018)
console.log(currdate)

//math function
console.log(Math.random())
console.log(Math.floor(2.324))
console.log(Math.ceil(2.324))
console.log(Math.max(2,5,7,8,3))
console.log(Math.min(2,5,7,8,3))
console.log(Math.PI)
console.log(Math.E)

//boolean
var isTrue = Boolean(1);
console.log(isTrue); // Output: true
var isFalse = Boolean(0);
console.log(isFalse); // Output: false

//forms in html
function formstag(){
    document.getElementById("answer").innerHTML = "Monkey D Luffy";
}
function Alertfunc(){
    open("https://www.Google.com");
}

//splice
var myArray = [1, "Hello", [2, 3]];
myArray.splice(1, 0, "Hello World", [4, 5]);
console.log(myArray)
 
//parseInt
let q = parseInt(prompt("Enter 1st number"))
let w = parseInt(prompt("Enter 2nd number"))
let e = parseInt(prompt("Enter 3rd number"))


alert("given numbers are"+q+","+w+","+e);
alert("sum :"+ (q+w+e));
alert("avg :"+(q+w+e)/3);
alert("product :"+q*w*e);
alert("min :"+min(q,w,e));
alert("max :"+max(q,w,e));