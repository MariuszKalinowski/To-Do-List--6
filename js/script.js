{
    console.log("Hello World!");


    const tasks = [
        {
            content: "Wykonać pracę domową",
            done: false,
        },
        {
            content: "Wyjść z psem",
            done: true,                 
        },
    ];

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

    const init = () => {
            render();
    }

    
    init();

    const button = document.querySelector(".js-button");

    button.addEventListener("click", function(event) {
        event.preventDefault()
    });

}