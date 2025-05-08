import { useState, useEffect } from 'react';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import SearchBar from './components/SearchBar';

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (searchLocation.trim()) {
      fetchJobs();
    }
  }, [searchLocation, currentPage]);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const query = new URLSearchParams({
        location: searchLocation,
        page: currentPage,
        limit: 10,
      }).toString();
      const response = await fetch(`http://localhost:5000/api/jobs?${query}`);
      const data = await response.json();
      setJobs(data.jobs);
      setTotalPages(data.totalPages);
      if (data.jobs.length > 0 && !selectedJob) {
        setSelectedJob(data.jobs[0]);
      } else if (data.jobs.length === 0) {
        setSelectedJob(null);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedJob(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex justify-center">
      <div className="w-full max-w-7xl mx-4 md:mx-8 my-4 flex flex-col">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 rounded-t-lg shadow-lg">
          <h1 className="text-3xl font-bold">Explore Job Opportunities</h1>
        </header>

        {/* Search */}
        <SearchBar setSearchLocation={setSearchLocation} />

        {/* Loading Animation */}
        {isLoading && (
          <div className="flex justify-center items-center py-6">
            <div className="w-12 h-12 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex flex-1 bg-white rounded-b-lg shadow-lg h-[calc(100vh-250px)]">
          {/* Job List */}
          <div
            className={`${
              showDetails ? 'hidden md:flex' : 'flex'
            } w-full md:w-1/3 bg-white rounded-bl-lg flex-col border-r border-gray-200`}
          >
            {searchLocation.trim() ? (
              <>
                <div className="flex-1 overflow-y-auto">
                  <JobList jobs={jobs} setSelectedJob={handleJobClick} selectedJob={selectedJob} />
                </div>
                {/* Pagination with only Previous and Next buttons */}
                {totalPages > 1 && (
                  <div className="p-4 border-t border-gray-200 flex justify-center items-center gap-4 shrink-0">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 disabled:bg-gray-300 flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                  
                    </button>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 disabled:bg-gray-300 flex items-center gap-2"
                    >
              
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="p-6">
                <p className="text-gray-600 text-lg">
                  Please enter a location to view job listings.
                </p>
              </div>
            )}
          </div>

          {/* Job Details */}
          <div
            className={`${
              showDetails ? 'flex' : 'hidden md:flex'
            } w-full md:w-2/3 bg-white rounded-br-lg overflow-y-auto relative flex-col`}
          >
            {showDetails && (
              <button
                onClick={handleCloseDetails}
                className="md:hidden absolute top-4 left-4 text-gray-600 hover:text-gray-800"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            <div className="flex-1 overflow-y-auto">
              <JobDetails job={selectedJob} />
            </div>
            {/* Spacer to align with JobList pagination */}
            {totalPages > 1 && (
              <div className="p-4 border-t border-gray-200 shrink-0 h-[72px]"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;