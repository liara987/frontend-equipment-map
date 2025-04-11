import { RefreshCw } from "lucide-react";

interface MapErrorProps {
  onRetry?: () => void;
}

const MapError = ({ onRetry }: MapErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center bg-gray-100 p-6">
      <div className="bg-red-100 text-red-500 p-4 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
          />
        </svg>
      </div>
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-4">
        O mapa não pôde ser carregado
      </h2>
      <p className="text-gray-600 mt-2 max-w-md">
        Verifique sua conexão com a internet ou tente recarregar a página.
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          <RefreshCw size={18} />
          Recarregar
        </button>
      )}
    </div>
  );
};

export default MapError;
