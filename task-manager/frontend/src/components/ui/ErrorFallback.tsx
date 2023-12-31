interface ErrorFallbackProps {
  resetErrorBoundary?: () => void;
}
export default function ErrorFallback({
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <div className="grid h-screen place-content-center bg-white px-4 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200 dark:text-gray-700">
          404
        </h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          There is no task to show
        </p>

        <div
          onClick={() => window.location.reload()}
          className="mt-6 inline-block rounded cursor-pointer bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Try Again
        </div>
      </div>
    </div>
  );
}
