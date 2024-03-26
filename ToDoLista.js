const content_container = document.getElementById("content");
const add_ToDoList = document.getElementById("add-ToDoList");
const showCompletedBtn = document.getElementById("show-completed-btn");
const showIncompleteBtn = document.getElementById("show-incomplete-btn");


showCompletedBtn.className = "filter-button ";
showCompletedBtn.addEventListener("click", showCompleted);


showIncompleteBtn.className = "filter-button ";
showIncompleteBtn.addEventListener("click", showIncomplete);



function add_content() {
  const ToDo_container = document.createElement("div");
  ToDo_container.className = "ToDo_container h-32 w-full flex flex-row-reverse self-start p-4 border-b-2 border-black";

  const ToDo_input = document.createElement("input");
  ToDo_input.type = "text";
  ToDo_input.placeholder = "Add To-Do!";
  ToDo_input.className = "text-black text-2xl h-full w-4/5 pl-4 border-4 border-black rounded-full";

  const rightinput = document.createElement("div");
  rightinput.className = "w-1/5 h-full flex flex-col items-center gap-2";

  const add_NewToDo = document.createElement("button");
  add_NewToDo.className = "h-20 w-5/6 justify-center items-center text-center bg-black text-white font-bold text-xl border-3 border-black rounded-2xl hover:bg-white hover:text-black border-none transition-all duration-300";
  add_NewToDo.innerHTML = "Add new To-Do";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "h-12 w-2/5";

  function removeToDo() {
    ToDo_container.remove();
    checkToDoContainers();
  };

  add_NewToDo.addEventListener("click", function() {
    if (add_NewToDo.innerHTML === "Add new To-Do") {
      add_NewToDo.innerHTML = "Remove To-Do";
      add_content();
    } else {
      removeToDo();
    }
  });

  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      ToDo_input.className = "text-black bg-green-600 text-2xl h-full w-4/5 pl-4 border-green-600 rounded-full";
      add_NewToDo.innerHTML = "Done";
      add_NewToDo.addEventListener("click", function() {
        removeToDo();
      });
    } else {
      ToDo_input.className = "text-black text-2xl h-full w-4/5 pl-4 border-4 border-black rounded-full";
      add_NewToDo.innerHTML = "Remove To-Do";
      add_NewToDo.addEventListener("click", function() {
        removeToDo();
      });
    }
  });

  rightinput.append(checkbox);
  rightinput.append(add_NewToDo);
  ToDo_container.append(rightinput);
  ToDo_container.append(ToDo_input);
  content_container.prepend(ToDo_container);
}

function checkToDoContainers() {
  const ToDo_containers = document.querySelectorAll(".ToDo_container");
  if (ToDo_containers.length === 0) {
    add_ToDoList.style.display = "block";
  }
}

function showCompleted() {
  const ToDo_containers = document.querySelectorAll(".ToDo_container");
  ToDo_containers.forEach(function(container) {
    const checkbox = container.querySelector("input[type='checkbox']");
    if (checkbox && checkbox.checked) {
      container.style.display = "flex";
    } else {
      container.style.display = "none";
    }
  });
}

function showIncomplete() {
  const ToDo_containers = document.querySelectorAll(".ToDo_container");
  ToDo_containers.forEach(function(container) {
    const checkbox = container.querySelector("input[type='checkbox']");
    if (checkbox && !checkbox.checked) {
      container.style.display = "flex";
    } else {
      container.style.display = "none";
    }
  });
}

add_ToDoList.addEventListener("click", function() {
  add_content();
  add_ToDoList.style.display = "none";
});

checkToDoContainers();
