<template>
  <v-app>
    <v-content class="app-content">
      <kanban-board />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import KanbanBoard from "@/components/KanbanBoard.vue";

@Component({
  components: {
    KanbanBoard
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

.main-app {
  background: #dfdfdf;
}
</style>