import { useContext, useMemo } from "react";
import {
  EquipmentStateContext,
  EquipmentStateHistoryContext,
} from "../context/EquipmentContext";

export interface EquipmentHistoryEntry {
  date: string;
  time: string;
  stateName: string;
  stateColor: string;
}

function useFormattedEquipmentHistory(
  selectedEquipment: string | null,
): EquipmentHistoryEntry[] {
  const equipmentStates = useContext(EquipmentStateContext);
  const equipmentHistory = useContext(EquipmentStateHistoryContext);

  return useMemo(() => {
    if (!selectedEquipment) return [];

    const historyEntry = equipmentHistory?.find(
      (entry) => entry.equipmentId === selectedEquipment,
    );

    if (!historyEntry) return [];

    const stateMap = new Map(
      equipmentStates?.map((state) => [state.id, state]),
    );

    return historyEntry.states
      .map(({ date, equipmentStateId }) => {
        const stateDetails = stateMap.get(equipmentStateId);
        const parsedDate = new Date(date);

        return {
          date: parsedDate.toLocaleDateString("pt-BR"),
          time: parsedDate.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          timestamp: parsedDate.getTime(),
          stateName: stateDetails?.name || "Desconhecido",
          stateColor: stateDetails?.color || "#bdc3c7",
        };
      })
      .sort((a, b) => b.timestamp - a.timestamp);
  }, [selectedEquipment, equipmentStates, equipmentHistory]);
}

export default useFormattedEquipmentHistory;
