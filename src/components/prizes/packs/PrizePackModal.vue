<template>
    <Dialog v-model:visible="store.prizePackModalIsOpen" modal class="PrizePackModal">
        <div class="Item" @click="store.setPrizePack('BlueRupeePack')">
            <BlueRupeePack />
        </div>
        <div class="Item" @click="store.setPrizePack('FiveArrowsPack')">
            <FiveArrowsPack />
        </div>
        <div class="Item" @click="store.setPrizePack('FullMagicPack')">
            <FullMagicPack />
        </div>
        <div class="Item" @click="store.setPrizePack('HeartFairyPack')">
            <HeartFairyPack />
        </div>
        <div class="Item" @click="store.setPrizePack('HeartHeartPack')">
            <HeartHeartPack />
        </div>
        <div class="Item" @click="store.setPrizePack('SingleBombPack')">
            <SingleBombPack />
        </div>
        <div class="Item" @click="store.setPrizePack('SmallMagicPack')">
            <SmallMagicPack />
        </div>
        <div class="Item" @click="store.setPrizePack('QuestionPack')">
            <QuestionPack />
        </div>
    </Dialog>

</template>

<script setup lang="ts">
import { usePrizeStore } from '@/stores/prize';
import Dialog from 'primevue/dialog';

const store = usePrizeStore();
</script>