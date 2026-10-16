


const Tag = ({ label, className = "" }) => {
  return (
    <span className={`rounded-full px-3 py-1 text-sm font-medium ${className}`}>
      {label}
    </span>
  );
};

export default Tag;