<template>
  <div>
    <p class="mb-3 text-center title primary--text">{{ column.name }}</p>
    <v-sheet class="mx-auto neuromorphic-shadow--concave pa-6" height="500" width="300">
      <ul>
        <li v-for="(item, index) in column.items" :key="index" class="primary--text">
          {{ item.value }}
          <v-btn :to="{ name: 'task', params: { id: '1234'}}">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </li>
      </ul>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IBoardColumn } from "@/interfaces/board";
@Component
export default class KanbanColumn extends Vue {
  @Prop({ required: true }) private column!: IBoardColumn;
}
</script>