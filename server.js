const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "tiktok-analytics-dashboard" });
});

// Demo analytics endpoint. Replace with an official/authorized TikTok data source
// when you connect real account data.
app.get("/api/analytics", (req, res) => {
  const username = String(req.query.username || "demo_creator").replace(/^@/, "");

  res.json({
    success: true,
    username,
    period: "Last 7 days",
    followers: 12840,
    followerChange: 7.4,
    views: 184200,
    viewsChange: 12.8,
    likes: 24600,
    likesChange: 9.2,
    comments: 1830,
    commentsChange: 5.7,
    shares: 3210,
    sharesChange: 14.1,
    bestPostingTime: "8:00 PM – 10:00 PM",
    dailyViews: [16800, 21300, 19400, 28600, 24100, 33700, 40300],
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`TikTok Analytics Dashboard running on port ${PORT}`);
});