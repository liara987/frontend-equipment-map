export interface Equipment {
  id: string;
  equipmentModelId: string;
  name: string;
}

export interface EquipmentState {
  id: string;
  name: string;
  color: string;
}

export interface HourlyEarning {
  equipmentStateId: string;
  value: number;
}

export interface EquipmentModel {
  id: string;
  name: string;
  hourlyEarnings: HourlyEarning[];
}

export interface EquipmentStateHistoryEntry {
  date: string;
  equipmentStateId: string;
}

export interface EquipmentFormatedHistoryEntry {
  date: string;
  time: string;
  stateName: string;
  stateColor: string;
}

export interface EquipmentStateHistory {
  equipmentId: string;
  states: EquipmentStateHistoryEntry[];
}

export interface PositionEntry {
  date: string;
  lat: number;
  lon: number;
}

export interface EquipmentPositionHistory {
  equipmentId: string;
  positions: PositionEntry[];
}

export interface EquipmentHistoryFormattedEntry {
  date: string;
  time: string;
  stateName: string;
  stateColor: string;
}

export interface EquipmentWithState {
  id?: string;
  equipmentId: string;
  stateName: string;
  stateColor: string;
}

export interface EquipmentPosition {
  equipmentId: string;
  equipmentName: string;
  equipmentModel: string;
  lat: number;
  lon: number;
}

export interface Equipment {
  id: string;
  equipmentModelId: string;
  name: string;
}

export interface PositionData {
  equipmentId: string;
  date: string;
  lat: number;
  lon: number;
}
