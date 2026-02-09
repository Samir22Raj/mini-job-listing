import Button from './Button';

export default function JobCard({ job, onViewDetails }) {
  return (
    <div className="bg-surface p-4 rounded-lg shadow-md hover:shadow-lg" onClick={onViewDetails}>
      <h3 className="text-lg font-semibold text-text-primary">{job.title}</h3>
      <p className="text-text-secondary">{job.company}</p>
      <p className="text-text-secondary">{job.location} - {job.type}</p>
      <Button variant="primary" className="mt-4">View Details</Button>
    </div>
  );
}