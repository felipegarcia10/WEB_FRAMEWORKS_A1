<template>
    <div class="about-page">
        <NavBar />
        <p>email: {{ userStore.email }}</p>
        <p>role: {{ userStore.role }}</p>
        <h1>About this page</h1>
        <p>this about page is about the about page</p>
        <Footer />
    </div>
</template>
<script setup lang="ts">
    import Footer from "../components/Footer.vue" 
    import NavBar from "../components/NavBar.vue" 
    import { useUserInfo } from '@/stores/userInfo'

    const userStore = useUserInfo()

</script>
<style scoped>
    .about-page {
        text-align: center;
        margin-top: 10px;
    }
</style>