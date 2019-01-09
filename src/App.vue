<template>
  <div id="app" class="container">
    <p class="logo-title">Todo App - Vuex Starter</p>
    <div class="row">
      <div class="col-md-6">
        <ListTask/>
      </div>
      <div class="col-md-6">
        <CompletedTask/>
      </div>
    </div>
    <GetTask/>
  </div>
</template>

<script>
import GetTask from "./components/GetTask.vue";
import ListTask from "./components/ListTask.vue";
import CompletedTask from "./components/CompletedTask.vue";

export default {
  components: {
    GetTask,
    ListTask,
    CompletedTask
  }
};
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}

ul li {
  list-style-type: none;
}

.logo-title {
  margin-top: 20px;
  font-weight: bold;
}

.my-task {
  color: #f4f7f9 !important;
  background-color: #656c7a !important;
}

.my-completed {
  color: #f4f7f9 !important;
  background-color: #656c7a !important;
}
.task-length {
  float: right !important;
}

.completed-length {
  float: right !important;
}

.list-group-item {
  background-color: wheat;
}

.complete-list {
  background-color: #26bf0a !important;
}

.remove-completed {
  float: right !important;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
