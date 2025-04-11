import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import FilterButton from "./FilterButton";

describe("FilterButton", () => {
  it("renderiza o botão com o ícone de filtro", () => {
    const setShowFilters = vi.fn();

    render(
      <FilterButton showFilters={false} setShowFilters={setShowFilters} />,
    );

    const button = screen.getByRole("button");
    expect(button).not.toBeNull();

    const icon = button.querySelector("svg");
    expect(icon).not.toBeNull();
  });

  it("alterna o estado corretamente ao clicar", () => {
    const setShowFilters = vi.fn();

    render(
      <FilterButton showFilters={false} setShowFilters={setShowFilters} />,
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(setShowFilters).toHaveBeenCalledOnce();
    expect(setShowFilters).toHaveBeenCalledWith(true);
  });

  it("alterna para false se showFilters for true", () => {
    const setShowFilters = vi.fn();

    render(<FilterButton showFilters={true} setShowFilters={setShowFilters} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(setShowFilters).toHaveBeenCalledOnce();
    expect(setShowFilters).toHaveBeenCalledWith(false);
  });
});
