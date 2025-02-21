// Encontrar o botão de adicionar tarefa
const addNewTaskButton = document.querySelector(".app__button--add-task")
const taskForm = document.querySelector(".app__form-add-task")
const taskDescription = taskForm.querySelector(".app__form-textarea")
const tasksListDiv = document.querySelector(".app__section-task-list")
const cancelTaskBtn = document.querySelector(".app__form-footer__button--cancel")
const onGoingTaskDesc = document.querySelector(".app__section-active-task-description")

let tasksList = JSON.parse(localStorage.getItem("tasks")) || []

const updateTaskList = () => {
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
        let newTaskDesc = prompt("Qual a nova descrição para a tarefa?").trim()
        if (!newTaskDesc || newTaskDesc.trim() === "") {
            alert("Você precisa escrever uma descrição.")
            return
        }
        editTask(oldTaskDesc, newTaskDesc)
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

const editTask = (oldTaskDesc, newTaskDesc) => {
    tasksList.forEach((task) => {
        if (task.description === oldTaskDesc || task.description === null) {
            task.description = newTaskDesc
        }
    })
    updateTaskList()
}

const showTasks = () => {
    tasksListDiv.innerHTML = ""
    tasksList.forEach((task) => {
        insertTask(task, tasksListDiv)
    })
}

const cancelCreateTask = () => {
    taskDescription.value = ""
    taskForm.classList.add("hidden")
}

addNewTaskButton.addEventListener("click", () => {
    taskForm.classList.toggle("hidden")
})

cancelTaskBtn.addEventListener("click", cancelCreateTask)

taskForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const task = {
        description: taskDescription.value
    }
    tasksList.push(task)
    updateTaskList()
    insertTask(task, tasksListDiv)
    taskDescription.value = ""
    taskForm.classList.add("hidden");
})

tasksListDiv.addEventListener("click", (e) => {
    const taskLi = e.target.closest(".app__section-task-list-item")

    const activeTask = tasksListDiv.querySelector(".app__section-task-list-item-active")
    if (activeTask && activeTask !== taskLi) {
        activeTask.classList.remove("app__section-task-list-item-active")
    } else if (activeTask && activeTask === taskLi) {
        activeTask.classList.remove("app__section-task-list-item-active")
        onGoingTaskDesc.textContent = ""
        return
    }
    const taskLiDesc = taskLi.querySelector(".app__section-task-list-item-description")
    taskLi.classList.add("app__section-task-list-item-active")
    addEventListener("FokusTimer", () => {
        activeTask.style.pointerEvents = "none"
        activeTask.setAttribute("aria-disabled", "true")
        activeTask.classList.add("app__section-task-list-item-complete")
        activeTask.classList.remove("app__section-task-list-item-active")
        onGoingTaskDesc.textContent = ""
        return
    })
    onGoingTaskDesc.textContent = taskLiDesc.textContent
})

showTasks()