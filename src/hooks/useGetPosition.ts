import { useContext, useEffect, useState } from "react";
import { EquipmentPositionHistoryContext } from "../context/EquipmentContext";
import { PositionData } from "../types/equipmentTypes";

function useGetPosition() {
  const [positionData, setPositionData] = useState<PositionData[]>([]);
  const equipmentPosition = useContext(EquipmentPositionHistoryContext);

  useEffect(() => {
    try {
      if (!equipmentPosition || !Array.isArray(equipmentPosition)) {
        console.error(
          "Erro: Contexto EquipmentPositionHistoryContext é inválido ou indefinido.",
        );
        return;
      }

      const positions: PositionData[] = equipmentPosition.flatMap((equipment) =>
        equipment.positions.map((posi) => ({
          equipmentId: equipment.equipmentId,
          date: posi.date,
          lat: posi.lat,
          lon: posi.lon,
        })),
      );

      setPositionData(positions);
    } catch (error) {
      console.error("Erro ao processar as posições do equipamento: ", error);
    }
  }, [equipmentPosition]);

  return positionData;
}

export default useGetPosition;
