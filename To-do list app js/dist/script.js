const item = document.querySelector("#items");
let toDobox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    
    addTodo(this.value);
    this.value = "";
  }
});

const addTodo = (data) => {
    if(data==0){
        console.log("Nothing")
    }
    else{

        const listItem = document.createElement("li");
        listItem.classList.add(
            "text-xl",
    "font-medium",
    "bg-black",
    "text-white",
    "p-3",
    "relative",
    "text-justify",
    "rounded",
    "pr-8",
    "mt-6"
    );
    listItem.innerHTML = `
    ${data} 
    <i class="fa-solid fa-xmark absolute right-3 top-3"></i>
    `;
    
    listItem.addEventListener("click",function(){
        this.classList.toggle("done")
    })
    
    listItem.querySelector("li i").addEventListener("click",()=>{
        listItem.remove()
    })
    
    
    toDobox.appendChild(listItem);
}

};
