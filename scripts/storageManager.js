let tasksList = JSON.parse(localStorage.getItem("tasks")) || []

const updateTaskList = () => {
    localStorage.setItem("tasks", JSON.stringify(tasksList))
}

const setTasksList = (newTasksList) => {
    tasksList = newTasksList
    updateTaskList()
}

const updateCompletedTask = (id) => {
    const newTasksList = tasksList.map((task) => task.id === Number(id) ? { ...task, completed: true } : task)
    setTasksList(newTasksList)
    updateTaskList()
}

export { updateTaskList, tasksList, setTasksList, updateCompletedTask }