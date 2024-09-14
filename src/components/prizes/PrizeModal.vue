<template>
    <Dialog v-model:visible="store.prizeModalIsOpen" modal class="PrizeModal">
        <div class="Item" @click="store.setSinglePrize('GreenRupee')">
            <GreenRupee />
        </div>
        <div class="Item" @click="store.setSinglePrize('BlueRupee')">
            <BlueRupee />
        </div>
        <div class="Item" @click="store.setSinglePrize('RedRupee')">
            <RedRupee />
        </div>
        <div class="Item" @click="store.setSinglePrize('FiveArrows')">
            <FiveArrows />
        </div>
        <div class="Item" @click="store.setSinglePrize('TenArrows')">
            <TenArrows />
        </div>
        <div class="Item" @click="store.setSinglePrize('Fairy')">
            <Fairy />
        </div>
        <div class="Item" @click="store.setSinglePrize('Heart')">
            <Heart />
        </div>
        <div class="Item" @click="store.setSinglePrize('SmallMagic')">
            <SmallMagic />
        </div>
        <div class="Item" @click="store.setSinglePrize('FullMagic')">
            <FullMagic />
        </div>
        <div class="Item" @click="store.setSinglePrize('SingleBomb')">
            <SingleBomb />
        </div>
        <div class="Item" @click="store.setSinglePrize('FourBombs')">
            <FourBombs />
        </div>
        <div class="Item" @click="store.setSinglePrize('EightBombs')">
            <EightBombs />
        </div>
    </Dialog>

</template>

<script setup lang="ts">
import { usePrizeStore } from '@/stores/prize';
import Dialog from 'primevue/dialog';

const store = usePrizeStore();
</script>