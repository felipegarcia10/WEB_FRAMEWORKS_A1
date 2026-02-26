<template>
    <div class="leaderboard-page">
        <NavBar />
        <p>email: {{ userStore.email }}</p>
        <p>role: {{ userStore.role }}</p>
        <h1>Leaderboard</h1>
        <p>If you are not here, you suck</p>

        <Leaderboard />
        <Stats />
        <Footer />

    </div>

</template>
<script setup lang="ts">
    import Leaderboard from "../components/Leaderboard.vue" 
    import Stats from "../components/Stats.vue" 
    import Footer from "../components/Footer.vue"
    import NavBar from "../components/NavBar.vue" 
    import { useUserInfo } from '@/stores/userInfo'

    const userStore = useUserInfo()

</script>
<style scoped>
    .leaderboard-page {
        text-align: center;
        margin-top: 10px;
    }
</style>