# 💬 Real-Time Chat Application

A full-stack modern chat application featuring real-time messaging, user authentication, and profile management. Built with a **decoupled architecture** for high performance and scalability.



## 🚀 Live Demo
* **Frontend (Vercel):** [https://chat-app-ten-livid-46.vercel.app](https://chat-app-ten-livid-46.vercel.app)
* **Backend (Render):** [https://chat-app-2u3w.onrender.com](https://chat-app-2u3w.onrender.com)

---

## ✨ Features
* **Real-time messaging:** Instant message delivery powered by **Socket.io**.
* **User Authentication:** Secure login/signup with **JWT (JSON Web Tokens)** and cookies.
* **Profile Customization:** Image upload and management via **Cloudinary**.
* **Responsive Design:** Beautiful and modern UI using **Tailwind CSS 4** and **DaisyUI**.
* **State Management:** Efficient global state handling with **Zustand**.
* **Security:** Password hashing with **Bcryptjs** and protected API routes.

---

## 🛠️ Tech Stack

### Frontend
* **React 19** & **Vite** (Fast Refresh & Optimized build).
* **Tailwind CSS 4** & **DaisyUI** (Styling).
* **Zustand** (Global State Management).
* **Lucide React** (Iconography).
* **Axios** (API requests).
* **Socket.io-client** (Real-time communication).

### Backend
* **Node.js** & **Express 5** (Server-side logic).
* **MongoDB** & **Mongoose** (Database & Schema modeling).
* **Socket.io** (WebSocket server).
* **Cloudinary** (Media storage).
* **JWT** & **Cookie-parser** (Authentication).

---

## 📁 Project Structure
This project is organized as a **Monorepo**:

```text
├── backend/          # Express API & Socket.io server
│   ├── src/
│   │   ├── lib/      # DB connection & Socket logic
│   │   ├── routes/   # API endpoints
│   │   ├── seeds/    # Database seeding scripts
│   │   └── index.js  # Entry point
├── frontend/         # React SPA
│   ├── src/
│   │   ├── store/    # Zustand stores (Auth, Chat, Theme)
│   │   ├── lib/      # Axios & Socket configs
│   │   └── components/# UI Components & Pages
```
---

## ⚙️ Local Setup

1. **Clone the repository:**
git clone [https://github.com/danilokosam/chat-app.git](https://github.com/danilokosam/chat-app.git)
cd chat-app