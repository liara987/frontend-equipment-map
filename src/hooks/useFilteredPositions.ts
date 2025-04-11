import { useMemo } from "react";
import { EquipmentPosition } from "../types/equipmentTypes";

interface UseFilteredPositionsProps {
  positions: EquipmentPosition[];
  searchQuery: string;
}

export default function useFilteredPositions({
  positions,
  searchQuery,
}: UseFilteredPositionsProps) {
  const filteredPositions = useMemo(() => {
    if (!searchQuery.trim()) return positions;

    const lowerQuery = searchQuery.toLowerCase();

    return positions.filter((pos) => {
      return (
        pos.equipmentName.toLowerCase().includes(lowerQuery) ||
        pos.equipmentModel?.toLowerCase().includes(lowerQuery)
      );
    });
  }, [positions, searchQuery]);

  const noResults = searchQuery.trim() !== "" && filteredPositions.length === 0;

  return { filteredPositions, noResults };
}
