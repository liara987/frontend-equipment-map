import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
import useEquipmentFilter from "./useEquipmentFilter";

vi.mock("./useEquipmentState", () => ({
  default: vi.fn(),
}));

vi.mock("./useLatestPositions", () => ({
  default: vi.fn(),
}));

vi.mock("./useFilteredPositions", () => ({
  default: vi.fn(),
}));

import useEquipmentStates from "./useEquipmentState";
import useFilteredPositions from "./useFilteredPositions";
import useLatestPositions from "./useLatestPositions";

describe("useEquipmentFilter", () => {
  beforeEach(() => {
    (useEquipmentStates as Mock).mockReturnValue([
      { equipmentId: "1", stateName: "Operando" },
      { equipmentId: "2", stateName: "Manutenção" },
    ]);

    (useLatestPositions as Mock).mockReturnValue([
      { equipmentId: "1", equipmentModel: "Caminhão de carga" },
      { equipmentId: "2", equipmentModel: "Harvester" },
    ]);

    (useFilteredPositions as Mock).mockReturnValue({
      filteredPositions: [
        { equipmentId: "1", equipmentModel: "Caminhão de carga" },
        { equipmentId: "2", equipmentModel: "Harvester" },
      ],
      noResults: false,
    });
  });

  it("deve retornar os filtros padrões e resultados sem filtros aplicados", () => {
    const { result } = renderHook(() => useEquipmentFilter());

    expect(result.current.filteredPositions).toHaveLength(2);
    expect(result.current.noResults).toBe(false);
    expect(result.current.searchQuery).toBe("");
    expect(result.current.selectedState).toBe(null);
    expect(result.current.selectedModel).toBe(null);
  });

  it("deve aplicar filtro por estado corretamente", () => {
    const { result } = renderHook(() => useEquipmentFilter());

    act(() => {
      result.current.setSelectedState("Operando");
    });

    expect(result.current.filteredPositions).toEqual([
      { equipmentId: "1", equipmentModel: "Caminhão de carga" },
    ]);
  });

  it("deve aplicar filtro por modelo corretamente", () => {
    const { result } = renderHook(() => useEquipmentFilter());

    act(() => {
      result.current.setSelectedModel("Harvester");
    });

    expect(result.current.filteredPositions).toEqual([
      { equipmentId: "2", equipmentModel: "Harvester" },
    ]);
  });

  it("deve aplicar filtro combinado por estado e modelo", () => {
    const { result } = renderHook(() => useEquipmentFilter());

    act(() => {
      result.current.setSelectedState("Operando");
      result.current.setSelectedModel("Harvester");
    });

    expect(result.current.filteredPositions).toEqual([]);
  });

  it("deve atualizar a searchQuery corretamente", () => {
    const { result } = renderHook(() => useEquipmentFilter());

    act(() => {
      result.current.setSearchQuery("colheitadeira");
    });

    expect(result.current.searchQuery).toBe("colheitadeira");
  });
});
