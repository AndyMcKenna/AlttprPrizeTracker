import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePrizeStore = defineStore('prize', {
  state: () => ({
    pools: ['QuestionPack', 'QuestionPack', 'QuestionPack', 'QuestionPack', 'QuestionPack', 'QuestionPack', 'QuestionPack'] as String[],
    tree: ['Question', 'Question', 'Question'] as String[],
    stun: 'Question' as String,
    bush: ['Question', 'Question'] as String[],
    fish: 'Question' as String,
    prizePackModalIsOpen: [false, false, false, false, false, false, false] as Boolean[]
  }),
  actions: {
    openPrizePackModal(index: number)
    {
      this.prizePackModalIsOpen[index] = true;
    }
  }
})
