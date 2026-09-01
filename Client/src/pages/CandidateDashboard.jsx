import { useEffect, useState } from 'react';
import api from '@/services/api';

export const CandidateDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyApplications = async () => {
      try {
        const res = await api.get('/applications/my-applications');
        setApplications(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMyApplications();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Accepted':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Rejected':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'Interviewing':
        return 'bg-indigo-100 text-indigo-700 border-indigo-200';
      default:
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    }
  };

  if (loading) return <div className="text-center py-10 font-medium">Loading applications...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">My Applications</h1>
        <p className="text-slate-500">Track the status of roles you have applied for</p>
      </div>

      {applications.length === 0 ? (
        <div className="bg-white rounded-xl p-8 text-center border border-slate-100 shadow-sm">
          <p className="text-slate-500 mb-4">You haven't applied to any jobs yet.</p>
          <a href="/jobs" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            Browse Jobs
          </a>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-500 uppercase">
                <th className="py-4 px-6">Job Title</th>
                <th className="py-4 px-6">Company</th>
                <th className="py-4 px-6">Date Applied</th>
                <th className="py-4 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {applications.map((app) => (
                <tr key={app._id} className="hover:bg-slate-50 transition">
                  <td className="py-4 px-6 font-semibold text-slate-800">{app.job?.title}</td>
                  <td className="py-4 px-6 text-slate-600">{app.job?.company}</td>
                  <td className="py-4 px-6 text-slate-400">
                    {new Date(app.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(app.status)}`}>
                      {app.status || 'Pending'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};