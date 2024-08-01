<template>
  <footer>
    <p>We accept the following credit card</p>
    <img src="@/assets/cards.png" />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {},
});
</script>
<style scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer img {
  width: 100%;
  padding-bottom: 10px;
}
</style>
