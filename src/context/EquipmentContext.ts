import { createContext } from "react";
import equipment from "../data/equipment.json";
import equipmentModel from "../data/equipmentModel.json";
import equipmentPositionHistory from "../data/equipmentPositionHistory.json";
import equipmentState from "../data/equipmentState.json";
import equipmentStateHistory from "../data/equipmentStateHistory.json";
import {
  Equipment,
  EquipmentModel,
  EquipmentPositionHistory,
  EquipmentState,
  EquipmentStateHistory,
} from "../types/equipmentTypes";

export const EquipmentContext = createContext<Equipment[] | null>(
  equipment || null,
);
export const EquipmentStateContext = createContext<EquipmentState[] | null>(
  equipmentState || null,
);
export const EquipmentStateHistoryContext = createContext<
  EquipmentStateHistory[] | null
>(equipmentStateHistory || null);
export const EquipmentModelContext = createContext<EquipmentModel[] | null>(
  equipmentModel || null,
);
export const EquipmentPositionHistoryContext = createContext<
  EquipmentPositionHistory[] | null
>(equipmentPositionHistory || null);
