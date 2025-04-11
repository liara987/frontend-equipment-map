import { useContext, useMemo } from "react";
import {
  EquipmentContext,
  EquipmentModelContext,
} from "../context/EquipmentContext";

import { Equipment, PositionData } from "../types/equipmentTypes";
import useGetPosition from "./useGetPosition";

interface EquipmentModel {
  id: string;
  name: string;
}

interface LatestPosition extends PositionData {
  equipmentName: string;
  equipmentModel: string;
}

export default function useLatestPositions(): LatestPosition[] {
  const positionList: PositionData[] = useGetPosition();
  const equipmentList: Equipment[] = useContext(EquipmentContext) || [];
  const equipmentModelList: EquipmentModel[] =
    useContext(EquipmentModelContext) || [];

  return useMemo(() => {
    if (!positionList || positionList.length === 0) return [];

    const latestMap: { [key: string]: PositionData } = {};

    positionList.forEach(({ equipmentId, lat, lon, date }) => {
      const currentDate = new Date(date);
      const existingDate = latestMap[equipmentId]
        ? new Date(latestMap[equipmentId].date)
        : null;

      if (!existingDate || currentDate > existingDate) {
        latestMap[equipmentId] = { equipmentId, lat, lon, date };
      }
    });

    return Object.values(latestMap).map(({ equipmentId, lat, lon, date }) => {
      const equipment = equipmentList.find((eq) => eq.id === equipmentId);
      const equipmentModel = equipmentModelList.find(
        (model) => model.id === equipment?.equipmentModelId,
      );

      return {
        equipmentId,
        lat,
        lon,
        date,
        equipmentName: equipment ? equipment.name : "Desconhecido",
        equipmentModel: equipmentModel
          ? equipmentModel.name
          : "Modelo desconhecido",
      };
    });
  }, [positionList, equipmentList, equipmentModelList]);
}
