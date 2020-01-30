<template>
  <div>
    <p class="mb-3 text-center title primary--text">{{ name }}</p>
    <v-sheet class="mx-auto neuromorphic-shadow--concave" height="500" width="300">
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class KanbanColumn extends Vue {
  @Prop({ required: true }) private name!: string;
}
</script>