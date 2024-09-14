<template>
<div class="icon BlueRupee Selectable"></div>
</template>

<script setup lang="ts">
import { usePrizeStore } from '@/stores/prize';
const store = usePrizeStore();
defineProps({
  stateProperty: { type: String, required: true },
  propertyIndex: { type: Number, required: false }
})
</script>