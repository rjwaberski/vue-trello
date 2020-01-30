<template>
  <v-dialog :value="dialog" max-width="400" persistent>
    <v-card>
      <v-card-title class="headline">Task name</v-card-title>

      <v-card-text>Task content.</v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="primary" text @click="close">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Task extends Vue {
  @Prop({ required: true }) private dialog!: boolean;

  private close(): void {
    this.$router.push({ name: "home" });
  }
}
</script>
