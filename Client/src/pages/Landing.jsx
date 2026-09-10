
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 overflow-x-hidden">

      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-blue-600/20">
              J
            </div>

            <span className="text-xl font-bold tracking-tight text-white">
              Job<span className="text-blue-500">Portal</span>
            </span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="#features" className="hover:text-white transition">
              Features
            </a>

            <a href="#how-it-works" className="hover:text-white transition">
              How It Works
            </a>

            <a href="#technology" className="hover:text-white transition">
              Technology
            </a>

            <a href="#faq" className="hover:text-white transition">
              FAQ
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden sm:block px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition"
            >
              Sign In
            </Link>

            <Link
              to="/register"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-semibold text-white transition shadow-lg shadow-blue-600/20"
            >
              Get Started
            </Link>
          </div>

        </div>
      </nav>


      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden">

        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">

          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-8">
              <span>🚀</span>
              Next-Gen Full Stack Hiring Platform
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
              The smarter way to
              <span className="block mt-2 text-blue-500">
                connect talent & opportunity.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg md:text-xl leading-8 text-slate-400 max-w-3xl mx-auto">
              JobPortal brings candidates and recruiters together through
              intelligent job discovery, streamlined applications, powerful
              dashboards, and secure full-stack technology.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

              <Link
                to="/register"
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition shadow-xl shadow-blue-600/20"
              >
                Create Free Account →
              </Link>

              <Link
                to="/login"
                className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold transition"
              >
                Explore Platform
              </Link>

            </div>

            <p className="mt-5 text-xs text-slate-500">
              Built for modern recruiters and ambitious job seekers.
            </p>

          </div>


          {/* =====================================================
              PLATFORM PREVIEW
          ===================================================== */}
          <div className="mt-20 max-w-6xl mx-auto">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl overflow-hidden">

              {/* Browser header */}
              <div className="border-b border-slate-800 px-5 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />

                <div className="ml-4 flex-1 max-w-md mx-auto rounded-md bg-slate-800 px-4 py-1.5 text-xs text-slate-500">
                  app.jobportal.com/dashboard
                </div>
              </div>

              {/* Dashboard preview */}
              <div className="p-6 md:p-10">

                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-sm text-slate-500">
                      Welcome back
                    </p>

                    <h3 className="text-2xl font-bold text-white">
                      Hiring Dashboard
                    </h3>
                  </div>

                  <div className="hidden sm:block px-4 py-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm">
                    ● Live
                  </div>
                </div>


                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                    <p className="text-sm text-slate-500">
                      Active Jobs
                    </p>

                    <p className="text-3xl font-bold text-white mt-2">
                      24
                    </p>

                    <p className="text-xs text-emerald-400 mt-2">
                      ↑ 12% this month
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                    <p className="text-sm text-slate-500">
                      Applications
                    </p>

                    <p className="text-3xl font-bold text-white mt-2">
                      1,284
                    </p>

                    <p className="text-xs text-emerald-400 mt-2">
                      ↑ 18% this month
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                    <p className="text-sm text-slate-500">
                      Shortlisted
                    </p>

                    <p className="text-3xl font-bold text-white mt-2">
                      186
                    </p>

                    <p className="text-xs text-blue-400 mt-2">
                      14.5% conversion
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                    <p className="text-sm text-slate-500">
                      Interviews
                    </p>

                    <p className="text-3xl font-bold text-white mt-2">
                      42
                    </p>

                    <p className="text-xs text-emerald-400 mt-2">
                      ↑ 8% this month
                    </p>
                  </div>

                </div>


                {/* Job cards */}
                <div className="mt-6 grid md:grid-cols-2 gap-4">

                  <div className="border border-slate-800 rounded-xl p-5 bg-slate-950">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-semibold text-white">
                          Senior React Developer
                        </p>

                        <p className="text-sm text-slate-500 mt-1">
                          Technology • Remote
                        </p>
                      </div>

                      <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 h-fit">
                        Active
                      </span>
                    </div>

                    <div className="mt-5 flex justify-between text-sm">
                      <span className="text-slate-500">
                        Applications
                      </span>

                      <span className="text-white font-medium">
                        128
                      </span>
                    </div>

                    <div className="mt-3 h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full w-3/4 bg-blue-600 rounded-full" />
                    </div>
                  </div>


                  <div className="border border-slate-800 rounded-xl p-5 bg-slate-950">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-semibold text-white">
                          Full Stack Engineer
                        </p>

                        <p className="text-sm text-slate-500 mt-1">
                          Engineering • Hybrid
                        </p>
                      </div>

                      <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 h-fit">
                        Hiring
                      </span>
                    </div>

                    <div className="mt-5 flex justify-between text-sm">
                      <span className="text-slate-500">
                        Applications
                      </span>

                      <span className="text-white font-medium">
                        86
                      </span>
                    </div>

                    <div className="mt-3 h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full w-1/2 bg-blue-600 rounded-full" />
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="border-y border-slate-800 bg-slate-900/40">

        <div className="max-w-7xl mx-auto px-6 py-12">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">
                10K+
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Active Candidates
              </p>
            </div>

            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">
                2.5K+
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Recruiters
              </p>
            </div>

            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">
                15K+
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Job Opportunities
              </p>
            </div>

            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">
                95%
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Platform Reliability
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FEATURES
      ========================================================= */}
      <section id="features" className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl mb-14">
            <p className="text-blue-500 text-sm font-semibold uppercase tracking-wider">
              Platform Features
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
              Everything you need to
              <span className="text-blue-500"> hire smarter.</span>
            </h2>

            <p className="mt-5 text-slate-400 text-lg">
              A complete ecosystem designed to simplify the entire hiring
              journey from discovery to selection.
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Feature */}
            <div className="p-7 rounded-2xl border border-slate-800 bg-slate-900 hover:border-blue-500/40 transition">
              <div className="text-3xl mb-5">⚡</div>

              <h3 className="text-xl font-bold text-white">
                Role-Based Access
              </h3>

              <p className="mt-3 text-slate-400 leading-7">
                Separate experiences and permissions for candidates and
                recruiters with protected routes.
              </p>
            </div>


            <div className="p-7 rounded-2xl border border-slate-800 bg-slate-900 hover:border-blue-500/40 transition">
              <div className="text-3xl mb-5">🔎</div>

              <h3 className="text-xl font-bold text-white">
                Smart Job Discovery
              </h3>

              <p className="mt-3 text-slate-400 leading-7">
                Search and discover opportunities based on skills, location,
                experience, employment type, and career goals.
              </p>
            </div>


            <div className="p-7 rounded-2xl border border-slate-800 bg-slate-900 hover:border-blue-500/40 transition">
              <div className="text-3xl mb-5">📊</div>

              <h3 className="text-xl font-bold text-white">
                Powerful Dashboards
              </h3>

              <p className="mt-3 text-slate-400 leading-7">
                Recruiters can monitor jobs and applications while candidates
                can track their complete application journey.
              </p>
            </div>


            <div className="p-7 rounded-2xl border border-slate-800 bg-slate-900 hover:border-blue-500/40 transition">
              <div className="text-3xl mb-5">📄</div>

              <h3 className="text-xl font-bold text-white">
                Resume Management
              </h3>

              <p className="mt-3 text-slate-400 leading-7">
                Upload and manage resumes directly through your candidate
                profile instead of relying on external links.
              </p>
            </div>


            <div className="p-7 rounded-2xl border border-slate-800 bg-slate-900 hover:border-blue-500/40 transition">
              <div className="text-3xl mb-5">🔐</div>

              <h3 className="text-xl font-bold text-white">
                Secure Authentication
              </h3>

              <p className="mt-3 text-slate-400 leading-7">
                JWT-based authentication with protected API endpoints and
                role-aware authorization.
              </p>
            </div>


            <div className="p-7 rounded-2xl border border-slate-800 bg-slate-900 hover:border-blue-500/40 transition">
              <div className="text-3xl mb-5">🚀</div>

              <h3 className="text-xl font-bold text-white">
                Application Pipeline
              </h3>

              <p className="mt-3 text-slate-400 leading-7">
                Manage applications through stages such as applied,
                shortlisted, interview, selected, and rejected.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CANDIDATE / RECRUITER
      ========================================================= */}
      <section className="py-24 bg-slate-900/40 border-y border-slate-800">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-blue-500 font-semibold uppercase text-sm tracking-wider">
              Built For Everyone
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
              One platform.
              <span className="text-blue-500"> Two powerful experiences.</span>
            </h2>
          </div>


          <div className="grid md:grid-cols-2 gap-8 mt-14">

            {/* Candidate */}
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 md:p-10">

              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-2xl">
                👨‍💻
              </div>

              <h3 className="mt-7 text-2xl font-bold text-white">
                For Candidates
              </h3>

              <p className="mt-3 text-slate-400 leading-7">
                Discover relevant opportunities, build your profile,
                upload your resume, apply to jobs, and track every
                application from one place.
              </p>

              <ul className="mt-7 space-y-4 text-sm text-slate-300">

                <li>✓ Search and filter jobs</li>
                <li>✓ Manage candidate profile</li>
                <li>✓ Upload resume</li>
                <li>✓ One-click applications</li>
                <li>✓ Track application status</li>
                <li>✓ Secure personal dashboard</li>

              </ul>

              <Link
                to="/register"
                className="inline-block mt-8 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold transition"
              >
                Find Your Next Role →
              </Link>

            </div>


            {/* Recruiter */}
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 md:p-10">

              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-2xl">
                🏢
              </div>

              <h3 className="mt-7 text-2xl font-bold text-white">
                For Recruiters
              </h3>

              <p className="mt-3 text-slate-400 leading-7">
                Create job listings, review candidates, manage applications,
                and organize your complete recruitment pipeline.
              </p>

              <ul className="mt-7 space-y-4 text-sm text-slate-300">

                <li>✓ Create and manage jobs</li>
                <li>✓ View candidate applications</li>
                <li>✓ Review resumes</li>
                <li>✓ Update application status</li>
                <li>✓ Manage hiring pipeline</li>
                <li>✓ Centralized recruiter dashboard</li>

              </ul>

              <Link
                to="/register"
                className="inline-block mt-8 px-6 py-3 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 font-semibold transition"
              >
                Start Hiring →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section id="how-it-works" className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-blue-500 font-semibold uppercase text-sm tracking-wider">
              Simple Workflow
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
              From profile to opportunity
              <span className="text-blue-500"> in minutes.</span>
            </h2>

          </div>


          <div className="grid md:grid-cols-4 gap-6 mt-16">

            <div className="text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg">
                01
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Create Account
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                Register as a candidate or recruiter.
              </p>
            </div>


            <div className="text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg">
                02
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Build Your Profile
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                Add skills, experience, resume, and professional details.
              </p>
            </div>


            <div className="text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg">
                03
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Connect
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                Apply to jobs or review potential candidates.
              </p>
            </div>


            <div className="text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg">
                04
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Get Hired
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                Track progress through the complete hiring pipeline.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}
      <section id="technology" className="py-24 bg-slate-900/40 border-y border-slate-800">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-blue-500 font-semibold uppercase text-sm tracking-wider">
                Modern Architecture
              </p>

              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
                Built with modern
                <span className="text-blue-500"> full-stack technology.</span>
              </h2>

              <p className="mt-6 text-slate-400 leading-8">
                JobPortal is designed as a modern full-stack application
                with a responsive React frontend, RESTful backend APIs,
                database persistence, authentication, and cloud deployment.
              </p>

            </div>


            <div className="grid grid-cols-2 gap-4">

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                <p className="text-blue-400 font-bold text-xl">
                  React
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Component-based UI
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                <p className="text-green-400 font-bold text-xl">
                  Node.js
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Backend runtime
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                <p className="text-yellow-400 font-bold text-xl">
                  MongoDB
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Database
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                <p className="text-purple-400 font-bold text-xl">
                  Express
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  REST API layer
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                <p className="text-cyan-400 font-bold text-xl">
                  Tailwind
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Modern styling
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                <p className="text-orange-400 font-bold text-xl">
                  JWT
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Authentication
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SECURITY
      ========================================================= */}
      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-12 text-center">

            <div className="text-4xl">
              🔐
            </div>

            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-white">
              Security built into the platform.
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-slate-400 leading-7">
              Authentication, protected routes, role-based authorization,
              secure API communication, and persistent user sessions help
              protect the hiring workflow.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <span className="px-4 py-2 rounded-lg bg-slate-800 text-sm text-slate-300">
                JWT Authentication
              </span>

              <span className="px-4 py-2 rounded-lg bg-slate-800 text-sm text-slate-300">
                Protected Routes
              </span>

              <span className="px-4 py-2 rounded-lg bg-slate-800 text-sm text-slate-300">
                Role Authorization
              </span>

              <span className="px-4 py-2 rounded-lg bg-slate-800 text-sm text-slate-300">
                Secure APIs
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FAQ
      ========================================================= */}
      <section id="faq" className="py-24 bg-slate-900/40 border-y border-slate-800">

        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center">

            <p className="text-blue-500 font-semibold uppercase text-sm tracking-wider">
              FAQ
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white">
              Frequently asked questions
            </h2>

          </div>


          <div className="mt-12 space-y-4">

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950">
              <h3 className="font-semibold text-white">
                Is JobPortal free to use?
              </h3>

              <p className="mt-3 text-sm text-slate-500 leading-6">
                Candidates and recruiters can create accounts and access
                the core hiring workflow through the platform.
              </p>
            </div>


            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950">
              <h3 className="font-semibold text-white">
                Can recruiters manage applications?
              </h3>

              <p className="mt-3 text-sm text-slate-500 leading-6">
                Yes. Recruiters can create jobs, view applications,
                review candidate information, and manage application
                statuses.
              </p>
            </div>


            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950">
              <h3 className="font-semibold text-white">
                Can candidates upload resumes?
              </h3>

              <p className="mt-3 text-sm text-slate-500 leading-6">
                Yes. Candidates can upload and manage their resume as
                part of their profile and application workflow.
              </p>
            </div>


            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950">
              <h3 className="font-semibold text-white">
                Is authentication secure?
              </h3>

              <p className="mt-3 text-sm text-slate-500 leading-6">
                The platform uses JWT-based authentication with protected
                API routes and role-based authorization.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="py-28">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-10 md:p-16">

            <p className="text-blue-400 font-semibold">
              READY TO GET STARTED?
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              Your next opportunity
              <span className="text-blue-500"> starts here.</span>
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-slate-400">
              Whether you're searching for your next role or building
              your next team, JobPortal gives you the tools to move faster.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

              <Link
                to="/register"
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition"
              >
                Create Your Account →
              </Link>

              <Link
                to="/login"
                className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white font-semibold transition"
              >
                Sign In
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-12">

          <div className="grid md:grid-cols-4 gap-10">

            <div className="md:col-span-2">

              <div className="flex items-center gap-3">

                <div className="h-9 w-9 bg-blue-600 rounded-xl flex items-center justify-center font-bold">
                  J
                </div>

                <span className="text-xl font-bold">
                  Job<span className="text-blue-500">Portal</span>
                </span>

              </div>

              <p className="mt-5 max-w-md text-sm text-slate-500 leading-6">
                A next-generation full-stack hiring platform connecting
                ambitious candidates with modern companies.
              </p>

            </div>


            <div>

              <h4 className="font-semibold text-white">
                Platform
              </h4>

              <div className="mt-4 space-y-3 text-sm text-slate-500">

                <a href="#features" className="block hover:text-white">
                  Features
                </a>

                <a href="#how-it-works" className="block hover:text-white">
                  How It Works
                </a>

                <a href="#technology" className="block hover:text-white">
                  Technology
                </a>

                <a href="#faq" className="block hover:text-white">
                  FAQ
                </a>

              </div>

            </div>


            <div>

              <h4 className="font-semibold text-white">
                Account
              </h4>

              <div className="mt-4 space-y-3 text-sm text-slate-500">

                <Link to="/login" className="block hover:text-white">
                  Sign In
                </Link>

                <Link to="/register" className="block hover:text-white">
                  Register
                </Link>

              </div>

            </div>

          </div>


          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between gap-4 text-xs text-slate-600">

            <p>
              © 2026 JobPortal. All rights reserved.
            </p>

            <p>
              Built with React • Node.js • Express • MongoDB
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
};
