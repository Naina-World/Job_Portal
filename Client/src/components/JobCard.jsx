import { useState } from 'react';
import api from '../services/api';
import { useAuth } from '../hooks/useAuth';

export const JobCard = ({ job, isCandidate = true }) => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleApply = async (e) => {
    e.preventDefault();

    if (!resumeFile) {
      setMessage('Please select your resume.');
      return;
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!allowedTypes.includes(resumeFile.type)) {
      setMessage('Only PDF, DOC and DOCX files are allowed.');
      return;
    }

    if (resumeFile.size > 5 * 1024 * 1024) {
      setMessage('Resume must be 5 MB or smaller.');
      return;
    }

    const formData = new FormData();
    formData.append('resume', resumeFile);
    formData.append('coverLetter', coverLetter);

    setLoading(true);
    setMessage('');

    try {
      await api.post(`/applications/${job._id}`, formData);
      setMessage('Application submitted successfully!');
      setTimeout(() => {
        setIsOpen(false);
        setResumeFile(null);
        setCoverLetter('');
        setMessage('');
      }, 1200);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to apply.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition">
      <div className="flex justify-between items-start mb-4 gap-3">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
          <p className="text-blue-600 font-medium mt-1">{job.company}</p>
        </div>
        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
          {job.jobType}
        </span>
      </div>

      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{job.description}</p>

      <div className="flex items-center justify-between text-sm text-slate-600 mb-6">
        <span>📍 {job.location}</span>
        <span>💰 {job.salary}</span>
      </div>

      {isCandidate && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
        >
          Apply Now
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl">
            <div className="flex justify-between items-start mb-5">
              <div>
                <p className="text-blue-600 text-xs font-bold uppercase tracking-widest">Application</p>
                <h2 className="text-2xl font-bold text-slate-900 mt-1">Apply for {job.title}</h2>
                <p className="text-sm text-slate-500 mt-1">{job.company} · {job.location}</p>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-900 text-2xl">
                ×
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Candidate Details</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500">Name</p>
                  <p className="text-sm font-semibold text-slate-900">{user?.name}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm font-semibold text-slate-900 break-all">{user?.email}</p>
                </div>
              </div>
            </div>

            {message && (
              <div className={`mb-4 p-3 rounded-lg text-sm font-medium ${
                message.includes('successfully')
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {message}
              </div>
            )}

            <form onSubmit={handleApply} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">
                  Resume <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                  className="w-full border border-slate-200 rounded-xl p-2.5 text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 file:font-semibold"
                />
                <p className="text-xs text-slate-500 mt-1.5">PDF, DOC or DOCX · Maximum 5 MB</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">
                  Cover Letter <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows="4"
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  placeholder="Tell the recruiter why you're a good fit..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  disabled={loading}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
