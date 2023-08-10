const createBtn = document.querySelector("#createBtn");
const textInput = document.querySelector("#textInput");
const lists = document.querySelector("#lists");
const totalCount = document.querySelector("#totalCount");
const doneCount = document.querySelector("#doneCount");

const data=['Hello',"hi","How are you","Have you eaten?"]

function createLi(text) {
    const dynamicId ="flexCheck"+ Math.random();
  const li = document.createElement("li");
  // li.addEventListener("dblclick",edit);
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `
    <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="${dynamicId}" onchange="done(event)">
                            <label class="form-check-label" for="${dynamicId}">
                              ${text}
                            </label>
                          </div>
                         <div class=" btn-group">
                         <button class="btn btn-outline-dark" onclick="edit(event)" >
                         <i class="bi bi-pencil pe-none"></i>
                         </button>
                         <button class="btn btn-outline-dark" onclick="del(event)" >
                        <i class="bi bi-trash3 pe-none"></i>
                        </button>                  
                         </div>
                        `;
                        return li;
}

const counter =() =>{
     const total=lists.children.length;
     const doneTotal = [...lists.children].filter(item => item.querySelector(".form-check-input").checked ===true).length;
     totalCount.innerText = total;
     doneCount.innerText=doneTotal;
}

const addList = () =>{
   if(textInput.value.trim()){
    lists.append(createLi(textInput.value));
    textInput.value = null;
    counter();
   }
   else{
    alert("Input text value");
   }

}


const del =(event)=>{
      if(confirm("Are you sure to delete")){
          event.target.closest("li").remove();
      }
      counter();
}
const done = (event)=>{
    event.target.nextElementSibling.classList.toggle("text-decoration-line-through");
    counter();
}

const edit = (event)=>{
  const old= event.target.closest("li").querySelector(".form-check-label");
  const newText = prompt("Input New Text",old.innerText);
  if(newText && newText.trim()){
    old.innerText = newText;
  }
  counter();
}

data.forEach((item) =>lists.append(createLi(item)));


createBtn.addEventListener("click", addList);

textInput.addEventListener("keyup", event =>{
    if(event.key === "Enter"){
        addList();
    }
});

window.addEventListener("load",counter);
