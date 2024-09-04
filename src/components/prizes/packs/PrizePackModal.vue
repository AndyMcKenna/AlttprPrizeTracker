<template>
    <div v-if="store.prizePackModalIsOpen[props.propertyIndex]" class="PrizePackModal">
        <div class="Item" @click="setValue('BlueRupeePack')">
            <BlueRupeePack />
        </div>
        <div class="Item" @click="setValue('FiveArrowsPack')">
            <FiveArrowsPack />
        </div>
        <div class="Item" @click="setValue('FullMagicPack')">
            <FullMagicPack />
        </div>
        <div class="Item" @click="setValue('HeartFairyPack')">
            <HeartFairyPack />
        </div>
        <div class="Item" @click="setValue('HeartHeartPack')">
            <HeartHeartPack />
        </div>
        <div class="Item" @click="setValue('SingleBombPack')">
            <SingleBombPack />
        </div>
        <div class="Item" @click="setValue('SmallMagicPack')">
            <SmallMagicPack />
        </div>
        <div class="Item" @click="setValue('QuestionPack')">
            <QuestionPack />
        </div>
    </div>

</template>

<script setup lang="ts">
import { usePrizeStore } from '@/stores/prize';

const store = usePrizeStore();
const props = defineProps({
  propertyIndex: { type: Number, required: true }
});

function setValue(pack: String) {
    store.pools[props.propertyIndex] = pack;
    store.prizePackModalIsOpen[props.propertyIndex] = false;
}

</script>