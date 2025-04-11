import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
import {
  EquipmentContext,
  EquipmentModelContext,
} from "../context/EquipmentContext";
import {
  Equipment,
  EquipmentModel,
  PositionData,
} from "../types/equipmentTypes";
import useGetPosition from "./useGetPosition";
import useLatestPositions from "./useLatestPositions";

vi.mock("./useGetPosition", () => ({
  default: vi.fn(),
}));

const mockEquipments: Equipment[] = [
  { id: "eq1", equipmentModelId: "model1", name: "Caminhão Alpha" },
  { id: "eq2", equipmentModelId: "model2", name: "Garra Beta" },
];

const mockModels: EquipmentModel[] = [
  { id: "model1", name: "Caminhão", hourlyEarnings: [] },
  { id: "model2", name: "Garra", hourlyEarnings: [] },
];

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <EquipmentContext.Provider value={mockEquipments}>
    <EquipmentModelContext.Provider value={mockModels}>
      {children}
    </EquipmentModelContext.Provider>
  </EquipmentContext.Provider>
);

describe("useLatestPositions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("retorna lista vazia se não houver posições", () => {
    (useGetPosition as unknown as Mock).mockReturnValue([]);

    const { result } = renderHook(() => useLatestPositions(), { wrapper });

    expect(result.current).toEqual([]);
  });

  it("retorna a última posição por equipamento", () => {
    const mockPositions: PositionData[] = [
      {
        equipmentId: "eq1",
        date: "2023-01-01T10:00:00Z",
        lat: 1,
        lon: 1,
      },
      {
        equipmentId: "eq1",
        date: "2023-01-01T12:00:00Z",
        lat: 2,
        lon: 2,
      },
      {
        equipmentId: "eq2",
        date: "2023-01-01T09:00:00Z",
        lat: 3,
        lon: 3,
      },
    ];

    (useGetPosition as unknown as Mock).mockReturnValue(mockPositions);

    const { result } = renderHook(() => useLatestPositions(), { wrapper });

    expect(result.current).toEqual([
      {
        equipmentId: "eq1",
        date: "2023-01-01T12:00:00Z",
        lat: 2,
        lon: 2,
        equipmentName: "Caminhão Alpha",
        equipmentModel: "Caminhão",
      },
      {
        equipmentId: "eq2",
        date: "2023-01-01T09:00:00Z",
        lat: 3,
        lon: 3,
        equipmentName: "Garra Beta",
        equipmentModel: "Garra",
      },
    ]);
  });

  it("preenche com valores padrão se equipamento ou modelo não for encontrado", () => {
    const mockPositions: PositionData[] = [
      {
        equipmentId: "invalido",
        date: "2023-01-01T08:00:00Z",
        lat: 0,
        lon: 0,
      },
    ];

    (useGetPosition as unknown as Mock).mockReturnValue(mockPositions);

    const { result } = renderHook(() => useLatestPositions(), { wrapper });

    expect(result.current).toEqual([
      {
        equipmentId: "invalido",
        date: "2023-01-01T08:00:00Z",
        lat: 0,
        lon: 0,
        equipmentName: "Desconhecido",
        equipmentModel: "Modelo desconhecido",
      },
    ]);
  });
});
