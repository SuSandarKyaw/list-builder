const result = document.getElementById("result");
const store = document.getElementById("store");
const clear = document.getElementById("clear");
const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const calculate = document.getElementById("calculate");
const records = document.getElementById("records");

calculate.onclick = function (){
 const area =width.valueAsNumber * breadth.valueAsNumber;
 result.innerText= `w: ${width.valueAsNumber} ft * b: ${breadth.valueAsNumber} ft = ${area} sqft`;
 width.valueAsNumber =breadth.valueAsNumber  =0;
}

const clearResult = () => result.innerText = null;

clear.onclick =clearResult;

store.onclick =() => {
    records.innerHTML +=`<li>${result.innerText}</li>`;
    clearResult();
};