const item = document.querySelector("#items");
let toDobox = document.querySelector("#to-do-box");
let todoList = [];

// Load saved items from local storage on page load
document.addEventListener("DOMContentLoaded", function () {
    const savedItems = localStorage.getItem("todoList");
    if (savedItems) {
        todoList = JSON.parse(savedItems);
        renderTodoList();
    }
});

item.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTodo(this.value);
        this.value = "";
    }
});

const addTodo = (data) => {
    if (data.trim() === "") {
        console.log("Nothing");
        return;
    }

    todoList.push(data);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    renderTodoList();
};

const renderTodoList = () => {
    toDobox.innerHTML = "";
    todoList.forEach((todo, index) => {
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
            ${todo} 
            <i class="fa-solid fa-xmark absolute right-3 top-3"></i>
        `;

        listItem.addEventListener("click", function () {
            this.classList.toggle("done");
        });

        listItem.querySelector("i").addEventListener("click", () => {
            todoList.splice(index, 1);
            localStorage.setItem("todoList", JSON.stringify(todoList));
            renderTodoList();
        });

        toDobox.appendChild(listItem);
    });
};
