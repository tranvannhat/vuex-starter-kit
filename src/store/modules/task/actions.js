import axios from 'axios'
import {
	GET_LIST_TASK,
	GET_TASK,
	ADD_TASK,
	EDIT_TASK,
	REMOVE_TASK,
	COMPLETE_TASK,
	EMPTY_TASK
} from './mutation-types'
import { apiTask } from '../../../config/parameters';

export default {
	async getListTask({ commit }) {
		const response = await axios(apiTask)
		commit(GET_LIST_TASK, response.data)
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
	removeTask({ commit }, task) {
		commit(REMOVE_TASK, task)
	},
	completeTask({ commit }, task) {
		commit(COMPLETE_TASK, task)
	},
	clearTask({ commit }) {
		commit(EMPTY_TASK)
	}
}
