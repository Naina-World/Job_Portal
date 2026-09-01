import { useEffect, useState } from 'react';
import api from '@/services/api';
import { useAuth } from '@/hooks/useAuth';

export const Jobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [applying, setApplying] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [applicationError, setApplicationError] = useState('');

  const fetchAllJobs = async () => {
    try {
      const res = await api.get('/jobs');
      setJobs(res.data);
    } catch (err) {
      console.error('Failed to fetch jobs:', err);
      setError('Unable to retrieve open positions from the database server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  const openApplication = (job) => {
    setSelectedJob(job);
    setResumeFile(null);
    setCoverLetter('');
    setApplicationError('');
    setSuccessMessage('');
  };

  const closeApplication = () => {
    if (applying) return;
    setSelectedJob(null);
    setResumeFile(null);
    setCoverLetter('');
    setApplicationError('');
  };

  const handleApply = async (e) => {
    e.preventDefault();

    if (!resumeFile) {
      setApplicationError('Please select your resume before submitting.');
      return;
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!allowedTypes.includes(resumeFile.type)) {
      setApplicationError('Only PDF, DOC, and DOCX resumes are allowed.');
      return;
    }

    if (resumeFile.size > 5 * 1024 * 1024) {
      setApplicationError('Resume must be 5 MB or smaller.');
      return;
    }

    const formData = new FormData();
    formData.append('resume', resumeFile);
    formData.append('coverLetter', coverLetter);

    setApplying(true);
    setApplicationError('');

    try {
      await api.post(`/applications/${selectedJob._id}`, formData);

      setSuccessMessage('Application submitted successfully!');
      setSelectedJob(null);
      setResumeFile(null);
      setCoverLetter('');
    } catch (err) {
      console.error('Application submission error:', err);
      setApplicationError(
        err.response?.data?.message || 'Failed to submit application.'
      );
    } finally {
      setApplying(false);
    }
  };

  const filteredJobs = jobs.filter((job) =>
    `${job.title} ${job.company} ${job.location}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-500 font-medium text-sm">Loading open positions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white border border-red-200 rounded-2xl p-6 text-center shadow-sm">
          <h2 className="text-lg font-bold text-red-800 mb-2">Unable to Load Jobs</h2>
          <p className="text-sm text-red-600 mb-4">{error}</p>
          <button
            onClick={() => { setLoading(true); setError(null); fetchAllJobs(); }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-slate-200">
          <div>
            <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">Career Opportunities</p>
            <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight">Explore Open Positions</h1>
            <p className="text-slate-500 text-sm mt-1">Find a role that matches your skills and career goals.</p>
          </div>

          <div className="w-full md:w-80">
            <input
              type="text"
              placeholder="Search jobs, companies or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm"
            />
          </div>
        </div>

        {successMessage && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 text-blue-800 text-sm font-semibold rounded-xl text-center">
            {successMessage}
          </div>
        )}

        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-sm">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl">⌕</div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">No Jobs Found</h3>
            <p className="text-slate-500 text-sm">Try another search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job._id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                      <p className="text-sm font-medium text-blue-600 mt-1">{job.company}</p>
                    </div>
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider shrink-0">
                      {job.jobType}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium mb-4">
                    <span>📍 {job.location}</span>
                    <span>💰 {job.salary || 'Salary not specified'}</span>
                  </div>

                  <p className="text-sm text-slate-600 line-clamp-4 mb-6 leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <button
                  onClick={() => openApplication(job)}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition shadow-sm"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-slate-950 px-6 py-5 text-white">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Application</p>
                  <h2 className="text-2xl font-bold">{selectedJob.title}</h2>
                  <p className="text-slate-300 text-sm mt-1">{selectedJob.company} · {selectedJob.location}</p>
                </div>
                <button
                  type="button"
                  onClick={closeApplication}
                  className="text-slate-400 hover:text-white text-2xl leading-none"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>

            <form onSubmit={handleApply} className="p-6 space-y-5">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Candidate Details</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500">Full Name</p>
                    <p className="text-sm font-semibold text-slate-900 mt-1">{user?.name || 'Candidate'}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="text-sm font-semibold text-slate-900 mt-1 break-all">{user?.email || 'Not available'}</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">
                  Resume <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-slate-300 hover:border-blue-400 rounded-xl p-5 transition">
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                    className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 file:font-semibold hover:file:bg-blue-100"
                  />
                  <p className="text-xs text-slate-500 mt-2">PDF, DOC or DOCX · Maximum 5 MB</p>
                  {resumeFile && (
                    <p className="text-xs font-medium text-blue-600 mt-2">
                      Selected: {resumeFile.name}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">
                  Cover Letter <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell the recruiter why you're a good fit for this role..."
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
              </div>

              {applicationError && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 text-sm">
                  {applicationError}
                </div>
              )}

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeApplication}
                  disabled={applying}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={applying}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition disabled:opacity-50"
                >
                  {applying ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
