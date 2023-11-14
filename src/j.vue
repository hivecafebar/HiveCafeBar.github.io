<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <main id="﹟main" style="background-color:rgb(10, 10, 10)">
    <progress class="﹟progress" value="0" max="100"></progress>
    <audio id="ID_AC_sound" preload="auto"><source src="./assets/media/AchievementUnlocked.mp3" type="audio/mpeg" /></audio>
    <audio id="ID_CC_sound" preload="auto"><source src="./assets/media/AchievementUnlocked.mp3" type="audio/mpeg" /></audio>

    <Navigation />
    <div id="﹟content" class="♹ ♹♺ ◬">
      <article id="﹟article" style="background-color:black;">
        <RouterView />
        <Footer msg="Out ambition is unlimited." />
      </article>
    </div>
  </main>
</template>

<style scoped>
header,
footer {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
