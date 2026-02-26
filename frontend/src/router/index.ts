import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import LandingPage from "../views/LandingPage.vue";
import AboutPage from "../views/AboutPage.vue";
import LeaderboardPage from "../views/LeaderboardPage.vue";
import FeedbackPage from "../views/FeedbackPage.vue";
import LoginPage from "../views/LoginPage.vue";

const routes: RouteRecordRaw[] = [
    { path: "/", name: "Login", component: LoginPage },
    { path: "/Home", name: "Landing", component: LandingPage },
    { path: "/About", name: "About", component: AboutPage },
    { path: "/Leaderboard", name: "Leaderboard", component: LeaderboardPage },
    { path: "/Feedback", name: "Feedback", component: FeedbackPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
