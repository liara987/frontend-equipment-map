import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { EquipmentPosition } from "../types/equipmentTypes";
import useFilteredPositions from "./useFilteredPositions";

const mockPositions: EquipmentPosition[] = [
  {
    equipmentId: "1",
    equipmentName: "Trator Alpha",
    equipmentModel: "Harvester",
    lat: -23.5,
    lon: -46.6,
  },
  {
    equipmentId: "2",
    equipmentName: "Caminhão Beta",
    equipmentModel: "Caminhão de carga",
    lat: -23.6,
    lon: -46.7,
  },
];

describe("useFilteredPositions", () => {
  it("retorna todas as posições quando a busca está vazia", () => {
    const { result } = renderHook(() =>
      useFilteredPositions({ positions: mockPositions, searchQuery: "" }),
    );

    expect(result.current.filteredPositions.length).toBe(2);
    expect(result.current.noResults).toBe(false);
  });

  it("filtra corretamente por nome do equipamento", () => {
    const { result } = renderHook(() =>
      useFilteredPositions({ positions: mockPositions, searchQuery: "trator" }),
    );

    expect(result.current.filteredPositions.length).toBe(1);
    expect(result.current.filteredPositions[0].equipmentName).toBe(
      "Trator Alpha",
    );
    expect(result.current.noResults).toBe(false);
  });

  it("filtra corretamente por modelo do equipamento", () => {
    const { result } = renderHook(() =>
      useFilteredPositions({ positions: mockPositions, searchQuery: "carga" }),
    );

    expect(result.current.filteredPositions.length).toBe(1);
    expect(result.current.filteredPositions[0].equipmentModel).toBe(
      "Caminhão de carga",
    );
    expect(result.current.noResults).toBe(false);
  });

  it("retorna noResults true quando nenhum equipamento corresponde", () => {
    const { result } = renderHook(() =>
      useFilteredPositions({
        positions: mockPositions,
        searchQuery: "inexistente",
      }),
    );

    expect(result.current.filteredPositions.length).toBe(0);
    expect(result.current.noResults).toBe(true);
  });

  it("ignora espaços em branco na busca", () => {
    const { result } = renderHook(() =>
      useFilteredPositions({ positions: mockPositions, searchQuery: "   " }),
    );

    expect(result.current.filteredPositions.length).toBe(2);
    expect(result.current.noResults).toBe(false);
  });
});
