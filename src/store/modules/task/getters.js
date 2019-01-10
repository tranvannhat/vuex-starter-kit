export default {
	loadingScreen: state => state.loadingScreen,
	loadingAction: state => state.loadingAction,
	errors: state => state.errors,
	newTask: state => state.newTask,
	listTask: state => state.listTask.filter(task => { return !task.task_status }),
	completedTask: state => state.listTask.filter((task) => { return task.task_status })
}