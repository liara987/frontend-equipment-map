import { Search, X } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFocus?: () => void;
}

export default function SearchBar({ onSearch, onFocus }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="z-10 absolute top-4 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
      <div className="bg-white text-gray-500 shadow-md rounded-full p-3 flex items-center gap-2 w-full">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={onFocus}
          placeholder="Buscar por nome ou modelo do equipamento"
          className="flex-1 bg-transparent outline-none text-sm min-w-0"
        />
        {query && (
          <button
            onClick={handleClear}
            className="p-1 rounded-full  hover:bg-gray-300 transition"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        )}
      </div>
    </div>
  );
}
