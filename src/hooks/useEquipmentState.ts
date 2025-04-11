import { useContext, useMemo } from "react";
import {
  EquipmentStateContext,
  EquipmentStateHistoryContext,
} from "../context/EquipmentContext";
import { EquipmentWithState } from "../types/equipmentTypes";

export default function useEquipmentStates() {
  const equipmentStates = useContext(EquipmentStateContext);
  const equipmentHistory = useContext(EquipmentStateHistoryContext);

  if (!equipmentStates || !equipmentHistory) {
    throw new Error(
      "equipmentStates ou equipmentHistory não foram carregados corretamente",
    );
  }

  return useMemo(() => {
    if (equipmentStates.length === 0 || equipmentHistory.length === 0) {
      console.error("equipmentStates ou equipmentHistory estão vazios");
      return [];
    }

    return equipmentHistory.map(({ equipmentId, states }) => {
      if (states.length === 0) {
        return createDefaultState(equipmentId);
      }

      const latestState = getLatestState(states);

      const stateDetails = findStateDetails(
        equipmentStates,
        latestState.equipmentStateId,
      );

      return {
        equipmentId,
        stateName: stateDetails?.name ?? "Desconhecido",
        stateColor: stateDetails?.color ?? "#bdc3c7",
      };
    });
  }, [equipmentStates, equipmentHistory]);
}

function createDefaultState(equipmentId: string): EquipmentWithState {
  return {
    equipmentId,
    stateName: "Desconhecido",
    stateColor: "#bdc3c7",
  };
}

function getLatestState(states: { date: string; equipmentStateId: string }[]) {
  return states.reduce((latest, state) =>
    new Date(state.date) > new Date(latest.date) ? state : latest,
  );
}

function findStateDetails(
  equipmentStates: { id: string; name: string; color: string }[],
  stateId: string,
) {
  return equipmentStates.find((state) => state.id === stateId);
}
