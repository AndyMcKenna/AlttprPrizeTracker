<template>
    <div class="TrackedItem">
      <div class="EnemyPool TwoLines">
        <div class="icon BlueSwordGuard"></div>
        <div class="icon GreenSwordGuard"></div>
        <div class="icon BlueTarosu"></div>
        <div class="icon RedTarous"></div>
        <div class="icon GreenDaggerGuard"></div>
        <div class="icon RedSpearShieldGuard"></div>
        <div class="icon GreenSpearGuard"></div>
        <div class="icon SkeletalWizzrobe"></div>
        <div class="icon Wizzrobe"></div>
        <div class="icon GreenLeever"></div>
        <div class="icon BushStal"></div>
        <div class="icon Crab"></div>
        <div class="icon GreenZirro"></div>
        <div class="icon Moblin"></div>
        <div class="icon PurpleLeever"></div>
        <div class="icon QuakeSlime"></div>
        <div class="icon Snake"></div>
        <div class="icon Toppo" title="Prize only given after talking to them after destroying the grass underneath"></div>
      </div>      
      <div class="ItemPrize TwoLines Selectable" @click="store.openPrizePackModal(0)">
        <component :is="store.pools[0]"></component>
      </div>      
      <PrizePackModal :propertyIndex="Number(0)" />
    </div>

    <div class="TrackedItem">
      <div class="EnemyPool TwoLines">
        <div class="icon BallAndChainGuard"></div>
        <div class="icon BlueDevalant"></div>
        <div class="icon RedDevalant"></div>
        <div class="icon MiniMoldorm"></div>
        <div class="icon RedHardhatBeetle"></div>
        <div class="icon Ropa"></div>
        <div class="icon Geldman"></div>
        <div class="icon Buzz"></div>
        <div class="icon Hover"></div>
        <div class="icon Kyune"></div>
        <div class="icon Octorok"></div>
        <div class="icon Pikit"></div>
        <div class="icon Popo"></div>
        <div class="icon Rat"></div>
        <div class="icon BlueTektite"></div>
        <div class="icon RedTektite"></div>
        <div class="icon Terrorpin"></div>
      </div>      
      <div class="ItemPrize TwoLines Selectable" @click="store.openPrizePackModal(1)">
        <component :is="store.pools[1]"></component>
      </div>
      <PrizePackModal :propertyIndex="Number(1)" />
    </div>

    <div class="TrackedItem">
      <div class="EnemyPool OneLine">
        <div class="icon Buzzblob"></div>
        <div class="icon Gibdo"></div>
        <div class="icon Pengator"></div>
        <div class="icon RedSpearGuard"></div>
        <div class="icon FrozenHammer" title="Any enemy frozen and then hammered will count towards this pack and have a drop rate of 100%"></div>
      </div>
      <div class="ItemPrize OneLine Selectable" @click="store.openPrizePackModal(2)">
        <component :is="store.pools[2]"></component>
      </div>
      <PrizePackModal :propertyIndex="Number(2)" />
    </div>

    <div class="TrackedItem">
      <div class="EnemyPool OneLine">
        <div class="icon BombGuard"></div>
        <div class="icon Hinox"></div>
        <div class="icon StalfosKnight"></div>
        <div class="icon Ku"></div>
        <div class="icon FloatingStal" title="Only in the light world"></div>
        <div class="icon Sluggula"></div>
        <div class="icon Zora"></div>
        <div class="DropRate">100%</div>
      </div>
      <div class="ItemPrize OneLine Selectable" @click="store.openPrizePackModal(3)">
        <component :is="store.pools[3]"></component>
      </div>
      <PrizePackModal :propertyIndex="Number(3)" />
    </div>

    <div class="TrackedItem">
      <div class="EnemyPool OneLine">
        <div class="icon ArmosStatue"></div>
        <div class="icon BlueArcher"></div>
        <div class="icon GreenArcher"></div>
        <div class="icon GreenEyegore"></div>
        <div class="icon GreenMimic"></div>
        <div class="icon RedEyegore"></div>
        <div class="icon RedMimic"></div>
      </div>
      <div class="ItemPrize OneLine Selectable" @click="store.openPrizePackModal(4)">
        <component :is="store.pools[4]"></component>
      </div>
      <PrizePackModal :propertyIndex="Number(4)" />
    </div>

    <div class="TrackedItem">
      <div class="EnemyPool TwoLines">
        <div class="icon BlueHardhatBeetle"></div>
        <div class="icon BlueStalfos"></div>
        <div class="icon RedStalfos"></div>
        <div class="icon BlueZazak"></div>
        <div class="icon RedZazak"></div>
        <div class="icon Crow"></div>
        <div class="icon Poe"></div>
        <div class="icon GreenKodongo"></div>
        <div class="icon RedKodongo"></div>
        <div class="icon BlueBari"></div>
        <div class="icon RedBari"></div>
        <div class="icon GreenSlime"></div>
        <div class="icon RedSlime"></div>
        <div class="icon YellowSlime"></div>
        <div class="icon Vulture"></div>
      </div>
      <div class="ItemPrize TwoLines Selectable" @click="store.openPrizePackModal(5)">
        <component :is="store.pools[5]"></component>
      </div>
      <PrizePackModal :propertyIndex="Number(5)" />
    </div>

    <div class="TrackedItem">
      <div class="EnemyPool OneLine">
        <div class="icon BlueZirro"></div>
        <div class="icon BluesainBolt"></div>
        <div class="icon FloatingStal" title="Only in the dark world"></div>
        <div class="icon Keese" title="Only in the dark world"></div>
        <div class="icon Lynel"></div>
        <div class="icon MiniHelmasaur"></div>
        <div class="icon Pokey"></div>
        <div class="icon RedBushSpearGuard"></div>
        <div class="icon SnapDragon"></div>
        <div class="icon Stalrope"></div>
        <div class="icon YellowStalfos"></div>
      </div>
      <div class="ItemPrize OneLine Selectable" @click="store.openPrizePackModal(6)">
        <component :is="store.pools[6]"></component>
      </div>
      <PrizePackModal :propertyIndex="Number(6)" />
    </div>

    <div class="TrackedItem Smaller">
      <div class="EnemyPool OneLine">
        <div class="icon Tree" @click="viewTreeGuide()" title="View Tree Pull Locations"></div>
      </div>
      <div class="ItemPrize OneLine">
        <component :is="store.tree[0]" stateProperty="tree" :propertyIndex="Number(0)"></component>
        <component :is="store.tree[1]" stateProperty="tree" :propertyIndex="Number(1)"></component>
        <component :is="store.tree[2]" stateProperty="tree" :propertyIndex="Number(2)"></component>
      </div>
    </div>

    <div class="TrackedItem Smaller">
      <div class="EnemyPool OneLine">
        <div class="icon BlueBoomerang"></div>
        <div class="icon RedBoomerang"></div>
        <div class="icon Hookshot"></div>
      </div>
      <div class="ItemPrize OneLine Selectable">
        <component :is="store.stun" stateProperty="stun"></component>
      </div>
    </div>
    
    <div class="TrackedItem Smaller">
      <div class="EnemyPool OneLine">
        <div class="icon BushCrab"></div>
      </div>
      <div class="ItemPrize OneLine">
        <component :is="store.bush[0]" stateProperty="bush" :propertyIndex="Number(0)"></component>
        <component :is="store.bush[1]" stateProperty="bush" :propertyIndex="Number(1)"></component>
      </div>
    </div>

    <div class="TrackedItem Smaller">
      <div class="EnemyPool OneLine">
        <div class="icon Fish"></div>
      </div>
      <div class="ItemPrize OneLine Selectable">
        <component :is="store.fish" stateProperty="fish"></component>
      </div>
    </div>
</template>

<script setup lang="ts">
import { usePrizeStore } from '@/stores/prize';
import router from '../router/index'

const store = usePrizeStore();
document.title = "Prize Tracker";

function viewTreeGuide() {
  const routeData = router.resolve({name: 'tree'});
  window.open(routeData.href, '_blank', 'popup,width=1215,height=870');
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}

body{ overflow-x:hidden;overflow-y:hidden; }
</style>