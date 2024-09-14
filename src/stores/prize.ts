import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePrizeStore = defineStore('prize', {
  state: () => ({
    pools: ['QuestionPack', 'QuestionPack', 'QuestionPack', 'QuestionPack', 'QuestionPack', 'QuestionPack', 'QuestionPack'] as String[],
    tree: ['Question', 'Question', 'Question'] as String[],
    stun: 'Question' as String,
    bush: ['Question', 'Question'] as String[],
    fish: 'Question' as String,
    prizePackModalIsOpen: false as Boolean,
    prizePackPropertyIndex: 0 as number,
    prizeModalIsOpen: false as Boolean,
    singlePrizePropertyName: '' as String,
    singlePrizePropertyIndex: 0 as number
  }),
  actions: {
    openPrizePackModal(index: number) {
      this.prizePackModalIsOpen = true;
      this.prizePackPropertyIndex = index;
    },
    setPrizePack(prizePack: String) {
      this.pools[this.prizePackPropertyIndex] = prizePack;
      this.prizePackModalIsOpen = false;
    },
    openPrizeModal(stateProperty: String, propertyIndex?: number|undefined) {
      console.log(`Open Prize: ${stateProperty}, ${propertyIndex}`);
      this.prizeModalIsOpen = true;
      this.singlePrizePropertyName = stateProperty;
      if(propertyIndex !== undefined) {
        this.singlePrizePropertyIndex = propertyIndex;
      }
    },

    setSinglePrize(prize: String) {
      console.log(`Set Prize: ${prize}`);
      if(this.singlePrizePropertyName == "tree")
      {
        this.tree[this.singlePrizePropertyIndex] = prize;
      }
      if(this.singlePrizePropertyName == "bush")
      {
        this.bush[this.singlePrizePropertyIndex] = prize;
      }
      if(this.singlePrizePropertyName == "stun")
      {
        this.stun = prize;
      }
      if(this.singlePrizePropertyName == "fish")
      {
        this.fish = prize;
      }
    
      this.singlePrizePropertyIndex = 0;
      this.prizeModalIsOpen = false;
    }
  }
})
