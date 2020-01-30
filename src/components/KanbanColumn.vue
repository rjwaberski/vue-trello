<template>
  <div>
    <p class="mb-3 text-center title primary--text">{{ column.name }}</p>
    <v-sheet class="mx-auto neuromorphic-shadow--concave pa-6 pt-10" height="500" width="300">
      <v-list dense color="transparent">
        <v-list-item
          v-for="(item, i) in column.items"
          :key="i"
          class="neuromorphic-shadow--concave mb-3"
        >
          <v-list-item-icon>
            <v-btn :to="{ name: 'task', params: { id: '1234'}}" text small>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.value" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IBoardColumn } from "@/interfaces/board";
@Component
export default class KanbanColumn extends Vue {
  @Prop({ required: true }) private column!: IBoardColumn;

  private get updated(): string {
    return `${new Date()}`;
  }
}
</script>

<style lang="scss" scoped>
.item-list {
  background: #dfdfdf;
}
</style>