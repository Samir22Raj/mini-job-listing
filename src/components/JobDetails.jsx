import Button from './Button';

export default function JobDetails({ job, onApply, onClose }) {
  return (
    <div className="p-6">
      <button onClick={onClose} className="float-right text-2xl hover:cursor-pointer">&times;</button>
      <h2 className="text-2xl font-bold text-text-primary">{job.title}</h2>
      <p className="text-text-secondary">{job.company}</p>
      <p className="mt-2 flex flex-wrap gap-2">
        <span className="bg-pill px-2 py-1 rounded-full text-sm">{job.location}</span>
        <span className="bg-pill px-2 py-1 rounded-full text-sm">{job.type}</span>
      </p>
      <p className="mt-4">{job.description}</p>
      <div className="mt-4">
        <h4 className="font-semibold mb-2">Required Skills:</h4>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, i) => (
            <span key={i} className="bg-pill px-2 py-1 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </div>
      <Button onClick={onApply} className="mt-6 w-full">Apply Now</Button>
    </div>
  );
}