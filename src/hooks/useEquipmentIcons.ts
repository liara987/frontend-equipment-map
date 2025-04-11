import L from "leaflet";
import trunk from "../assets/caminhao.png";
import claw from "../assets/garra.png";
import harvester from "../assets/harvester.png";

const useEquipmentIcons = () => {
  const iconMap: Record<string, string> = {
    "Caminhão de carga": trunk,
    Harvester: harvester,
    "Garra traçadora": claw,
  };

  const getEquipmentIcon = (equipmentModel: string) => {
    const iconUrl = iconMap[equipmentModel] || trunk;

    return new L.Icon({
      iconUrl,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
      className: "leaflet-marker-icon",
    });
  };

  return { getEquipmentIcon };
};

export default useEquipmentIcons;
