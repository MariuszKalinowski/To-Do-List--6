{
    console.log("Hello World!");


    const tasks = [
        {
            content: "zjeść psa",
            done: false,
        },
    ];

    const addNewTask = (newTask) => {
        tasks.push({
            content: newTask,
        });

        render();
    };

    function removeTask(taskIndex) {
        tasks.splice(taskIndex, 1);
        render();
    }


    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }


    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li ${task.done ? "class=\"form__task--done\"" : ""}>
            <button class="form__taskDone js-done">Zrobione??</button>
            ${task.content}
            <button class="form__removeButton js-remove">Usuń zadanie</button>
            </li>
        `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

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

    const onFormSumbit = (event) => {
        event.preventDefault();

        const newTask = document.querySelector(".js-newTask").value.trim();

        if (newTask === "") {
            return;
        }

        addNewTask(newTask);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

    }


    init();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSumbit);
};


