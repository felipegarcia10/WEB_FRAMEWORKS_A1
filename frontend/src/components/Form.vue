<template>
    <div class="Feedback-form">
        <form>
            <label>Email</label><br />
            <input type="text" /><br />
            <label>Title</label><br />
            <input type="text" /><br />
            <label>Feedback</label><br />
            <textarea></textarea><br />
            <label>Accept terms and conditions</label>
            <input type="radio"/><br />
            <input type="submit" />
        </form>
    </div>
</template>
<script setup lang="ts">

</script>
<style>
    .Feedback-form {
        /* display: flex;
        flex-direction: column;*/
        text-align: center;
        vertical-align: middle;
    }
    form {
        display: inline-block;
        vertical-align: middle;
        
    }
</style>