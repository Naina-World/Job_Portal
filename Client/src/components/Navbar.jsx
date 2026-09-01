import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-40 bg-slate-950 border-b border-slate-800 px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">
          Job<span className="text-blue-400">Track</span>
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          {user?.role === 'candidate' && (
            <>
              <Link to="/jobs" className="text-slate-300 hover:text-blue-400 font-medium text-sm transition">
                Browse Jobs
              </Link>
              <Link to="/my-applications" className="text-slate-300 hover:text-blue-400 font-medium text-sm transition">
                My Applications
              </Link>
            </>
          )}

          {user?.role === 'recruiter' && (
            <>
              <Link to="/dashboard" className="text-slate-300 hover:text-blue-400 font-medium text-sm transition">
                Dashboard
              </Link>
              <Link to="/create-job" className="text-slate-300 hover:text-blue-400 font-medium text-sm transition">
                Post Job
              </Link>
            </>
          )}

          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold px-3 py-1.5 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full capitalize">
                {user.role}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-slate-800 hover:bg-blue-600 text-slate-200 text-sm font-medium rounded-lg transition border border-slate-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login" className="px-4 py-2 text-slate-300 hover:text-blue-400 text-sm font-medium transition">
                Login
              </Link>
              <Link to="/register" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition shadow-sm">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
