const ErrorComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 rounded-md">
      <h2 className="text-base font-semibold text-red-600">Something went wrong <button
        className="text-white"
        onClick={() => window.location.reload()}
      >
        reload
      </button></h2>
    </div>
  );
};

export default ErrorComponent;