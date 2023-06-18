{
    console.log("Hello World!");


    const tasks = [];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString +=`
            <li>
             ${task.content}
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const addNewTask = (newTask) => {
        tasks.push({
            content: newTask,
        });

        render();
    }

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

