<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import router from './router/index'
import Header from './components/Header.vue'

function startTracking() {
  console.log(router);
  const routeData = router.resolve({name: 'track'});
  window.open(routeData.href, '_blank', 'popup,width=480,height=700');
}
</script>

<template>
  <header v-if="router.currentRoute.value.name != 'track' && router.currentRoute.value.name != 'tree'">
    <img alt="Vue logo" class="logo" src="@/assets/link_too_many_items.jpg" width="200" />

    <div class="wrapper">
      <Header msg="ALTTPR Prize Pack Tracker" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>        
        <a @click="startTracking()" href="#">Track</a>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

#app {
  margin: 0;
  padding: 20px;
}

main {
  text-align: center;
  display: inline-block;
  width: 100%;
}

body{ overflow-x:auto;overflow-y:auto; }
</style>
