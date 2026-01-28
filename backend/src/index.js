import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import { app, server } from "./lib/socket.js";
import cors from "cors";
import path from "path";

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 5000;
// Get the absolute path of the current working directory
const __dirname = path.resolve();

// Middleware to parse incoming JSON payloads
app.use(express.json());
// Middleware to parse cookies from the request headers (needed for auth tokens)
app.use(cookieParser());
// Enable CORS to allow the frontend to communicate with the backend
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://chat-app-ten-livid-46.vercel.app"
        : "http://localhost:5173",
    credentials: true,
  }),
);

// API Routes: Redirect requests to specific route handlers
app.use("/api/auth", authRoutes); // Authentication routes (login, logout, signup)
app.use("/api/messages", messageRoutes); // Messaging routes (send, receive)

// Deployment configuration for production environment
// if (process.env.NODE_ENV === "production") {
//   // Serve static files from the frontend's build folder (dist)
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   // Catch-all route: for any request that doesn't match an API route,
//   // send back the index.html file to let React Router handle the navigation.
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

// Start the integrated HTTP and WebSocket server
server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});
