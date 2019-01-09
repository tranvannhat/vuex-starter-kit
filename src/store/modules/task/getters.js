export default {
	errors: state => state.errors,
	newTask: state => state.newTask,
	tasks: state => state.tasks.filter((task) => { return !task.completed }),
	completedTask: state => state.tasks.filter((task) => { return task.completed })
}