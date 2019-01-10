import axios from 'axios'
import {
	GET_LIST_TASK,
	GET_TASK,
	ADD_TASK,
	EDIT_TASK,
	REMOVE_TASK,
	COMPLETE_TASK,
	EMPTY_TASK,
	SET_LOADING_SCREEN,
	SET_LOADING_ACTION
} from './mutation-types'
import { apiTask } from '../../../config/parameters';

export default {
	async getListTask({ commit }) {
		commit(SET_LOADING_SCREEN, true)
		const response = await axios(apiTask)
		commit(GET_LIST_TASK, response.data)
		commit(SET_LOADING_SCREEN, false)
	},
	async getTask({ commit }, task) {
		commit(GET_TASK, task)
	},
	addTask({ commit }) {
		commit(ADD_TASK)
	},
	editTask({ commit }, task) {
		commit(EDIT_TASK, task)
	},
	async removeTask({ commit }, task) {
		commit(SET_LOADING_ACTION, true)
		const response = await axios.delete(`${apiTask}/${task.id}`)
		if (response.status === 200) {
			commit(REMOVE_TASK, task)
			commit(SET_LOADING_ACTION, false)
		}
	},
	completeTask({ commit }, task) {
		commit(COMPLETE_TASK, task)
	},
	clearTask({ commit }) {
		commit(EMPTY_TASK)
	}
}
