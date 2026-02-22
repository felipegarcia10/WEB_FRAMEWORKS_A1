<template>
    <div class="leaderboard">
        <h2>Leaderboard</h2>
        <table>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in leaderboardData" :key="index">
                    <td>{{item.player_name}}</td>
                    <td>{{item.score}}</td>
                </tr>
            </tbody>
        </table>
        <p v-if="errorMessage" class="error">{{errorMessage}}</p>
    </div>
</template>
<script setup lang="ts">
    import { onMounted, ref } from "vue";

    type LeaderBoardItem = {
        player_name: string;
        score: number;
    }

    const leaderboardData = ref<LeaderBoardItem[]>([]);
    const errorMessage = ref("");

    const url = "http://localhost:3000/api/leaderboard";

    async function fetchLeaderboardData() {
        try {
            const response = await fetch(url);

            if (!response.ok) throw new Error(`Server error ${response.status}`);

                const data = (await response.json()) as LeaderboardItem[];
                leaderboardData.value = data;
        } catch (error) {
            errorMessage.value = err?.message ?? "Unknown";
        }
    }
    onMounted(() => {
        fetchLeaderboardData();
    });

</script>

<style scoped>
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