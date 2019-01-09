import { GET_TASK, ADD_TASK, EDIT_TASK, REMOVE_TASK, COMPLETE_TASK, EMPTY_TASK, GET_LIST_TASK } from './mutation-types'

export default {
	[GET_LIST_TASK](state, task) {
		state.listTask = task
	},
	[GET_TASK](state, task) {
		state.newTask = task
	},
	[ADD_TASK](state) {
		state.tasks.push({
			body: state.newTask,
			completed: false
		})
	},
	[EDIT_TASK](state, task) {
		var tasks = state.tasks
		tasks.splice(tasks.indexOf(task), 1)
		state.tasks = tasks
		state.newTask = task.body
	},
	[REMOVE_TASK](state, task) {
		var tasks = state.tasks
		tasks.splice(tasks.indexOf(task), 1)

	},
	[COMPLETE_TASK](state, task) {
		task.completed = !task.completed
	},
	[EMPTY_TASK](state) {
		state.newTask = ''
	}
}
