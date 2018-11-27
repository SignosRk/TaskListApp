(function(){

    // Variables

    let list = document.getElementById("list");
    let taskInput = document.getElementById("taskInput");
    let btnNewTask = document.getElementById("btn-add");


    // Functions

    let addTask = function(){
        let task = taskInput.value;
        let newTask = document.createElement("li");
        let link = document.createElement("a");
        let content = document.createTextNode(task);

        if (task === "") {
            taskInput.setAttribute("placeholder", "Add a valid task");
            taskInput.className = "error";
            return false;
        }

        // Add the content to the link
        link.appendChild(content);
        //Adding attribute href
        link.setAttribute("href", "#");
        //Adding link to the new task
        newTask.appendChild(link);
        //Adding the new task to the list
        list.appendChild(newTask);

        taskInput.value = "";

        for (let i = 0; i <= list.children.length -1; i++) {
            list.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });
        }

    };

    let checkInput = function(){
        taskInput.className = "";
        taskInput.setAttribute("placeholder", "Add your task")
    };

    let deleteTask = function(){
        this.parentNode.removeChild(child);
    };

    // Events

    //Add Task
    btnNewTask.addEventListener("click", addTask);

    // Check Input
    taskInput.addEventListener("click", checkInput); 

    // Deleting elements from the list
    for (let i = 0; i <= list.children.length -1; i++) {
        list.children[i].addEventListener("click", deleteTask);
    }

}());