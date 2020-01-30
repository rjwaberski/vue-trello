<template>
  <v-container class="fill-height">
    <v-row justify="space-around">
      <v-col cols="12" xs="12">
        <v-row justify="space-around">
          <v-col
            v-for="(column, index) in board.columns"
            :key="index"
            :cols="columnWidth"
            :xs="columnWidth"
          >
            <kanban-column :column="column" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State } from "vuex-class";
import { IBoardColumn, IBoard } from "@/interfaces/board";

import KanbanColumn from "@/components/KanbanColumn.vue";

@Component({
  components: {
    KanbanColumn
  }
})
export default class KanbanBoard extends Vue {
  @State board!: IBoard;

  private get columnWidth(): number {
    return this.board.columns.length ? 12 / this.board.columns.length : 0;
  }
}
</script>