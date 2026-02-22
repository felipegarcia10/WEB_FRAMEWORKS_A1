import dotenv from "dotenv";
dotenv.config();

const BASE = `http://localhost:${process.env.PORT}`;

async function api(method: string, path: string, body?: any) {
    const url = `${BASE}${path}`;
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

async function main() {
    //console.log(await api("GET", "/users/699a52261592d17576372f5f"));
    console.log(await api("GET", "/users/felipemail.com"));

    //const user = await api("POST", "/users", {
    //    email: "2229nick@mail.com",
    //    name: { first: "Nick", last: "Tam" },
    //    role: "user",
    //});
    const user = await api("PUT", "/users/felipemail.com/contact", {
        email: "felipemail.com",
        comments: [{title: "working", description: "it is working!!"}],
    });
}

main().catch((err) => {
    console.log(err.message);
    process.exit(1);
})