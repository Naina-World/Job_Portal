import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '@/services/api';

export const Dashboard = () => {
  const [myJobs, setMyJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMyJobs = async () => {
    try {
      const res = await api.get('/jobs/my-jobs');
      setMyJobs(res.data);
    } catch (err) {
      console.error("Failed to fetch MongoDB job documents:", err);
      setError("Unable to load your job listings from the database. Please verify your recruiter session.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this job document from MongoDB?')) return;
    try {
      await api.delete(`/jobs/${id}`);
      setMyJobs(myJobs.filter((job) => job._id !== id));
    } catch (err) {
      console.error("Delete operation failed:", err);
    }
  };

  useEffect(() => {
    fetchMyJobs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-slate-500 font-medium text-sm">Syncing with MongoDB collections...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
          <h2 className="text-lg font-bold text-red-800 mb-2">Database Sync Warning</h2>
          <p className="text-sm text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => { setLoading(true); setError(null); fetchMyJobs(); }}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg transition"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-slate-200">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Recruiter Dashboard</h1>
          <p className="text-slate-500 text-sm mt-1">Manage live job listings retrieved dynamically from your MongoDB database</p>
        </div>
        <Link
          to="/create-job"
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-600/20 transition flex items-center gap-2"
        >
          <span>+</span> Post New Job
        </Link>
      </div>

      {myJobs.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center shadow-sm">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            📂
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-1">No Active Listings Found</h3>
          <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6">Your MongoDB database currently has no job documents associated with your recruiter profile.</p>
          <Link 
            to="/create-job" 
            className="inline-flex px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition shadow-sm"
          >
            Create Your First Listing
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myJobs.map((job) => (
            <div key={job._id} className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start gap-2 mb-3">
                  <h3 className="text-lg font-bold text-slate-900 line-clamp-1">{job.title}</h3>
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider shrink-0">
                    {job.jobType}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-y-1 text-xs text-slate-500 font-medium mb-4 gap-x-3">
                  <span>📍 {job.location}</span>
                  <span>💰 {job.salary}</span>
                </div>
                <p className="text-sm text-slate-600 line-clamp-3 mb-6 leading-relaxed">{job.description}</p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <Link
                  to={`/dashboard/jobs/${job._id}/applicants`}
                  className="flex-1 text-center py-2.5 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 text-xs font-semibold rounded-xl transition"
                >
                  View Applicants
                </Link>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="px-3.5 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold rounded-xl transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};