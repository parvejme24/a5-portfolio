# Personal Portfolio & Blog Website

## 🚀 Live Demo
[🔗 mdparvej.vercel.app](https://mdparvej.vercel.app/)

## 📂 Repository
[🔗 GitHub Repository](https://github.com/parvejme24/a5-portfolio.git)

## 🎯 Project Overview
This project is a personal portfolio and blog website built with **Next.js** and **TypeScript**, featuring dynamic routing, authentication, API integration, and a fully functional dashboard for managing blogs, projects, and messages.

## 🛠️ Features
### 🌍 Public Pages
- **Home Page (`/`)**  
  - Portfolio introduction (name, bio, profile picture)
  - Skills section (icons/skill bar)
  - Featured projects (static/API-based)
  - Resume download button
- **Projects Page (`/projects`)**  
  - Displays all projects with images, descriptions, and links
  - Clicking a project opens its detailed page (`/projects/[id]`)
- **Blog Page (`/blog`)**  
  - Displays a list of blogs (fetched from API/JSON file)
  - Clicking a blog opens a detailed blog page (`/blog/[id]`)
- **Contact Page (`/contact`)**  
  - Contact form (name, email, message)
  - Messages saved to database/local storage

### 🔒 Dashboard (Authenticated Users Only)
- **Login (`/dashboard`)**  
  - Social authentication using **NextAuth**
- **Blog Management (`/dashboard/blogs`)**  
  - Create, read, update, delete (CRUD) blogs
  - Fields: title, content, image, category
- **Project Management (`/dashboard/projects`)**  
  - CRUD operations for projects
  - Fields: title, description, image, live link
- **Message Management (`/dashboard/messages`)**  
  - View messages from contact form

## 🔧 Tech Stack
### Frontend
- **Next.js** (TypeScript)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **NextAuth** (Authentication)
- **Markdown Support** (For blogs)

### Backend
- **Node.js & Express.js** (REST API)
- **MongoDB & Mongoose** (Database)
- **Next.js API Routes** (Optional API integration)

### Deployment
- **Vercel** (Frontend & Backend)

## 📜 Installation & Setup
```bash
# Clone the repository
git clone https://github.com/parvejme24/a5-portfolio.git
cd a5-portfolio

# Install dependencies
yarn install  # or npm install

# Create a .env file and add environment variables
NEXT_PUBLIC_API_URL=your_backend_url
NEXTAUTH_URL=http://localhost:3000
database_url=your_mongodb_connection_string

# Start the development server
yarn dev  # or npm run dev
```

## 🏗️ Folder Structure
```
📂 a5-portfolio
├── 📂 components    # Reusable UI components
├── 📂 pages         # Next.js pages
│   ├── 📂 api      # API routes
│   ├── 📂 blog     # Blog pages
│   ├── 📂 dashboard # Admin dashboard
│   ├── 📂 projects  # Project pages
│   └── index.tsx   # Home page
├── 📂 public        # Static assets
├── 📂 styles        # Tailwind/global styles
├── 📂 utils         # Helper functions
└── 📜 README.md     # Project documentation
```

---
### 🛠️ Developed by [MD Parvej](https://mdparvej.vercel.app/)
