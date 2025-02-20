// Encontrar o botão de adicionar tarefa
const addNewTaskButton = document.querySelector(".app__button--add-task")
const taskForm = document.querySelector(".app__form-add-task")
const taskDescription = taskForm.querySelector(".app__form-textarea")
const tasksListDiv = document.querySelector(".app__section-task-list")

let tasksList = JSON.parse(localStorage.getItem("tasks")) || []

addNewTaskButton.addEventListener("click", () => {
    taskForm.classList.toggle("hidden")
})

taskForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const task = {
        description: taskDescription.value
    }
    tasksList.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasksList))
    insertTask(task, tasksListDiv)
    taskDescription.value = ""
    taskForm.classList.add("hidden");
})

const updateTaskList = (oldTaskDesc, newTaskDesc) => {
    tasksList.forEach((task) => {
        if (task.description === oldTaskDesc || task.description === null) {
            task.description = newTaskDesc
        }
    })
    localStorage.setItem("tasks", JSON.stringify(tasksList))
}


const createTask = (task) => {
    const taskLi = document.createElement("li")
    taskLi.classList.add("app__section-task-list-item")

    const taskSvg = document.createElement("svg")
    taskSvg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
    <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
    </svg>
    `
    const taskDesc = document.createElement("p")
    taskDesc.classList.add("app__section-task-list-item-description")
    taskDesc.textContent = task.description
    const taskBtn = document.createElement("button")
    taskBtn.classList.add("app_button-edit")
    taskBtn.onclick = () => {
        let oldTaskDesc = taskDesc.textContent
        let newTaskDesc = prompt("Qual a nova descrição para a tarefa?")
        if (newTaskDesc === null || newTaskDesc === "") {
            alert("Você precisa escrever uma descrição.")
            return
        }
        updateTaskList(oldTaskDesc, newTaskDesc)
        taskDesc.textContent = newTaskDesc
    }

    const taskBtnImg = document.createElement("img")
    taskBtnImg.src = "/imagens/edit.png"
    taskBtn.appendChild(taskBtnImg)
    taskLi.append(taskSvg, taskDesc, taskBtn);

    return taskLi
}

const insertTask = (task, div) => {
    const taskElement = createTask(task)
    div.appendChild(taskElement)
}

const showTasks = () => {
    tasksListDiv.innerHTML = ""
    tasksList.forEach((task) => {
        insertTask(task, tasksListDiv)
    })
}

// tasksListDiv.addEventListener("click", (e) => {
//     if (!e.target.closest(".app_button-edit")) {
//         return
//     }

//     const taskLi = e.target.closest(".app__section-task-list-item")
//     console.log(taskLi)
// })

showTasks()