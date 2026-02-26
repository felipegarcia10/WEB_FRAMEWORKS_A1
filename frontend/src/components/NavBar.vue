<template>
    <header>
        <nav>
            <ul id="navbar">
                <li>
                    <router-link to="/Home">Home</router-link>
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
</template>
<script setup lang="ts">

</script>
<style scoped>
    ul li {
        text-align: left;
    }

</style>