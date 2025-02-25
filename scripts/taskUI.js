import { setTasksList, tasksList } from "./storageManager.js"

const createTask = (task) => {
    const taskLi = document.createElement("li")
    taskLi.classList.add("app__section-task-list-item")
    if (task.completed) {
        taskLi.classList.add("app__section-task-list-item-complete")
        taskLi.style.pointerEvents = "none"
        taskLi.setAttribute("aria-disabled", "true")
    }
    taskLi.setAttribute("data-id", task.id)

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
        let newTaskDesc = prompt("Qual a nova descrição para a tarefa?")
        if (!newTaskDesc || newTaskDesc.trim() === "") {
            alert("Você precisa escrever uma descrição.")
            return
        }
        editTask(task.id, newTaskDesc)
        taskDesc.textContent = newTaskDesc
    }
    const taskBtnImg = document.createElement("img")
    taskBtnImg.src = "/imagens/edit.png"
    taskBtn.appendChild(taskBtnImg)
    taskLi.append(taskSvg, taskDesc, taskBtn);

    return taskLi
}

const editTask = (taskId, newTaskDesc) => {
    const newTasksList = tasksList.map(task =>
        task.id === taskId ? { ...task, description: newTaskDesc } : task
    )
    setTasksList(newTasksList)
}

const insertTask = (task, div) => {
    const taskElement = createTask(task)
    div.appendChild(taskElement)
}

const showTasks = (div) => {
    div.innerHTML = ""
    tasksList.forEach((task) => {
        insertTask(task, div)
    })
}

const cancelCreateTask = () => {
    taskDescription.value = ""
    taskForm.classList.add("hidden")
}

const deleteAllTasks = (div) => {
    div.innerHTML = ""
    const emptyTasksList = []
    setTasksList(emptyTasksList)
}

const deleteCompletedTasks = (div) => {
    const completedTasks = document.querySelectorAll(".app__section-task-list-item-complete")
    if (completedTasks.length === 0) return

    const onGoingTasks = tasksList.filter((task) => !task.completed)
    setTasksList(onGoingTasks)
    updateTaskList()
    completedTasks.forEach((taskLi) => div.removeChild(taskLi))
}

export { createTask, showTasks, cancelCreateTask, insertTask, editTask, deleteAllTasks, deleteCompletedTasks }