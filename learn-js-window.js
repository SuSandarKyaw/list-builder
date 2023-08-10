//input

// const x=window.prompt();
// window.alert(x);

// area wth * brd

// const width=window.prompt("Input Width");
// const breadth=window.prompt("Input Breadth");
// const area = width * breadth;
// window.alert("Area is " + area +" sqft");

// const run =(x,y) =>{
//     window.alert(typeof x);
//     window.alert(typeof y);
//     return parseFloat(x) + parseFloat(y);
// }

// const inputX = window.prompt("Input X...");
// const inputY = window.prompt("Input Y...");
// window.alert(run(inputX,inputY));

// const answer = window.confirm("ထမင်းစားပြီးပြီလား ?....");
// window.alert(answer ? "စားပြီပြီ..." : "မစားရသေးဘူး...");

// console.log(window);

// const myName = window.prompt("What is your name?");
// console.log(`My name is ${myName}`);

// const h1 = document.getElementsByTagName("h1")[0];
// console.dir(h1);
// console.log(h1.innerText);
// console.log(h1.style.color);
// console.log(h1.title);

// const showAlert = (event, text)=> alert(text);

// const btn = document.querySelector("#btn");
// btn.onclick =showAlert.bind(null,event,"Hey you");

// btn.addEventListener('click',showAlert.bind(null,event,"min ga lar bar"))

// const h1 = document.querySelector("h1");
// h1.addEventListener('mouseenter', ()=> console.log("Mouse Enter Event"));
// h1.addEventListener('mouseout', ()=> console.log("Mouse Out Event"));
// // h1.addEventListener('mousemove', ()=> console.log("Mouse Move Event"));
// h1.addEventListener('mouseover', ()=> console.log("Mouse Over Event"));

const input =document.querySelector("input");
input.addEventListener("change",(e)=>console.log(e.target.valueAsDate));
// const select =document.querySelector("select");
// input.addEventListener('keyup',()=>console.log("KeyUp Event"));
// input.addEventListener('change',()=>console.log("Change Event"));
// select.addEventListener('change',()=>console.log("Select Change Event"));


// input.addEventListener('focus',()=>console.log("Focus Event"));
// input.addEventListener('blur',()=>console.log("Blur Event"));
// input.addEventListener('keydown',()=>console.log("KeyDown Event"));
// input.addEventListener('keypress',()=>console.log("KeyPress Event"));

const form = document.querySelector("form");
form.addEventListener('submit',e=>{
    e.preventDefault();
    console.log(document.querySelector("input").valueAsDate);
})
// form.addEventListener('submit',()=>alert("U submit form"));

// window.addEventListener('scroll',()=>console.log("U scroll window"));

// document.querySelector("#box").addEventListener("scroll",()=>console.log("U scroll div"));

// window.addEventListener("load",()=>console.log("Window loaded"));
// console.log("hello 1");
// console.log("hello 2");
// console.log("hello 3");

document.querySelector("a").addEventListener("click",e=>{
    e.preventDefault();
    console.log(e)
});