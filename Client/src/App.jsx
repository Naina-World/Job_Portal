import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { Layout } from './components/Layout';
import { JobApplicants } from './pages/JobApplicants';

// Public Pages
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

// Job Pages
import { Jobs } from './pages/Jobs';
import { Dashboard } from './pages/Dashboard';
import { CreateJob } from './pages/CreateJob';
import { CandidateDashboard } from './pages/CandidateDashboard';

const Unauthorized = () => (
  <div className="flex items-center justify-center min-h-screen text-blue-700 font-semibold text-lg">
    403 - Access Denied
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Recruiter Routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute allowedRoles={['recruiter']}>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/create-job" 
          element={
            <ProtectedRoute allowedRoles={['recruiter']}>
              <Layout>
                <CreateJob />
              </Layout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/jobs/:jobId/applicants" 
          element={
            <ProtectedRoute allowedRoles={['recruiter']}>
              <Layout>
                <JobApplicants />
              </Layout>
            </ProtectedRoute>
          } 
        />

        {/* Candidate Routes */}
        <Route 
          path="/jobs" 
          element={
            <ProtectedRoute allowedRoles={['candidate']}>
              <Layout>
                <Jobs />
              </Layout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/my-applications" 
          element={
            <ProtectedRoute allowedRoles={['candidate']}>
              <Layout>
                <CandidateDashboard />
              </Layout>
            </ProtectedRoute>
          } 
        />

        {/* Fallbacks */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;