import { cancelCreateTask, showTasks, insertTask, deleteAllTasks, deleteCompletedTasks } from "./taskUI.js"
import { updateTaskList, tasksList, updateCompletedTask } from "./storageManager.js"

const addNewTaskButton = document.querySelector(".app__button--add-task")
const taskForm = document.querySelector(".app__form-add-task")
const taskDescription = taskForm.querySelector(".app__form-textarea")
const tasksListDiv = document.querySelector(".app__section-task-list")
const cancelTaskBtn = document.querySelector(".app__form-footer__button--cancel")
const onGoingTaskDesc = document.querySelector(".app__section-active-task-description")
const deleteAllTaskBtn = document.getElementById("btn-remover-todas")
const deleteCompletedTasksBtn = document.getElementById("btn-remover-concluidas")

let activeTask = ""

addNewTaskButton.addEventListener("click", () => {
    taskForm.classList.toggle("hidden")
})

deleteCompletedTasksBtn.addEventListener("click", () => deleteCompletedTasks(tasksListDiv))

deleteAllTaskBtn.addEventListener("click", () => deleteAllTasks(tasksListDiv))

cancelTaskBtn.addEventListener("click", () => cancelCreateTask(taskForm, taskDescription))

taskForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const task = {
        id: Date.now(),
        description: taskDescription.value,
        completed: false
    }
    tasksList.push(task)
    updateTaskList()
    insertTask(task, tasksListDiv)
    taskDescription.value = ""
    taskForm.classList.add("hidden");
})

tasksListDiv.addEventListener("click", (e) => {
    const taskLi = e.target.closest(".app__section-task-list-item")
    if (!taskLi) return

    activeTask = tasksListDiv.querySelector(".app__section-task-list-item-active")
    if (activeTask && activeTask !== taskLi) {
        activeTask.classList.remove("app__section-task-list-item-active")
    } else if (activeTask === taskLi) {
        activeTask.classList.remove("app__section-task-list-item-active")
        onGoingTaskDesc.textContent = ""
        return
    }

    const taskLiDesc = taskLi.querySelector(".app__section-task-list-item-description")
    taskLi.classList.add("app__section-task-list-item-active")
    activeTask = taskLi

    onGoingTaskDesc.textContent = taskLiDesc.textContent
})

document.addEventListener("FokusTimer", () => {
    if (!activeTask) return

    activeTask.style.pointerEvents = "none"
    activeTask.setAttribute("aria-disabled", "true")
    activeTask.classList.add("app__section-task-list-item-complete")
    activeTask.classList.remove("app__section-task-list-item-active")
    onGoingTaskDesc.textContent = ""
    const taskId = activeTask.dataset.id
    updateCompletedTask(taskId)
    return
})

showTasks(tasksListDiv)