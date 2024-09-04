<template>
    <div v-if="open" class="PrizeModal">
        <div class="Item" @click="setValue('GreenRupee')">
            <GreenRupee />
        </div>
        <div class="Item" @click="setValue('BlueRupee')">
            <BlueRupee />
        </div>
        <div class="Item" @click="setValue('RedRupee')">
            <RedRupee />
        </div>
        <div class="Item" @click="setValue('FiveArrows')">
            <FiveArrows />
        </div>
        <div class="Item" @click="setValue('TenArrows')">
            <TenArrows />
        </div>
        <div class="Item" @click="setValue('Fairy')">
            <Fairy />
        </div>
        <div class="Item" @click="setValue('Heart')">
            <Heart />
        </div>
        <div class="Item" @click="setValue('SmallMagic')">
            <SmallMagic />
        </div>
        <div class="Item" @click="setValue('FullMagic')">
            <FullMagic />
        </div>
        <div class="Item" @click="setValue('SingleBomb')">
            <SingleBomb />
        </div>
        <div class="Item" @click="setValue('FourBombs')">
            <FourBombs />
        </div>
        <div class="Item" @click="setValue('EightBombs')">
            <EightBombs />
        </div>
    </div>

</template>

<script setup lang="ts">
import { usePrizeStore } from '@/stores/prize';

const store = usePrizeStore();
const props = defineProps({
  open: { type: Boolean, required: true },
  stateProperty: { type: String, required: true },
  propertyIndex: { type: Number, required: false }
});

function setValue(newValue: String) {
  if(props.stateProperty == "tree" && props.propertyIndex != null)
  {
    store.tree[props.propertyIndex] = newValue;
  }
  if(props.stateProperty == "bush" && props.propertyIndex != null)
  {
    store.bush[props.propertyIndex] = newValue;
  }
  if(props.stateProperty == "stun")
  {
    store.stun = newValue;
  }
  if(props.stateProperty == "fish")
  {
    store.fish = newValue;
  }
}
</script>