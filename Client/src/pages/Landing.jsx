import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto w-full px-6 py-6 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-lg">
            J
          </div>
          <span className="text-xl font-bold tracking-tight text-white">JobPortal</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm font-medium text-slate-300 hover:text-white transition px-4 py-2"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition shadow-sm"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 py-20 text-center flex-grow flex flex-col justify-center items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
          🚀 Next-Gen Full Stack Hiring Platform
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Connect Top Talent with <span className="text-blue-500">Industry Leaders</span>
        </h1>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl">
          A seamless ecosystem for recruiters to manage listings and applicants, and for candidates to discover roles that match their exact career ambitions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            to="/register"
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition shadow-lg shadow-blue-600/20 text-center"
          >
            Create Free Account
          </Link>
          <Link
            to="/login"
            className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold rounded-xl transition text-center"
          >
            Sign In to Dashboard
          </Link>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 text-left w-full">
          <div className="bg-slate-800/50 border border-slate-800 p-6 rounded-2xl">
            <div className="text-blue-400 font-bold text-lg mb-2">⚡ Role-Based Access</div>
            <p className="text-sm text-slate-400">Secure workflows tailored specifically for recruiters and active job seekers.</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-800 p-6 rounded-2xl">
            <div className="text-blue-400 font-bold text-lg mb-2">📊 Live Dashboards</div>
            <p className="text-sm text-slate-400">Instant tracking of job postings, application statuses, and reviewer pipelines.</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-800 p-6 rounded-2xl">
            <div className="text-blue-400 font-bold text-lg mb-2">🔒 JWT Security</div>
            <p className="text-sm text-slate-400">Protected routing and persistent backend authentication out of the box.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        JobPortal Full Stack Platform &copy; 2026. All rights reserved.
      </footer>
    </div>
  );
};