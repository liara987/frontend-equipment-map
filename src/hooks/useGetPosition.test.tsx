import { renderHook } from "@testing-library/react";
import { ReactNode } from "react";
import { describe, expect, it } from "vitest";
import { EquipmentPositionHistoryContext } from "../context/EquipmentContext";
import {
  EquipmentPositionHistory,
  PositionData,
} from "../types/equipmentTypes";
import useGetPosition from "./useGetPosition";

const mockContextData = [
  {
    equipmentId: "equip-1",
    positions: [
      { date: "2024-04-04T10:00:00Z", lat: -23.5, lon: -46.6 },
      { date: "2024-04-04T11:00:00Z", lat: -23.6, lon: -46.7 },
    ],
  },
  {
    equipmentId: "equip-2",
    positions: [{ date: "2024-04-04T12:00:00Z", lat: -23.7, lon: -46.8 }],
  },
];

const createWrapper = (value: EquipmentPositionHistory[] = []) => {
  return ({ children }: { children: ReactNode }) => (
    <EquipmentPositionHistoryContext.Provider value={value}>
      {children}
    </EquipmentPositionHistoryContext.Provider>
  );
};

describe("useGetPosition", () => {
  it("retorna posições corretamente a partir do contexto", async () => {
    const { result } = renderHook(() => useGetPosition(), {
      wrapper: createWrapper(mockContextData),
    });

    expect(result.current).toHaveLength(3);

    expect(result.current[0]).toMatchObject<Partial<PositionData>>({
      equipmentId: "equip-1",
      lat: -23.5,
      lon: -46.6,
    });

    expect(result.current[2].equipmentId).toBe("equip-2");
  });

  it("retorna array vazio se contexto for vazio", () => {
    const { result } = renderHook(() => useGetPosition(), {
      wrapper: createWrapper([]),
    });

    expect(result.current).toEqual([]);
  });

  it("retorna array vazio se contexto for undefined", () => {
    const { result } = renderHook(() => useGetPosition(), {
      wrapper: createWrapper(undefined),
    });

    expect(result.current).toEqual([]);
  });
});
