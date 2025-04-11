import { useContext, useMemo } from "react";
import { EquipmentContext } from "../context/EquipmentContext";
import { Equipment } from "../types/equipmentTypes";

function useGetEquipmentById(id: string) {
  const equipmentList = useContext(EquipmentContext);

  const equipment = useMemo(() => {
    if (!equipmentList || !Array.isArray(equipmentList)) {
      console.error("Erro: EquipmentContext inválido ou não definido.");
      return null;
    }

    return equipmentList.find((eq: Equipment) => eq.id === id) || null;
  }, [equipmentList, id]);

  return equipment;
}

export default useGetEquipmentById;
