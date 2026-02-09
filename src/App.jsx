import { useState } from 'react';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import Modal from './components/Modal';
import { jobs } from './data/jobs';

export default function App() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [success, setSuccess] = useState(false);

  const viewDetails = (job) => setSelectedJob(job);
  const apply = () => {
    setSelectedJob(null);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background p-8 sm:px-12 md:px-16 lg:px-20">
      <div className="w-full mx-auto mb-8 flex max-md:flex-col justify-between items-center gap-1">
        <h1 className="text-3xl font-bold text-text-primary max-md:mb-4
        ">Available Jobs</h1>
        <input 
          className="w-full max-w-md p-4 border border-border rounded-full max-md:mb-6" 
          placeholder="Search jobs..." 
        />
      </div>
      <JobList jobs={jobs} onViewDetails={viewDetails} />
      <Modal isOpen={!!selectedJob}>
        {selectedJob && <JobDetails job={selectedJob} onApply={apply} onClose={() => setSelectedJob(null)} />}
      </Modal>
      <Modal isOpen={success}>
        <div className="text-center py-12">
          <div className="text-7xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold text-pill mb-4">
              Application Submitted Successfully!
            </h2>
            <p className="text-lg text-textSecondary mb-8">
              Your application has been sent. We'll get in touch soon.
            </p>
          </div>
      </Modal>
    </div>
  );
}