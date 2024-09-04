import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import BlueRupeePack from './components/prizes/packs/BlueRupeePack.vue'
import FiveArrowsPack from './components/prizes/packs/FiveArrowsPack.vue'
import FullMagicPack from './components/prizes/packs/FullMagicPack.vue'
import HeartFairyPack from './components/prizes/packs/HeartFairyPack.vue'
import HeartHeartPack from './components/prizes/packs/HeartHeartPack.vue'
import QuestionPack from './components/prizes/packs/QuestionPack.vue'
import SingleBombPack from './components/prizes/packs/SingleBombPack.vue'
import SmallMagicPack from './components/prizes/packs/SmallMagicPack.vue'

import BlueRupee from './components/prizes/BlueRupee.vue'
import EightBombs from './components/prizes/EightBombs.vue'
import Fairy from './components/prizes/Fairy.vue'
import FiveArrows from './components/prizes/FiveArrows.vue'
import FourBombs from './components/prizes/FourBombs.vue'
import FullMagic from './components/prizes/FullMagic.vue'
import GreenRupee from './components/prizes/GreenRupee.vue'
import Heart from './components/prizes/Heart.vue'
import Question from './components/prizes/Question.vue'
import RedRupee from './components/prizes/RedRupee.vue'
import SingleBomb from './components/prizes/SingleBomb.vue'
import SmallMagic from './components/prizes/SmallMagic.vue'
import TenArrows from './components/prizes/TenArrows.vue'

import PrizeModal from './components/prizes/PrizeModal.vue'

const app = createApp(App)

app.component('BlueRupeePack', BlueRupeePack)
   .component('FiveArrowsPack', FiveArrowsPack)
   .component('FullMagicPack', FullMagicPack)
   .component('HeartFairyPack', HeartFairyPack)
   .component('HeartHeartPack', HeartHeartPack)
   .component('QuestionPack', QuestionPack)
   .component('SingleBombPack', SingleBombPack)
   .component('SmallMagicPack', SmallMagicPack)
   .component('BlueRupee', BlueRupee)
   .component('EightBombs', EightBombs)
   .component('Fairy', Fairy)
   .component('FiveArrows', FiveArrows)
   .component('FourBombs', FourBombs)
   .component('FullMagic', FullMagic)
   .component('GreenRupee', GreenRupee)
   .component('Heart', Heart)
   .component('Question', Question)
   .component('RedRupee', RedRupee)
   .component('SingleBomb', SingleBomb)
   .component('SmallMagic', SmallMagic)
   .component('TenArrows', TenArrows)
   .component('PrizeModal', PrizeModal)

app.use(createPinia())
app.use(router)

app.mount('#app')
