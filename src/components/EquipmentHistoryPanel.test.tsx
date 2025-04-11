import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { EquipmentHistoryFormattedEntry } from "../types/equipmentTypes";
import EquipmentHistoryPanel from "./EquipmentHistoryPanel";

const mockHistory: EquipmentHistoryFormattedEntry[] = [
  {
    stateName: "Operando",
    stateColor: "#00FF00",
    date: "2024-04-04",
    time: "14:00",
  },
  {
    stateName: "Parado",
    stateColor: "#FF0000",
    date: "2024-04-04",
    time: "16:00",
  },
];

describe("EquipmentHistoryPanel", () => {
  it("renderiza o título e a lista de histórico quando houver dados", () => {
    const handleClose = vi.fn();

    render(
      <EquipmentHistoryPanel
        equipmentId="123"
        history={mockHistory}
        onClose={handleClose}
      />,
    );

    const title = screen.getByText("Histórico do Equipamento");
    expect(title).not.toBeNull();
    expect(title.tagName).toBe("H2");

    const operando = screen.getByText("Operando");
    expect(operando).not.toBeNull();
    expect(operando.tagName).toBe("P");

    const parado = screen.getByText("Parado");
    expect(parado).not.toBeNull();

    const time = screen.getByText("2024-04-04 às 14:00");
    expect(time).not.toBeNull();
  });

  it("exibe mensagem quando não houver histórico", () => {
    const handleClose = vi.fn();

    render(
      <EquipmentHistoryPanel
        equipmentId="123"
        history={[]}
        onClose={handleClose}
      />,
    );

    const message = screen.getByText("Nenhum histórico disponível.");
    expect(message).not.toBeNull();
    expect(message.textContent).toContain("Nenhum histórico");
  });

  it("chama a função de fechar ao clicar no botão", () => {
    const handleClose = vi.fn();

    render(
      <EquipmentHistoryPanel
        equipmentId="123"
        history={mockHistory}
        onClose={handleClose}
      />,
    );

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledOnce();
  });
});
