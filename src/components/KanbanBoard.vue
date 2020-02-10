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

    <router-view :dialog="isOpen" :task="selectedTask" />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State, Getter, Mutation } from "vuex-class";
import { IBoardColumn, IBoard, IBoardItem } from "@/interfaces/board";

import KanbanColumn from "@/components/KanbanColumn.vue";

@Component({
  components: {
    KanbanColumn
  }
})
export default class KanbanBoard extends Vue {
  @State board!: IBoard;
  @Getter private getTaskById!: (id: string) => IBoardItem | undefined;
  @Mutation private createTask!: (data: any) => void;

  private get columnWidth(): number {
    return this.board.columns.length ? 12 / this.board.columns.length : 0;
  }

  private get isOpen(): boolean {
    return this.$route.name === "task";
  }

  private get selectedTask(): IBoardItem | null {
    const id: string | null = this.isOpen ? this.$route.params.id : null;
    return id ? this.getTaskById(id) || null : null;
  }
}
</script>
