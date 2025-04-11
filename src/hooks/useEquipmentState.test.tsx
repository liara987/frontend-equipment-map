import { renderHook } from "@testing-library/react";
import { ReactNode } from "react";
import { describe, expect, it } from "vitest";

import {
  EquipmentStateContext,
  EquipmentStateHistoryContext,
} from "../context/EquipmentContext";
import useEquipmentStates from "./useEquipmentState";

const mockStates = [
  { id: "1", name: "Operando", color: "#00ff00" },
  { id: "2", name: "Parado", color: "#ff0000" },
];

const mockHistory = [
  {
    equipmentId: "abc",
    states: [
      { date: "2024-04-04T12:00:00Z", equipmentStateId: "1" },
      { date: "2024-04-04T10:00:00Z", equipmentStateId: "2" },
    ],
  },
  {
    equipmentId: "xyz",
    states: [],
  },
];

const wrapper = ({ children }: { children: ReactNode }) => (
  <EquipmentStateContext.Provider value={mockStates}>
    <EquipmentStateHistoryContext.Provider value={mockHistory}>
      {children}
    </EquipmentStateHistoryContext.Provider>
  </EquipmentStateContext.Provider>
);

describe("useEquipmentStates", () => {
  it("retorna os estados dos equipamentos com base no último registro", () => {
    const { result } = renderHook(() => useEquipmentStates(), { wrapper });

    expect(result.current.length).toBe(2);

    const [first, second] = result.current;

    expect(first.equipmentId).toBe("abc");
    expect(first.stateName).toBe("Operando");
    expect(first.stateColor).toBe("#00ff00");

    expect(second.equipmentId).toBe("xyz");
    expect(second.stateName).toBe("Desconhecido");
    expect(second.stateColor).toBe("#bdc3c7");
  });

  it("retorna vazio se os arrays estiverem vazios", () => {
    const wrapperEmpty = ({ children }: { children: ReactNode }) => (
      <EquipmentStateContext.Provider value={[]}>
        <EquipmentStateHistoryContext.Provider value={[]}>
          {children}
        </EquipmentStateHistoryContext.Provider>
      </EquipmentStateContext.Provider>
    );

    const { result } = renderHook(() => useEquipmentStates(), {
      wrapper: wrapperEmpty,
    });

    expect(Array.isArray(result.current)).toBe(true);
    expect(result.current.length).toBe(0);
  });
});
