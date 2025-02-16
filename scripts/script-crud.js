// Encontrar o botão de adicionar tarefa
const addNewTaskButton = document.querySelector(".app__button--add-task")
const taskForm = document.querySelector(".app__form-add-task")
const taskDescription = taskForm.querySelector(".app__form-textarea")

const tasksList = []

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

    taskDescription.value = ""
})

