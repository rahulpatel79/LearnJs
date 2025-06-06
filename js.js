
let doc =  document.getElementById("heading2").innerHTML;
//  Function are 5 types in Java Script
// 1. Normal Funcation
// 2. Anonymouse Funcation
// 3. Arrow Funcation (ES6) =()=>{}
// 4. Immediately invoked Function Expression (IIFE)
// 5. Constructor Function 

// 1. it is Normal funcation 
function rahul() {
    console.log("jay ma renuka")
}
rahul();

// 2. Anonymouse Function
const r = function(){
    console.log('Anonymouse Function');
}
r();

// 3. Arrow Function
const ra = ()=>{
    console.log("it is Arrow Function");
}
ra();

// 4. Immediately invoked Function Expression (IIFE)
(function(){
        console.log("IIFE")
})(); // last me () lagana imp he


// 5. Constructor Funcation
function Persion(name){
    this.name = name;
}
const p1 = new Persion("Rahul Patel");
 console.log(p1.name);