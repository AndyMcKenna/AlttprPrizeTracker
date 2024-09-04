<template>
    <div class="icon Question Selectable" @click="openModal = true"></div>
    <PrizeModal :open="openModal" :stateProperty="stateProperty" :propertyIndex="propertyIndex" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openModal = ref(false)
const props = defineProps({
  stateProperty: { type: String, required: true },
  propertyIndex: { type: Number, required: false }
})
</script>