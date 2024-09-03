<script setup lang="ts">
import { usePrizeStore } from '@/stores/prize';

const store = usePrizeStore();
</script>

<template>
  <main>
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
        <div class="clear"></div>
        <div class="icon GreenLeever"></div>
        <div class="icon BushStal"></div>
        <div class="icon Crab"></div>
        <div class="icon GreenZirro"></div>
        <div class="icon Moblin"></div>
        <div class="icon PurpleLeever"></div>
        <div class="icon QuakeSlime"></div>
        <div class="icon Snake"></div>
        <div class="icon Toppo"></div>
      </div>
      <div class="ItemPrize TwoLines Selectable">
        <component :is="store.pools[0]"></component>
      </div>
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
        <div class="clear"></div>
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
      <div class="ItemPrize TwoLines Selectable">
        <component :is="store.pools[1]"></component>
      </div>
    </div>

    <div class="TrackedItem">
      <div class="EnemyPool OneLine">
        <div class="icon Buzzblob"></div>
        <div class="icon Gibdo"></div>
        <div class="icon Pengator"></div>
        <div class="icon RedSpearGuard"></div>
      </div>
      <div class="ItemPrize OneLine Selectable">
        <component :is="store.pools[2]"></component>
      </div>
    </div>

    <div class="TrackedItem">
      <div class="EnemyPool OneLine">
        <div class="icon BombGuard"></div>
        <div class="icon Hinox"></div>
        <div class="icon StalfosKnight"></div>
        <div class="icon Ku"></div>
        <div class="icon FloatingStal"></div>
        <div class="icon Sluggula"></div>
        <div class="icon Zora"></div>
      </div>
      <div class="ItemPrize OneLine Selectable">
        <component :is="store.pools[3]"></component>
      </div>
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
      <div class="ItemPrize OneLine Selectable">
        <component :is="store.pools[4]"></component>
      </div>
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
        <div class="clear"></div>
        <div class="icon GreenSlime"></div>
        <div class="icon RedSlime"></div>
        <div class="icon YellowSlime"></div>
        <div class="icon Vulture"></div>
      </div>
      <div class="ItemPrize TwoLines Selectable">
        <component :is="store.pools[5]"></component>
      </div>
    </div>

    <div class="TrackedItem">
      <div class="EnemyPool OneLine">
        <div class="icon BlueZirro"></div>
        <div class="icon BluesainBolt"></div>
        <div class="icon FloatingStal"></div>
        <div class="icon Keese"></div>
        <div class="icon Lynel"></div>
        <div class="icon MiniHelmasaur"></div>
        <div class="icon Pokey"></div>
        <div class="icon RedBushSpearGuard"></div>
        <div class="icon SnapDragon"></div>
        <div class="icon Stalrope"></div>
        <div class="icon YellowStalfos"></div>
      </div>
      <div class="ItemPrize OneLine Selectable">
        <component :is="store.pools[6]"></component>
      </div>
    </div>

    <div class="TrackedItem Smaller">
      <div class="EnemyPool OneLine">
        <div class="icon Tree"></div>
      </div>
      <div class="ItemPrize OneLine">
        <component :is="store.tree[0]"></component>
        <component :is="store.tree[1]"></component>
        <component :is="store.tree[2]"></component>
      </div>
    </div>

    <div class="TrackedItem Smaller">
      <div class="EnemyPool OneLine">
        <div class="icon BlueBoomerang"></div>
        <div class="icon RedBoomerang"></div>
        <div class="icon Hookshot"></div>
      </div>
      <div class="ItemPrize OneLine Selectable">
        <component :is="store.stun"></component>
      </div>
    </div>
    
    <div class="TrackedItem Smaller">
      <div class="EnemyPool OneLine">
        <div class="icon BushCrab"></div>
      </div>
      <div class="ItemPrize OneLine">
        <component :is="store.bush[0]"></component>
        <component :is="store.bush[1]"></component>
      </div>
    </div>

    <div class="TrackedItem Smaller">
      <div class="EnemyPool OneLine">
        <div class="icon Fish"></div>
      </div>
      <div class="ItemPrize OneLine Selectable">
        <component :is="store.fish"></component>
      </div>
    </div>
  </main>
</template>
