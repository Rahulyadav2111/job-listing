function JobDetails({ job }) {
    if (!job) {
      return (
        <div className="w-full p-6">
          <p className="text-gray-600 text-lg">Select a job to view details or search for jobs above.</p>
        </div>
      );
    }
  
    return (
      <div className="w-full p-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="flex items-start gap-4">
            <img
              src={job.companyImageUrl}
              alt={`${job.company} logo`}
              className="w-16 h-16 object-contain rounded-lg border border-indigo-200"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/64')}
            />
            <div>
              <h2 className="text-3xl font-bold text-indigo-700">{job.title}</h2>
              <div className="flex flex-wrap items-center mt-2 gap-2">
                <span className="text-sm text-gray-600">{job.company}</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-600">{job.location}</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-600">{job.country}</span>
              </div>
            </div>
          </div>
          <a
            href={job.job_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-pink-600 transition"
          >
            <span>Quick Apply</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
  
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-indigo-700 border-b border-indigo-200 pb-2">Job Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7m-9 4h6" />
              </svg>
              <span className="text-gray-600">Job ID: {job.jobIdNumeric}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-600">{job.employmentType}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-600">Posted: {new Date(job.postedDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-600">Country: {job.country}</span>
            </div>
          </div>
        </div>
  
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-indigo-700 border-b border-indigo-200 pb-2">Qualifications</h3>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full">Min Exp: {job.min_exp} years</span>
            <span className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full">Max Exp: {job.max_exp} years</span>
            <span className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full">{job.country}</span>
            <span className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full">{job.source}</span>
          </div>
        </div>
  
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-indigo-700 border-b border-indigo-200 pb-2">Full Job Description</h3>
          <h4 className="text-lg font-semibold text-gray-700 mt-4">Role Description</h4>
          <p className="text-gray-600 mt-2">{job.description}</p>
          <h4 className="text-lg font-semibold text-gray-700 mt-4">Source</h4>
          <p className="text-gray-600 mt-2">{job.source}</p>
          <h4 className="text-lg font-semibold text-gray-700 mt-4">Apply Now</h4>
          <p className="text-gray-600 mt-2">
            Interested? Apply directly via the job link:{" "}
            <a href={job.job_link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {job.job_link}
            </a>
          </p>
        </div>
      </div>
    );
  }
  
  export default JobDetails;