{
    const tasks = [];

    const addNewTask = (newTask) => {
        tasks.push({
            content: newTask,
        });

        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }


    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

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
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li ${task.done ? "class=\"form__task--done\"" : "class=\"form__task\""}>
            <button class="form__taskDoneButton js-done"> ${task.done ? "✔" : ""} </button> 
            <span class="form__content">${task.content}</span> 

            <button class="form__taskRemoveButton js-remove"> 
             🗑</button>
            </li>
        `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvent();
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

