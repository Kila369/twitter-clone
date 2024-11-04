const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div
        className="animate-spin rounded-full h-full p-2 border-t-4"
        style={{ borderColor: '#1D9BF0' }}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
