<template>
    <div class="Login-page">
        <h1>Login</h1>
        <p>welcome!</p>

        <!-- Widgets -->
        <LoginForm />
        <Footer />
    </div>
</template>
<script setup lang="ts">
    import LoginForm from "../components/LoginForm.vue"
    import Footer from "../components/Footer.vue"
</script>
<style>
    .Login {
        text-align: center;
        margin-top: 10px;
    }
</style>