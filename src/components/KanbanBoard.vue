<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="12" xs="12">
        <v-sheet class="pa-12" color="grey lighten-3" elevation="2">
          <v-row justify="space-around">
            <v-col
              :cols="columnWidth"
              :xs="columnWidth"
              v-for="(column, index) in columns"
              :key="index"
            >
              <v-sheet elevation="2" class="mx-auto" height="500" width="300">
                <h2>{{ column.name }}</h2>

                <v-divider />
              </v-sheet>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
interface IColumn {
  name: string;
}

@Component
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

<style lang="scss" scoped>
</style>