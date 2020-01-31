<template>
  <div>
    <p class="mb-3 text-center title primary--text">{{ column.name }}</p>
    <v-sheet
      class="mx-auto neuromorphic-shadow--concave pa-6 pt-10"
      height="500"
      width="300"
      @drop="onDrop($event, column.items)"
      @dragover.prevent
      @dragenter.prevent
    >
      <v-list dense color="transparent">
        <v-list-item
          v-for="(item, i) in column.items"
          :key="i"
          draggable
          class="neuromorphic-shadow--concave mb-3"
          @dragstart="pickTask($event, i, getColumnIndex(column))"
        >
          <v-list-item-icon>
            <v-btn :to="{ name: 'task', params: { id: item.id }}" text small>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IBoardColumn, IBoardItem } from "@/interfaces/board";
import { Getter, Mutation } from "vuex-class";

const FROM_COLUMN_INDEX: string = "from-column-index";
const TASK_INDEX: string = "task-index";

@Component
export default class KanbanColumn extends Vue {
  @Prop({ required: true }) private column!: IBoardColumn;

  @Getter private getColumnIndex!: (column: IBoardColumn) => number;
  @Getter private getTasksByColumnIndex!: (columnIndex: number) => IBoardItem[];
  @Mutation private MOVE_TASK!: (data: {
    from: IBoardItem[];
    to: IBoardItem[];
    index: number;
  }) => void;

  private get updated(): string {
    return `${new Date()}`;
  }

  private pickTask(e: DragEvent, taskIndex: number, fromColumn: number): void {
    if (!e || !e.dataTransfer) {
      return;
    }
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData(TASK_INDEX, taskIndex);
    e.dataTransfer.setData(FROM_COLUMN_INDEX, fromColumn);
  }

  private onDrop(e: DragEvent, toTasks: IBoardItem[]) {
    if (!e || !e.dataTransfer) {
      console.error("No event data");
      return;
    }
    const fromColumnIndex: number = e.dataTransfer.getData(FROM_COLUMN_INDEX);
    const fromTasks: IBoardItem[] = this.getTasksByColumnIndex(fromColumnIndex);
    const taskIndex: number = e.dataTransfer.getData(TASK_INDEX);

    this.MOVE_TASK({
      from: fromTasks,
      to: toTasks,
      index: taskIndex
    });
  }
}
</script>

<style lang="scss" scoped>
.item-list {
  background: #dfdfdf;
}
</style>