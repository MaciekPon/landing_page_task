<template>
  <HomeView />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeView from "@/views/HomeView.vue";

export default defineComponent({
  name: "App",
  components: {
    HomeView,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
