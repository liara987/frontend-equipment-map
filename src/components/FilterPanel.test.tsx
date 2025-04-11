import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import FilterPanel from "./FilterPanel";

describe("FilterPanel", () => {
  it("deve renderizar o botão de filtro", () => {
    render(
      <FilterPanel
        selectedState={null}
        setSelectedState={() => {}}
        selectedModel={null}
        setSelectedModel={() => {}}
      />,
    );

    const filterButton = screen.getByRole("button");
    expect(filterButton).toBeTruthy();
  });

  it("deve exibir o painel de filtros ao clicar no botão", () => {
    render(
      <FilterPanel
        selectedState={null}
        setSelectedState={() => {}}
        selectedModel={null}
        setSelectedModel={() => {}}
      />,
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const estadoSelect = screen.getByLabelText("Estado:");
    const modeloSelect = screen.getByLabelText("Modelo:");

    expect(estadoSelect).toBeTruthy();
    expect(modeloSelect).toBeTruthy();
  });

  it("deve chamar as funções ao selecionar opções", () => {
    const mockSetState = vi.fn();
    const mockSetModel = vi.fn();

    render(
      <FilterPanel
        selectedState={null}
        setSelectedState={mockSetState}
        selectedModel={null}
        setSelectedModel={mockSetModel}
      />,
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const estadoSelect = screen.getByLabelText("Estado:");
    fireEvent.change(estadoSelect, { target: { value: "Operando" } });
    expect(mockSetState).toHaveBeenCalledWith("Operando");

    const modeloSelect = screen.getByLabelText("Modelo:");
    fireEvent.change(modeloSelect, { target: { value: "Harvester" } });
    expect(mockSetModel).toHaveBeenCalledWith("Harvester");
  });
});
