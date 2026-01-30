<template>
    <div class="stats">
        <h2>stats</h2>
        <table>
            <!--<thead>
                <tr>
                    <th>name</th>
                    <th>Score</th>
                </tr>
            </thead>-->
            <tbody>
                <tr v-for="(item, index) in statData" :key="index">
                    <td>{{item.stat}}</td>
                    <td>{{item.value}}</td>
                </tr>
            </tbody>
        </table>
        <p v-if="errorMessage" class="error">{{errorMessage}}</p>
    </div>
</template>
<script setup lang="ts">
    import { onMounted, ref } from "vue";

    type StatItem = {
        stat: string;
        value: string;
    }

    const statData = ref<StatItem[]>([]);
    const errorMessage = ref("");

    const url = "http://localhost:3000/api/stats";

    async function fetchStatsData() {
        try {
            const response = await fetch(url);

            if (!response.ok) throw new Error(`Server error ${response.status}`);

                const data = (await response.json()) as StatsItem[];
            statData.value = data;
        } catch (error) {
            errorMessage.value = err?.message ?? "Unknown";
        }
    }
    onMounted(() => {
        fetchStatsData();
    });

</script>

<style stats>
    .leaderboard {
        margin-top: 10px;
    }

    table {
        border-collapse: collapse;
        margin: 0 auto;
    }

    th, td {
        border: 1px solid #ccc;
    }

    .error {
        color: rebeccapurple;
    }
</style>