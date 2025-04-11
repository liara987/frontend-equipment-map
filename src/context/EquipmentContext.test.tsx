import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { EquipmentContext, EquipmentModelContext } from "./EquipmentContext";

import equipment from "../data/equipment.json";
import equipmentModel from "../data/equipmentModel.json";

function EquipmentConsumer() {
  const equipments = React.useContext(EquipmentContext);
  const models = React.useContext(EquipmentModelContext);

  if (!equipments || !models) return;

  return (
    <div>
      <p data-testid="equipment-count">Equipamentos: {equipments.length}</p>
      <p data-testid="model-name">
        Modelo: {models.length > 0 ? models[0].name : "Nenhum modelo"}
      </p>
    </div>
  );
}

describe("EquipmentContext", () => {
  it("fornece corretamente os dados de contexto", () => {
    render(
      <EquipmentContext.Provider value={equipment}>
        <EquipmentModelContext.Provider value={equipmentModel}>
          <EquipmentConsumer />
        </EquipmentModelContext.Provider>
      </EquipmentContext.Provider>,
    );

    expect(screen.getByTestId("equipment-count").textContent).toContain(
      `Equipamentos: ${equipment.length}`,
    );

    expect(screen.getByTestId("model-name").textContent).toContain(
      `Modelo: ${equipmentModel[0].name}`,
    );
  });

  it("exibe 0 e fallback quando os contextos estão vazios", () => {
    render(
      <EquipmentContext.Provider value={[]}>
        <EquipmentModelContext.Provider value={[]}>
          <EquipmentConsumer />
        </EquipmentModelContext.Provider>
      </EquipmentContext.Provider>,
    );

    expect(screen.getByTestId("equipment-count").textContent).toBe(
      "Equipamentos: 0",
    );

    expect(screen.getByTestId("model-name").textContent).toBe(
      "Modelo: Nenhum modelo",
    );
  });
});
