import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePrizeStore = defineStore('prize', {
  state: () => ({
    pools: ['QuestionPack', 'QuestionPack', 'QuestionPack', 'QuestionPack', 'QuestionPack', 'QuestionPack', 'QuestionPack'],
    tree: ['Question', 'Question', 'Question'],
    stun: 'Question',
    bush: ['Question', 'Question'],
    fish: 'Question'
  }),
  actions: {
    
  }
})
