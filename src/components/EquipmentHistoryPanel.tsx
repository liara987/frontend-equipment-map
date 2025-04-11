import { X } from "lucide-react";
import aikoLogoImg from "../assets/aiko.png";
import { EquipmentHistoryFormattedEntry } from "../types/equipmentTypes";

interface EquipmentHistoryPanelProps {
  equipmentId: string;
  history: EquipmentHistoryFormattedEntry[];
  onClose: () => void;
}

export default function EquipmentHistoryPanel({
  history,
  onClose,
}: EquipmentHistoryPanelProps) {
  return (
    <div
      className="
        fixed bg-white shadow-lg p-4 border z-50 overflow-y-auto 
        bottom-0 left-0 w-full h-[40vh] border-t rounded-t-2xl  
        md:top-0 md:left-0 md:w-[40%] md:h-full md:border-r md:rounded-none"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex justify-between items-center">
          <img className="w-20 mr-5" src={aikoLogoImg} alt="Aiko logo" />
          <h2 className="text-gray-800 text-lg font-bold">
            Histórico do Equipamento
          </h2>
        </div>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-900 hover:cursor-pointer"
        >
          <X />
        </button>
      </div>

      <ul className="space-y-2">
        {history.length > 0 ? (
          history.map((entry, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b py-2"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-5 h-5 rounded-full"
                  style={{ backgroundColor: entry.stateColor }}
                ></div>
                <p className="text-gray-800">{entry.stateName}</p>
              </div>
              <span className="text-gray-500 text-sm">
                {entry.date} às {entry.time}
              </span>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">
            Nenhum histórico disponível.
          </p>
        )}
      </ul>
    </div>
  );
}
