{
    console.log("Hello World!");


    const tasks = [];

    const addNewTask = (newTask) => {
        tasks.push({
            content: newTask,
        });

        render();
    };

    const removeTask = (index) => {
        tasks.splice(index, 1);    
        render();
    };


    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li ${task.done ? "class=\"form__task--done\"" : ""}>
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


