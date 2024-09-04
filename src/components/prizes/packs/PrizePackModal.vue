<template>
    <Teleport to="body">
        <div v-if="open" class="modal">
            <BlueRupeePack />
            <FiveArrowsPack />
        </div>
    </Teleport>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>