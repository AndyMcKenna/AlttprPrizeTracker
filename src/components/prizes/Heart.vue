<template>
<div class="icon Heart Selectable"></div>
</template>

<script setup lang="ts">
import { usePrizeStore } from '@/stores/prize';
const store = usePrizeStore();
const props = defineProps({
  stateProperty: { type: String, required: true },
  propertyIndex: { type: Number, required: false }
})
</script>