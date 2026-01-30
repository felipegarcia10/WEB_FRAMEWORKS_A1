import express, { type Request, type Response } from "express";
import cors from "cors";

type LeaderBoardItem = {
    player: string;
    score: number;

}
type StatsItem = {
    stat: string;
    value: string;

}

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/ping", (req: Request, res: Response) => {
    res.json({ message: "OK" });
});

app.get("/api/leaderboard-summary", (req: Request, res: Response) => {
    const summaryData: LeaderBoardItem[] = [
        { player: "Spencer", score: 9999 },
        { player: "Raf", score: -9999 },
        { player: "Yeison", score: -2 },
        { player: "Pedro", score: 0 },
    ];

    res.json(summaryData);
});

app.get("/api/leaderboard", (req: Request, res: Response) => {
    const leaderboardData: LeaderBoardItem[] = [
        { player: "Spencer", score: 9999 },
        { player: "Raf", score: -9999 },
        { player: "Yeison", score: -2 },
        { player: "Pedro", score: 0 },
        { player: "Felipe", score: 1000 },
        { player: "Mateo", score: 100 },
        { player: "Majo", score: 50 },
        { player: "Erick", score: 100 },
        { player: "Luigi", score: 104 },
        { player: "Kevin", score: 88 },
    ];

    res.json(leaderboardData);
});

app.get("/api/stats", (req: Request, res: Response) => {
    const statsData: StatsItem[] = [
        {stat:"Current players", value: "7,890,569"},
        {stat:"Matches played", value: "158,904,132"},
        {stat:"Revenue", value: "0"},
    ];
    res.json(statsData);
});

app.listen(PORT, () => {
    console.log(`Backend server is running at http://localhost: ${PORT}`);
})