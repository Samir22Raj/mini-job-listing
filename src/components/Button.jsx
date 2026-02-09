export default function Button({ children, variant = 'primary', onClick, className = '' }) {
  const base = 'px-4 py-2 rounded-md font-medium transition';
  const styles = variant === 'primary' ? 'bg-accent text-white hover:bg-accent/80 hover:cursor-pointer' : 'border border-accent text-accent hover:bg-accent/10';
  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}