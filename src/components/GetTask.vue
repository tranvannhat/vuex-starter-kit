<template>
  <div id="get-t">
    <form @submit.prevent="addTask">
      <input
        class="form-control"
        :value="newTask"
        @change="getTask"
        placeholder="enter new task..."
      >
      <br>
      <button type="submit" class="btn btn-primary">
        <i class="fa fa-plus"></i> Add
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    getTask(e) {
      this.$store.dispatch("task/getTask", e.target.value);
    },
    addTask(e) {
      e.preventDefault();
      this.$store.dispatch("task/addTask");
      this.$store.dispatch("task/clearTask");
    }
  },
  computed: {
    ...mapGetters({
      newTask: "task/newTask"
    })
  }
};
</script>
