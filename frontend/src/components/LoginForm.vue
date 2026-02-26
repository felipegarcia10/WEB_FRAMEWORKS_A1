<template>
    <div class="Login-form">
        <form>
            <label>Email</label><br />
            <input id="email-input" type="text" /><br />
            <label>Password</label><br />
            <input id="password-input" type="text" /><br />
            <input id="submit-btn" type="button" value="Login"/>
            <p id="email-validation"></p>
        </form>
    </div>
</template>
<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { useRouter } from 'vue-router';
    import { useUserInfo } from '@/stores/userInfo'

    const router = useRouter();
    const userStore = useUserInfo()

    async function api(method: string, url: string, body?: any) {

        const opts: RequestInit = {
            method,
            headers: { "content-type": "application/json" }
        };
        if (body) opts.body = JSON.stringify(body);
        const res = await fetch(url, opts);
        const data = await res.json();


        if (!res.ok) {
            throw new Error(`ERROR ${res.status}`)
        }

        
        return data;
    }

    async function HandleLogin(url: string, email: string){

        try {
        const data = await api("GET", url);

            if (data[0].email == email) {
                router.push('/Home');
                userStore.setValues(email, data[0].role);

            }

        }
        catch (e: any) {
            console.log("invalid user");
        }

    }

    function main() {
        const submitBtn = document.getElementById("submit-btn");
        submitBtn.addEventListener("click", () => {

            let email = document.getElementById("email-input").value;
            const url = `http://localhost:3000/users/${email}`;

            HandleLogin(url,email);
            //if (HandleLogin(url)) {

                //router.push('/Home');
            //}
        });
    }

    onMounted(() => {

        main();
        //main().catch((err) => {
        //    console.log(err.message);
        //    process.exit(1);
        //})

    });
</script>
<style>
    .Login-form {
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