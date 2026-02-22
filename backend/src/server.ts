import express, { type Request, type Response } from "express";
import cors from "cors";

import mysql from "mysql2/promise";
import { connectDb } from "./db"


import userRoutes from "./routes/users";
import "dotenv/config";
//import dotenv from "dotenv";
//dotenv.config();

type LeaderBoardItem = {
    player_name: string;
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

app.get("/", (req, res) => res.json({ ok: true, service: "school-api" }));

app.use("/users", userRoutes);

async function start() {
    try {
        await connectDb(process.env.MONGODB_URI);
        const port = Number(process.env.PORT);
        app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
    } catch (err: any) {
        console.error("Startup error", err?.message);
        process.exit(1);
    }
}

const pool = mysql.createPool({
    host: process.env.DB_HOST ?? "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10
});

async function DBConection() {
    const db = await mysql.createConnection({
        host: process.env.DB_HOST ?? "localhost",
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });

    const [rows] = await db.execute(
        "SELECT player_name, score FROM leaderboard ORDER BY score DESC;"
    );

   // console.log(rows);
    await db.end();
    return rows;
}

app.get("/api/ping", (req: Request, res: Response) => {
    res.json({ message: "OK" });
});

app.get("/api/leaderboard-summary", (req: Request, res: Response) => {
    const summaryData: LeaderBoardItem[] = [
        { player_name: "Spencer", score: 9999 },
        { player_name: "Raf", score: -9999 },
        { player_name: "Yeison", score: -2 },
        { player_name: "Pedro", score: 0 },
    ];

    res.json(summaryData);
});

app.get("/api/leaderboard", async (req: Request, res: Response) => {


    const leaderboardData: LeaderBoardItem[] = await DBConection();
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

start();