<template>
  <v-dialog :value="dialog" max-width="400" persistent>
    <v-card>
      <template v-if="task">
        <v-card-title class="headline">{{ task.name }}</v-card-title>
        <v-card-text>{{ task.content }}</v-card-text>
      </template>

      <template v-else>
        <v-card-title class="headline">Task not found</v-card-title>
      </template>

      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" text @click="close">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IBoardItem } from "@/interfaces/board";
@Component
export default class Task extends Vue {
  @Prop({ required: true }) private dialog!: boolean;
  @Prop({ required: true }) private task!: IBoardItem | null;

  private close(): void {
    this.$router.push({ name: "home" });
  }
}
</script>
