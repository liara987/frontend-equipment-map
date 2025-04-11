import { useState } from "react";
import FilterButton from "./FilterButton";
import SelectInput from "./SelectInput";

interface FilterPanelProps {
  selectedState: string | null;
  setSelectedState: (state: string | null) => void;
  selectedModel: string | null;
  setSelectedModel: (model: string | null) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  selectedState,
  setSelectedState,
  selectedModel,
  setSelectedModel,
}) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="absolute top-16 left-4 z-20">
      <FilterButton showFilters={showFilters} setShowFilters={setShowFilters} />

      <div
        className={`absolute top-12 left-0 bg-white p-3 shadow-lg rounded-lg w-64 border border-gray-300 transition-opacity animate-fade-in 
          ${showFilters ? "block" : "hidden"} sm:block`}
      >
        <h3 className="text-gray-700">Filtro</h3>
        <SelectInput
          label="Estado"
          value={selectedState}
          onChange={setSelectedState}
          options={["Operando", "Manutenção"]}
        />

        <div className="mt-3">
          <SelectInput
            label="Modelo"
            value={selectedModel}
            onChange={setSelectedModel}
            options={["Caminhão de carga", "Harvester", "Garra traçadora"]}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
