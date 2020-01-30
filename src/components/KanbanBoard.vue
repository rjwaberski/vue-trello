<template>
  <v-container class="fill-height">
    <v-row justify="space-around">
      <v-col cols="12" xs="12">
        <v-row justify="space-around">
          <v-col
            v-for="(column, index) in columns"
            :key="index"
            :cols="columnWidth"
            :xs="columnWidth"
          >
            <kanban-column :name="column.name" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import KanbanColumn from "@/components/KanbanColumn.vue";

interface IColumn {
  name: string;
}

@Component({
  components: {
    KanbanColumn
  }
})
export default class KanbanBoard extends Vue {
  private columns: IColumn[] = [
    {
      name: "backlog"
    },
    {
      name: "todo"
    },
    {
      name: "in progress"
    },
    {
      name: "done"
    }
  ];

  private get columnWidth(): number {
    return 12 / this.columns.length;
  }
}
</script>