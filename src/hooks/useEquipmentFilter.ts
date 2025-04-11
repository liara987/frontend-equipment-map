import { useMemo, useState } from "react";
import useEquipmentStates from "./useEquipmentState";
import useFilteredPositions from "./useFilteredPositions";
import useLatestPositions from "./useLatestPositions";

const useEquipmentFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  const equipmentStates = useEquipmentStates();
  const latestPositions = useLatestPositions();

  const { filteredPositions, noResults } = useFilteredPositions({
    positions: latestPositions,
    searchQuery,
  });

  const filteredByStateAndModel = useMemo(() => {
    return filteredPositions.filter(({ equipmentId, equipmentModel }) => {
      const equipmentState = equipmentStates.find(
        (eq) => eq.equipmentId === equipmentId,
      );

      const matchesState =
        !selectedState || equipmentState?.stateName === selectedState;

      const matchesModel = !selectedModel || equipmentModel === selectedModel;

      return matchesState && matchesModel;
    });
  }, [filteredPositions, selectedState, selectedModel, equipmentStates]);

  return {
    searchQuery,
    setSearchQuery,
    selectedState,
    setSelectedState,
    selectedModel,
    setSelectedModel,
    filteredPositions: filteredByStateAndModel,
    noResults,
  };
};

export default useEquipmentFilter;
