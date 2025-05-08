function JobList({ jobs, setSelectedJob, selectedJob }) {
    const getDaysAgo = (postedDate) => {
      const now = new Date();
      const posted = new Date(postedDate);
      const diffTime = Math.abs(now - posted);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return `${diffDays}d`;
    };
  
    return (
      <div className="w-full h-full">
        <h2 className="text-2xl font-bold p-6 text-indigo-700 border-b border-indigo-200">Job Listings</h2>
        {jobs.length === 0 ? (
          <p className="p-6 text-gray-600">No jobs found for the selected criteria.</p>
        ) : (
          jobs.map((job) => (
            <div
              key={job._id}
              className={`p-6 border-b border-gray-200 cursor-pointer hover:bg-indigo-50 transition ${
                selectedJob?._id === job._id ? 'bg-indigo-100 border-l-4 border-indigo-500' : ''
              }`}
              onClick={() => setSelectedJob(job)}
            >
              <h3 className="text-xl font-semibold text-indigo-600">{job.title}</h3>
              <p className="text-sm text-gray-700 mt-1">{job.company} — {job.location}</p>
              <div className="flex flex-wrap items-center mt-2 gap-2">
                <span className="text-xs text-white bg-indigo-500 px-2 py-1 rounded">Job ID: {job.jobIdNumeric}</span>
                <span className="text-xs text-white bg-green-500 px-2 py-1 rounded">{job.employmentType}</span>
                <span className="text-xs text-white bg-purple-500 px-2 py-1 rounded">{job.source}</span>
                <span className="text-xs text-white bg-orange-500 px-2 py-1 rounded">{getDaysAgo(job.postedDate)}</span>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
  
  export default JobList;