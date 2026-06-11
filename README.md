# 🏛️ OneTap Gov - Authentication System

Welcome to the **OneTap Gov** documentation! 🚀 This project is a modern web application built with **Next.js** and **Supabase**, currently featuring a robust authentication system to keep your data safe and sound. 🔐

---

## 🛠️ Tech Stack

We use a cutting-edge stack to ensure performance and developer happiness:

*   **Frontend:** [Next.js](https://nextjs.org/) (App Router) ⚡
*   **Backend:** [FastAPI](https://fastapi.tiangolo.com/) 🚀
*   **Database & Auth:** [Supabase](https://supabase.com/) 🌲
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) 🎨
*   **Language:** [TypeScript](https://www.typescriptlang.org/) & [Python](https://www.python.org/) 📘🐍

---

## Local Setup

### Prerequisites
Install these before starting:
- Node.js 20+ and npm
- Python 3.13+
- A Supabase project
- A Gemini API key

### Clone the repository
```bash
git clone <repository-url>
cd onetap-gov
```

### Frontend dependencies
Install the Next.js app dependencies from the `frontend` folder:
```bash
npm install
```

or, from the repository root:
```bash
cd frontend
npm install
```

Frontend packages:
```text
dependencies:
- @supabase/supabase-js@^2.108.1
- next@16.2.9
- react@19.2.4
- react-dom@19.2.4

devDependencies:
- @tailwindcss/postcss@^4
- @types/node@^20
- @types/react@^19
- @types/react-dom@^19
- eslint@^9
- eslint-config-next@16.2.9
- tailwindcss@^4
- typescript@^5
```

### Backend dependencies
Create and activate a Python virtual environment, then install the backend packages:
```bash
python -m venv .venv
.\.venv\Scripts\Activate.ps1
cd backend
pip install -r requirements.txt
```

Backend packages:
```text
annotated-doc==0.0.4
annotated-types==0.7.0
anyio==4.13.0
certifi==2026.5.20
cffi==2.0.0
charset-normalizer==3.4.7
click==8.4.1
colorama==0.4.6
cryptography==48.0.1
deprecation==2.1.0
distro==1.9.0
fastapi==0.136.3
google-auth==2.53.0
google-genai==2.8.0
h11==0.16.0
h2==4.3.0
hpack==4.1.0
httpcore==1.0.9
httpx==0.28.1
hyperframe==6.1.0
idna==3.18
multidict==6.7.1
packaging==26.2
postgrest==2.31.0
propcache==0.5.2
pyasn1==0.6.3
pyasn1_modules==0.4.2
pycparser==3.0
pydantic==2.13.4
pydantic_core==2.46.4
PyJWT==2.13.0
python-dotenv==1.2.2
realtime==2.31.0
requests==2.34.2
sniffio==1.3.1
starlette==1.2.1
storage3==2.31.0
StrEnum==0.4.15
supabase==2.31.0
supabase-auth==2.31.0
supabase-functions==2.31.0
tenacity==9.1.4
typing-inspection==0.4.2
typing_extensions==4.15.0
urllib3==2.7.0
uvicorn==0.49.0
websockets==15.0.1
yarl==1.24.2
```

### Environment variables
Create `frontend/.env` with your frontend Supabase settings:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Create `backend/.env` with your backend secrets:
```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
GEMINI_API_KEY=your_gemini_api_key
```

### Run the app
In one terminal, start the frontend from the `frontend` folder:
```bash
cd frontend
npm run dev
```

In a second terminal, start the backend from the `backend` folder:
```bash
cd backend
..\.venv\Scripts\python.exe -m uvicorn main:app --reload
```

Then open http://localhost:3000 in your browser.

---

## 📂 Folder Structure

Here's a map of the territory to help you navigate the codebase like a pro: 🧭

```text
onetap-gov/
├── backend/                # 🚀 FastAPI Backend
│   ├── api/                # 🛣️ API routes and endpoints
│   ├── prompts/            # 🤖 AI prompt templates
│   ├── services/           # ⚙️ Business logic and external services
│   ├── main.py             # 🏁 Backend entry point
│   └── requirements.txt    # 📦 Python dependencies
├── frontend/              # 🌐 Next.js Frontend
│   ├── src/
│   │   ├── app/            # App Router pages
│   │   ├── lib/            # Shared frontend helpers
│   │   └── styles/         # Frontend styles
│   ├── .env              # Frontend env vars
│   ├── next-env.d.ts     # Next.js type definitions
│   ├── next.config.ts    # Frontend Next config
│   ├── package.json      # Frontend dependencies & scripts
│   ├── pnpm-lock.yaml    # Frontend pnpm lockfile
│   ├── postcss.config.mjs # Frontend PostCSS config
│   └── tsconfig.json     # Frontend TypeScript config
├── AGENTS.md               # 🤖 AI Agent documentation
├── CLAUDE.md               # 🛠️ Claude-specific instructions
├── README.md               # 🏠 Project overview
└── .gitignore              # Repository ignore rules
```

---

## 🔐 Authentication Flow

Currently, the app handles:
- **User Signup:** New users can create an account using their name, email and password.
- **User Login:** Existing users can securely log in.
- **Protected Routes:** The Dashboard is only accessible to authenticated users.

---

Happy coding! If you run into any issues, don't hesitate to check the [Supabase Docs](https://supabase.com/docs) or the [Next.js Docs](https://nextjs.org/docs). 📚✨
