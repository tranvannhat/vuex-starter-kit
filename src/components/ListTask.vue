<template>
  <div id="list-tasks">
    <div class="panel panel-default">
      <div class="panel-heading my-task">
        <h3 class="panel-title">
          My Tasks
          <span class="task-length" v-if="listTask.length > 0">{{listTask.length}}</span>
        </h3>
      </div>
      <div class="panel-body">
        <ul
          class="list-group"
          name="custom-classes-transition"
          enter-active-class="animated tada"
          leave-active-class="animated bounceOutRight"
          is="transition-group"
        >
          <li class="list-group-item" v-for="(task, index) in listTask" v-bind:key="index">
            {{task.task_name}}
            <div class="btn-group">
              <button
                type="button"
                @click="edit(task)"
                class="btn btn-default btn-sm"
                href="#edit"
                role="button"
                data-toggle="modal"
              >
                <span class="glyphicon glyphicon-edit"></span> Edit
              </button>
              <button type="button" @click="complete(task)" class="btn btn-success btn-sm">
                <span class="glyphicon glyphicon-ok-circle"></span> Complete
              </button>
              <button type="button" @click="remove(task)" class="btn btn-danger btn-sm">
                <span class="glyphicon glyphicon-remove-circle"></span> Remove
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch("task/getListTask");
  },
  methods: {
    edit(task) {
      this.$store.dispatch("task/editTask", task);
    },
    complete(task) {
      this.$store.dispatch("task/completeTask", task);
    },
    remove(task) {
      this.$store.dispatch("task/removeTask", task);
    }
  },
  computed: {
    ...mapGetters({
      loadingScreen: "task/loadingScreen",
      loadingAction: "task/loadingAction",
      listTask: "task/listTask",
      tasks: "task/tasks",
      newTask: "task/newTask"
    }),
  }
};
</script>
<style>
.btn-group {
  float: right;
}
</style>
