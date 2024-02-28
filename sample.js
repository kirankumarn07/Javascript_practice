// var username="kirankumar";
// var lastname="nakkala";
// var password="1233";
// console.log(
//    `username is:${username}
//     lastname is:${lastname}  
//     password is:${password}
//    ` 
// );
// temparature=40;
// if(temparature>30){
//     console.log("it's very cold outside");
// }else{
//     console.log("it's not much cold outside");
// }
//ternary operator
// authenticated=false;
// authenticated? console.log("signup"):console.log("login");
// function hello(){
//     return 'hi kiran';
// }
// var greet=hello();
// console.log(greet);
// var a=10;
// function b(){
//     let c= 20;
// }
// console.log(c);
// b();
// var x=10;
// function a(){
//     b();
//   function b(){
//     console.log(x); 
//   } 
// }
// a();
// function a(){
//     var b=98;
//     c();
//    function c(){
//     console.log(b);
//    }
// }
// a();
// const c=1000;
// {
//     var a=10;
//     let b=20;
//     const c=30;
    
//     console.log(a);
//     //console.log(b);
//    // console.log(c);
// }
// console.log(c);
//closures
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y
// }
// z=x();
// console.log(z);
// z();
// function kiran(){
//     var a=2;
//     setTimeout(function(a){
//         console.log(a);
//     },2000);
// }
// kiran();
// function x(){
//     var num=0;
//    if(num=>0){
//     console.log("positive");
//    }else{
//     console.log("negative");
//    }
// }
// x();
// function a(){
//     for(var i=0;i<=5;i++){
//         function close(a){
//             setTimeout(function(){
//                 console.log(a);
//             },i*1000);
//         }
//         close(i);
//     }
//     console.log("kiran")
// }
// a();
// function outer(){
//     function inner(){
//        console.log(a); 
//     }
//     var a=20;
//     return inner;
// }
// outer()();

// var b=function(){
//     console.log("kiran");
// }
// // b();
// b();
// function b(){
//     console.log("kiran");
// }
//callback
// setTimeout(function(){
//     console.log("kiran")
// },2000);
// function x(y){
// console.log("x");
// y();
// }
// x(function y(){
//     console.log("y");
// });

// document.getElementById("clickme").addEventListener("click",function xyz(){
//     console.log("button clicked");
// });

//even or odd using filter
// const arr=[22,12,43,65];
// function even(x){
//   return x%2==0;
// }
// const output=arr.filter(even);
// console.log("even numbers:"+output);

//odd
// const a=[21,32,64,80,43];
// function odd(n){
//     return n%2;
// }
// const output=a.filter(odd);
// console.log("odd numbers:"+output);

// const x=[8,2,1,4,5,3,9];

// const output=x.filter(()=>a>4);
// console.log(output);

//closuers
//functions bundled with lexical environment is known as a closures

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

//returned function
// function x(){
//     var a=10;
//     function y(){
//         console.log(a);
//     }
//     return y
// }
// var z=x();
// console.log(z);
// z();

//setTimeout

// function x(){
//     var a=22;
//     setTimeout(function(){
//         console.log(a);
//     },2000)
// }
// x();

// function c(){
//     var a=31;
//     setTimeout(()=>{
//         console.log(a)
//     },2000)
// }
// c();

// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(()=>{
//             console.log(i);
//         },i*1000)
//     }
// }
// x();
//when you want only with var keyword then you closures
// function x(){
//     for(var i=1;i<=5;i++){
//         function close(x){
//             setTimeout(function(){
//                 console.log(x);
//             },i*2000);
//         }
//         close(i)
//     }
// }
// x();

//examples of closures
// function outer(){
//     var a=10;
//     function inner(){
//       setTimeout(() => {
//         console.log(a);
//       }, 2000);
//     }
//     return inner;
// }
// outer()();

//map-it traverse through the every element of an array
// const arr=[1,2,32,12,45,65]
// function triple(x){
//     return x*3
// }
// const a=arr.map(triple);
// console.log(a);

// arr=["12","15","53","87"]
// const output=arr.map(function binary(x){
//     return x.toString(2);
// })
// console.log(output);

//filter-filter function is used for filter inside an array.
//find the even numbers using the filter funtion
// const arr=[92,3,5,87,65,44]
// function even(n){
//     return n%2==0
// }
// const output=arr.filter(even);
// console.log(output);

//find the odd numbers using the odd numbers
// const a=[22,23,3,55,76,90]
// function k(a){
//     return a%2!==0
// }
// const output=a.filter(k);
// console.log(output);

// const arr=[3,6,54,7,23]
// const output=arr.filter((a)=>a>8)
// console.log(output)

//reduce function-Reduce function works where you have to take all the elements from an array
//come out of the single value out of them.
//  const arr=[12,11,42,56,767]

//  const initialValue=0;
//   const sumWithinitialvalues=arr.reduce((accumlator,currentValue)=>
//   accumlator+currentValue,initialValue)
//   console.log(sumWithinitialvalues)

//callback function-we are passing a function as an argument to another function this is called callback function.
// const cart=["shoes","shirts","pants"]

// createOrder(cart,(orderId)=>{
//     proceedToPayment(orderId);
// })
// createOrder();

//promises- we are attaching the function to the promises.
// const cart=["shoes","shirts","Hoodies"]

// const promise= createOrder(cart);
// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

// async function--asynchronous function always returns a promise
//await keyword is waiting for response and await is used in only inside the async function
// async function handleSubmit(){
//     const data=await fetch("API_URL");
//     const jsonvalues=data.json();
//     console.log(jsonvalues);
// }
// handleSubmit;

//error handling
// const API_URL=""
//  async function handleSubmit(){
//     try{
//         const data=await fetch("API_URL");
//         const jsonvalues=data.json();
//         console.log(jsonvalues);
//     }catch(error){
//         console.log(error);
//     }
//  }
//  handleSubmit();
//rest operator
// function samplerest(name,...myCollection){
//     let exampleValue=0;
//     for(let i in myCollection){
//         exampleValue=+myCollection[i]
//     }
//     document.write(name,exampleValue)
// }
// samplerest("kiran",10,20,30,40);

// const state=true
// const state=true
// const count=new Promise((resolve,reject)=>{
//     //producing code
//     if(state) {
//         resolve("count success")
//         for(let i=0; i<=6; i++) {
//           setTimeout(() => {
//             console.log(i/2);
//           }, 1000);
//         }
//         console.log("done");
//     }else{
//         reject("count not work")
//     }
//    })
//    //consuming code
//    .then((response)=>{
//     console.log("success",response);
//    })
//    .catch((response)=>{
//     console.log("failure",response)
//    })

// const pr=new Promise((resolve,reject)=>{
//     //producing code
//     resolve("success")
//     reject("failed")
// })
// .then((response)=>{
//     console.log("success",response)
// })
// .catch((response)=>{
//     console.log("failure",response)
// })

// const state=true
// const count =new Promise((resolve,reject)=>{
//     //producing code
//     if(state){
//         resolve("success")
//         for(let i=0;i<=7;i++){
//             setTimeout(()=>{
//              console.log(i)
//             },1000)
//         }
        
//     }else{
//        reject("failure")
//     }
// })
// .then((response)=>{
//     console.log("success",response)
// })
// .catch((response)=>{
//     console.log("failure",response)
// })

const nk=new Promise((solve,unsolve)=>{
    let kiran=0;
    if(kiran!=0){
        solve("success");
    }else{
        unsolve("failed");
    }
    
})
nk.then((response)=>{
    console.log("success",response)
})
.catch((response)=>{
    console.log("failed",response)
})