<template>
    <div class="Feedback-page">
        <h1>Feedback form</h1>
        <p>Let us know what you think</p>

        <!-- Widgets -->
        <Form />
        <Footer />
    </div>
</template>
<script setup lang="ts">
    import Form from "../components/Form.vue"
    import Footer from "../components/Footer.vue" 
</script>
<style>
    .Feedback-page {
        text-align: center;
        margin-top: 10px;
    }
</style>