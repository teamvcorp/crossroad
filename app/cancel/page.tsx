export default function Cancel() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg text-center">
        <h1 className="text-3xl font-semibold text-red-600 mb-6">Payment Canceled</h1>
        <p className="text-lg text-gray-700 mb-8">
          Your payment was canceled. Please try again later.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white py-3 px-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
}
