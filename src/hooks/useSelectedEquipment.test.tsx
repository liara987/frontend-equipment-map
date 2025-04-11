import { renderHook } from "@testing-library/react";
import { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";
import { EquipmentContext } from "../context/EquipmentContext";
import { Equipment } from "../types/equipmentTypes";
import useGetEquipmentById from "./useGetEquipmentById";

const mockEquipments: Equipment[] = [
  { id: "eq1", equipmentModelId: "model1", name: "Trator 1" },
  { id: "eq2", equipmentModelId: "model2", name: "Colheitadeira 2" },
];

const createWrapper = (value: Equipment[] | null) => {
  return ({ children }: { children: ReactNode }) => (
    <EquipmentContext.Provider value={value as Equipment[]}>
      {children}
    </EquipmentContext.Provider>
  );
};

describe("useGetEquipmentById", () => {
  it("retorna o equipamento correto pelo ID", () => {
    const { result } = renderHook(() => useGetEquipmentById("eq1"), {
      wrapper: createWrapper(mockEquipments),
    });

    expect(result.current).toEqual({
      id: "eq1",
      equipmentModelId: "model1",
      name: "Trator 1",
    });
  });

  it("retorna null se o ID não for encontrado", () => {
    const { result } = renderHook(() => useGetEquipmentById("inexistente"), {
      wrapper: createWrapper(mockEquipments),
    });

    expect(result.current).toBeNull();
  });

  it("retorna null e mostra erro no console se o contexto for inválido", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const { result } = renderHook(() => useGetEquipmentById("eq1"), {
      wrapper: createWrapper(null),
    });

    expect(result.current).toBeNull();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Erro: EquipmentContext inválido ou não definido.",
    );

    consoleSpy.mockRestore();
  });
});
