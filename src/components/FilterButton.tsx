import { Filter } from "lucide-react";

interface FilterButtonProps {
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  showFilters,
  setShowFilters,
}) => (
  <button
    onClick={() => setShowFilters(!showFilters)}
    className="bg-white p-2 rounded-full shadow-md border border-gray-300 hover:bg-gray-100 transition sm:hidden"
  >
    <Filter className="text-gray-700 w-6 h-6" />
  </button>
);

export default FilterButton;
