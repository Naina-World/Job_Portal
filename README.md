# JobTrack — Job Portal

A full-stack job portal built with the **MERN stack** that connects recruiters and candidates through a role-based job recruitment platform.

Recruiters can create and manage job listings, while candidates can browse available jobs, upload resumes, and submit applications.

---

## 🚀 Features

### 👤 Authentication & Authorization

* User registration and login
* JWT-based authentication
* Secure password hashing with bcrypt
* Role-based authorization
* Separate access for:

  * **Recruiter**
  * **Candidate**
  * **Admin**
* Protected routes

### 🧑‍💼 Recruiter Features

* Recruiter dashboard
* Create job listings
* View posted jobs
* Manage job listings
* View candidates who applied
* Review candidate applications
* View uploaded resumes
* Update application status

### 👨‍💻 Candidate Features

* Candidate dashboard
* Browse available jobs
* Search jobs
* Filter jobs
* View job details
* Apply for jobs
* Upload resume
* Upload supported resume formats:

  * PDF
  * DOC
  * DOCX
* Add a cover letter
* Track submitted applications

### 📄 Resume Upload

Candidates can upload their resumes directly while applying for a job.

Supported formats:

```text
PDF
DOC
DOCX
```

Maximum file size:

```text
5 MB
```

Resume uploads are handled using **Multer**.

### 🎨 UI

* Responsive design
* Tailwind CSS
* Consistent color theme
* Mobile-friendly layout
* Clean recruiter and candidate dashboards
* Loading and error states
* Application status indicators

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript (ES6+)
* Tailwind CSS
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js
* REST APIs
* JWT
* bcryptjs
* Multer
* CORS
* dotenv

### Database

* MongoDB
* MongoDB Atlas
* Mongoose

### Development Tools

* Git
* GitHub
* VS Code
* Postman
* npm
* ESLint

---

## 📁 Project Structure

```text
JobTrack/
│
├── Client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── JobCard.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── hooks/
│   │   │   └── useAuth.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Jobs.jsx
│   │   │   ├── CreateJob.jsx
│   │   │   ├── Applications.jsx
│   │   │   └── JobApplicants.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── Server/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── jobController.js
│   │   └── applicationController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── uploadMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Job.js
│   │   └── Application.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── jobRoutes.js
│   │   └── applicationRoutes.js
│   │
│   ├── uploads/
│   │   └── resumes/
│   │
│   ├── app.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🔐 Authentication Flow

The application uses JWT-based authentication.

```text
User
 │
 ▼
Register
 │
 ▼
Login
 │
 ▼
Backend validates credentials
 │
 ▼
JWT Token
 │
 ▼
Token stored on client
 │
 ▼
Protected Routes
 │
 ├── Recruiter
 │
 └── Candidate
```

Passwords are hashed using **bcryptjs** before being stored in MongoDB.

---

## 👥 Role-Based Access

### Recruiter

```text
/dashboard
/create-job
/job-applicants
```

Recruiters can create jobs and manage applications.

### Candidate

```text
/jobs
/applications
```

Candidates can browse jobs, apply, upload resumes, and track applications.

---

## 🔄 Job Application Flow

```text
Candidate
    │
    ▼
Browse Jobs
    │
    ▼
Select Job
    │
    ▼
Click "Apply Now"
    │
    ▼
Application Form
    │
    ├── Candidate Details
    ├── Resume
    └── Cover Letter
    │
    ▼
Upload PDF/DOC/DOCX
    │
    ▼
Submit Application
    │
    ▼
Express API
    │
    ▼
Multer
    │
    ▼
Application stored
    │
    ▼
MongoDB
    │
    ▼
Recruiter reviews application
```

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint             | Description            |
| ------ | -------------------- | ---------------------- |
| POST   | `/api/auth/register` | Register a new user    |
| POST   | `/api/auth/login`    | Login user             |
| GET    | `/api/auth/me`       | Get authenticated user |

### Jobs

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/jobs`         | Get available jobs   |
| GET    | `/api/jobs/:id`     | Get job details      |
| POST   | `/api/jobs`         | Create a job         |
| GET    | `/api/jobs/my-jobs` | Get recruiter's jobs |
| PUT    | `/api/jobs/:id`     | Update job           |
| DELETE | `/api/jobs/:id`     | Delete job           |

### Applications

| Method | Endpoint                            | Description                |
| ------ | ----------------------------------- | -------------------------- |
| POST   | `/api/applications/:jobId`          | Apply for a job            |
| GET    | `/api/applications/my-applications` | Get candidate applications |
| GET    | `/api/applications/job/:jobId`      | Get applicants for a job   |
| PATCH  | `/api/applications/:id/status`      | Update application status  |

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/jobtrack.git
cd jobtrack
```

---

### 2. Install frontend dependencies

```bash
cd Client
npm install
```

---

### 3. Install backend dependencies

Open another terminal:

```bash
cd Server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `Server` directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Example

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/jobtrack
JWT_SECRET=your_secure_secret
```

**Never commit your `.env` file to GitHub.**

---

## ▶️ Run the Application

### Start Backend

From the `Server` directory:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

### Start Frontend

From the `Client` directory:

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

---

## 🧪 Testing

You can test the REST APIs using **Postman**.

Recommended testing flow:

```text
1. Register recruiter
2. Login recruiter
3. Create job
4. Register candidate
5. Login candidate
6. Browse jobs
7. Apply for a job
8. Upload resume
9. Login recruiter
10. View applicants
11. Review application
12. Update application status
```

---

## 📄 Resume Storage

Uploaded resumes are processed using Multer and stored in:

```text
Server/uploads/resumes/
```

MongoDB stores the path/reference to the uploaded resume.

For production deployment, external object storage such as **Cloudinary, AWS S3, or another persistent file-storage service** is recommended instead of relying on the local filesystem.

---

## 🔒 Security

The application includes:

* JWT authentication
* Password hashing with bcrypt
* Protected API routes
* Role-based authorization
* File type validation
* File size validation
* CORS configuration
* Environment variables for secrets

---

## 📱 Responsive Design

The frontend is designed using Tailwind CSS and supports:

* Desktop
* Tablet
* Mobile

---

## 🎯 Future Improvements

Possible improvements include:

* Email notifications
* Forgot password functionality
* Email verification
* Advanced job search
* Job categories
* Location-based search
* Salary filtering
* Recruiter profile management
* Candidate profile and resume management
* Admin dashboard
* Pagination
* Cloud-based resume storage
* Job recommendations
* Application analytics
* Real-time notifications

---

## 👨‍💻 Author

**Naina Kumari**

BCA Graduate | Full Stack Developer

### Skills Demonstrated

```text
React.js
JavaScript
Tailwind CSS
Node.js
Express.js
MongoDB
Mongoose
REST APIs
JWT Authentication
bcrypt
Multer
Git & GitHub
```

---

## ⭐ Project Highlights

**JobTrack** demonstrates practical full-stack development through:

* MERN architecture
* REST API development
* Authentication and authorization
* Role-based access control
* CRUD operations
* MongoDB database integration
* File upload handling
* Responsive frontend development
* Frontend-backend API integration
* Recruiter-candidate workflow
* Job application management

---
