import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '@/services/api';

export const JobApplicants = () => {
  const { jobId } = useParams();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await api.get(`/applications/job/${jobId}`);
        setApplications(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchApplicants();
  }, [jobId]);

  const handleStatusChange = async (applicationId, newStatus) => {
    setUpdatingId(applicationId);
    try {
      await api.patch(`/applications/${applicationId}/status`, { status: newStatus });
      setApplications((prev) =>
        prev.map((app) =>
          app._id === applicationId ? { ...app, status: newStatus } : app
        )
      );
    } catch (err) {
      console.error('Failed to update status', err);
    } finally {
      setUpdatingId(null);
    }
  };

  const statusColors = {
    Pending: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    Reviewed: 'bg-blue-50 text-blue-700 border-blue-200',
    Interviewing: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    Accepted: 'bg-blue-50 text-blue-700 border-blue-200',
    Rejected: 'bg-red-50 text-red-700 border-red-200',
  };

  if (loading) return <div className="text-center py-10 font-medium text-slate-500">Loading applicants...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <Link to="/dashboard" className="text-sm font-medium text-blue-600 hover:underline mb-2 inline-block">
            ← Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-slate-800">Job Applicants</h1>
          <p className="text-slate-500 text-sm">Total Applications: {applications.length}</p>
        </div>
      </div>

      {applications.length === 0 ? (
        <div className="bg-white rounded-xl p-8 text-center border border-slate-100 shadow-sm">
          <p className="text-slate-500">No applications received for this job yet.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-500 uppercase">
                <th className="py-4 px-6">Candidate</th>
                <th className="py-4 px-6">Resume</th>
                <th className="py-4 px-6">Applied Date</th>
                <th className="py-4 px-6">Cover Letter</th>
                <th className="py-4 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {applications.map((app) => (
                <tr key={app._id} className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6">
                    <p className="font-semibold text-slate-800">{app.candidate?.name || 'Applicant'}</p>
                    <p className="text-xs text-slate-500">{app.candidate?.email}</p>
                  </td>
                  <td className="py-4 px-6">
                    <a
                      href={`http://localhost:5000${app.resume}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition"
                    >
                      📄 View Resume
                    </a>
                  </td>
                  <td className="py-4 px-6 text-slate-500 text-xs">
                    {new Date(app.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6 text-slate-600 max-w-xs truncate text-xs">
                    {app.coverLetter || <span className="text-slate-400 italic">None provided</span>}
                  </td>
                  <td className="py-4 px-6">
                    <select
                      value={app.status}
                      disabled={updatingId === app._id}
                      onChange={(e) => handleStatusChange(app._id, e.target.value)}
                      className={`text-xs font-medium border rounded-lg px-2.5 py-1.5 outline-none transition cursor-pointer ${
                        statusColors[app.status] || 'bg-slate-50 text-slate-700'
                      }`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Reviewed">Reviewed</option>
                      <option value="Interviewing">Interviewing</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Rejected">Rejected</option>
                    </select>
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