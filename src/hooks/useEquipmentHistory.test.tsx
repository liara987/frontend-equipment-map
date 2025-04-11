import { renderHook } from "@testing-library/react";
import { ReactNode } from "react";
import { describe, expect, it } from "vitest";

import {
  EquipmentStateContext,
  EquipmentStateHistoryContext,
} from "../context/EquipmentContext";
import useFormattedEquipmentHistory from "./useEquipmentHistory";

const mockStates = [
  { id: "1", name: "Operando", color: "#00ff00" },
  { id: "2", name: "Parado", color: "#ff0000" },
];

const mockEquipmentHistory = [
  {
    equipmentId: "abc",
    states: [
      { date: "2024-04-04T12:00:00Z", equipmentStateId: "1" },
      { date: "2024-04-04T10:00:00Z", equipmentStateId: "2" },
    ],
  },
];
const wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <EquipmentStateContext.Provider value={mockStates}>
      <EquipmentStateHistoryContext.Provider value={mockEquipmentHistory}>
        {children}
      </EquipmentStateHistoryContext.Provider>
    </EquipmentStateContext.Provider>
  );
};

describe("useFormattedEquipmentHistory", () => {
  it("retorna vazio se selectedEquipment for null", () => {
    const { result } = renderHook(() => useFormattedEquipmentHistory(null), {
      wrapper,
    });

    expect(Array.isArray(result.current)).toBe(true);
    expect(result.current.length).toBe(0);
  });

  it("retorna vazio se não houver histórico do equipamento", () => {
    const { result } = renderHook(() => useFormattedEquipmentHistory("xyz"), {
      wrapper,
    });

    expect(result.current.length).toBe(0);
  });

  it("formata corretamente o histórico encontrado", () => {
    const { result } = renderHook(() => useFormattedEquipmentHistory("abc"), {
      wrapper,
    });

    expect(result.current.length).toBe(2);

    const [first, second] = result.current;

    expect(first.stateName).toBe("Operando");
    expect(first.stateColor).toBe("#00ff00");
    expect(typeof first.date).toBe("string");
    expect(typeof first.time).toBe("string");

    expect(second.stateName).toBe("Parado");
    expect(second.stateColor).toBe("#ff0000");
  });

  it("ordena os estados do mais recente para o mais antigo", () => {
    const { result } = renderHook(() => useFormattedEquipmentHistory("abc"), {
      wrapper,
    });

    const timestamps = result.current.map((entry) => {
      return new Date(`${entry.date} ${entry.time}`).getTime();
    });

    expect(timestamps[0]).toBeGreaterThan(timestamps[1]);
  });
});
