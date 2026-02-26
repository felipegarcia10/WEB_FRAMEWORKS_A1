<template>
    <div class="Feedback-form">
        <form>
            <label>Email</label><br />
            <input id="email-input" type="text" /><br />
            <label>Title</label><br />
            <input id="title-input" type="text" /><br />
            <label>Feedback</label><br />
            <textarea id="comment-input"></textarea><br />
            <label>Accept terms and conditions</label>
            <input type="radio"/><br />
            <input id="submit-btn" type="submit" />
        </form>
    </div>
</template>
<script setup lang="ts">
    import { onMounted, ref } from "vue";


    async function api(method: string, url: string, body?: any) {

        const opts: RequestInit = {
            method,
            headers: { "content-type": "application/json" }
        };
        if (body) opts.body = JSON.stringify(body);
        console.log(opts.body);
        const res = await fetch(url, opts);
        const data = await res.json();

        if (!res.ok) {
            throw new Error(`ERROR ${res.status}`)
        }

        return data;
    }
    async function main() {
        const submitBtn = document.getElementById("submit-btn");
        submitBtn.addEventListener("click", () => {

            let email = document.getElementById("email-input").value;
            let title = document.getElementById("title-input").value;
            let description = document.getElementById("comment-input").value;
            const url = `http://localhost:3000/users/${email}/contact`;

            console.log(url);
            api("PUT", url, {
                email: email,
                comments: [{ title: title, description: description }],
            });
        });
    }

    onMounted(() => {
        main().catch((err) => {
            console.log(err.message);
            process.exit(1);
        })
        
    });
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