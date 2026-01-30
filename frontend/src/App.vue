<script setup lang="ts">
    //export default {
    //    name:"App"
    //}

</script>

<template>
  <div id="app">
      <header>
          <nav>
              <ul>
                  <li>
                    <router-link to="/">Home</router-link>
                  </li>
                  <li>
                    <router-link to="/about">About</router-link>
                  </li>
                  <li>
                    <router-link to="/leaderboard">Leaderboard</router-link>
                  </li>
                  <li>
                    <router-link to="/Feedback">Feedback</router-link>
                  </li>
                 

              </ul>
          </nav>
      </header>
      <main>
          <router-view/>
      </main>
  </div>
</template>

<style scoped></style>
