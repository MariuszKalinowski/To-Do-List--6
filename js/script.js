{
    let tasks = [];
    let hideDoneTasks = false;

    const addNewTask = (newTask) => {
        tasks = [
            ...tasks,
            {content: newTask},
        ];
        render();
    };


    const removeTask = (taskIndex) => {
        tasks = [
          ...tasks.slice(0, taskIndex),
          ...tasks.slice(taskIndex +1),
        ];
        render();
    }

    /* TAK BYŁO PRZED ZMIANĄ NA MAP
    
    const toggleTaskDone = (taskIndex) => { 
        tasks[taskIndex].done = !tasks[taskIndex].done;
     
        render();
    };    
    */

    const toggleTaskDone = (taskIndex) => {
        tasks = tasks.map()
    };

    const bindEvent = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const renderTasks = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li ${task.done ? "class=\"form__task--done\"" : "class=\"form__task\""}>
            <button class="form__taskDoneButton js-done">
            ${task.done ? "✔" : ""} 
            </button> 

            <span class="form__content"> 
            ${task.content}
            </span> 

            <button class="form__taskRemoveButton js-remove"> 
             🗑
            </button>
            </li>
        `};
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const rednerButtons = () => {};

    const bindButtonsEvents = () => {
        // użyć if  i wtedy dodać addEventListener
    };


    const render = () => {
        
        renderTasks();
        rednerButtons();

        bindEvent();
        bindButtonsEvents();
    };

    const onFormSumbit = (event) => {
        event.preventDefault();
        const newTaskElement = document.querySelector(".js-newTask")
        const newTaskContent = newTaskElement.value.trim();
        newTaskElement.focus();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        };

    };
    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSumbit);
    };

    init();

};

