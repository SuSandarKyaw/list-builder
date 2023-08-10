// variables
const fonts =["Arial","Agency FB","Bahnschrift","Bell MT"];


//selector
const output = document.querySelector("#output");
const text = document.querySelector("#text");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");
const fontFamily = document.querySelector("#fontFamily");

fonts.forEach((font)=>{
    fontFamily.append(new Option(font,font));
})

// action
text.addEventListener('keyup',(e)=>{
    // console.log(text.value);
    // console.log(e.target.value);
    output.innerText = text.value;
    count.innerText = text.value.length;
});

color.addEventListener("change",e=>{
    output.style.color = color.value;
});

fontSize.addEventListener("change",e=>{
    // console.log(fontSize.value);
    output.style.fontSize = e.target.value + "px" ;
});

fontFamily.addEventListener("change", e=>{
    output.style.fontFamily = fontFamily.value;
})