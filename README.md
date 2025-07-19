# 📝 Task Manager App

A full-stack Task Manager web application that allows users to manage their daily tasks, get real-time insights, and perform full CRUD operations with user authentication. Built using **Node.js**, **Express**, **Prisma**, **PostgreSQL**, **React**, **Redux Toolkit Query**, and styled with **TailwindCSS**.

---

## 📦 Features

### 🔐 Authentication (JWT)
- Users can **sign up** and **log in** using secure JWT-based authentication.
- Only authenticated users can access and manage their own tasks.
- Token is stored in `localStorage` and sent in Authorization headers.

### ✅ Task Management (CRUD)
- Create, update, delete, and view tasks.
- Each task includes:
  - `title` (required)
  - `description` (optional)
  - `status` (Pending, In Progress, or Done)
  - `extras` (JSON format: tags, priority, due date, etc.)

### 📊 Dashboard Insights
- View task statistics (e.g., number of pending, in-progress, and done tasks).
- Stats are dynamically fetched from the backend.

### 🎨 UI/UX
- Clean responsive UI built with **TailwindCSS**.
- Auth-protected routes with a custom `PrivateRouteWrapper`.
- Realtime feedback using **Sonner Toasts**.

---

## 🛠️ Tech Stack

| Layer        | Tools Used |
|--------------|------------|
| **Frontend** | React, Vite, Redux Toolkit Query, React Router, TypeScript, TailwindCSS |
| **Backend**  | Node.js, Express, Prisma ORM, PostgreSQL, Zod (for validation), JWT |
| **Dev Tools**| ESLint, Prettier, tsx, nodemon, concurrently |
| **API Docs** | `zod-to-openapi`, Swagger-compatible route annotations |
| **Deployment** | (Optional) Vercel for frontend and Railway/AWS Lightsail for backend |

---

## 🧱 Database Schema (Prisma)

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  avaatar   String?
  tasks     Task[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Task {
  id          Int      @id @default(autoincrement())
  title       String
  description String?
  status      Status   @default(PENDING)
  extras      Json?
  userId      Int
  user        User     @relation(fields: [userId], references: [id])
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

enum Status {
  PENDING
  IN_PROGRESS
  DONE
}