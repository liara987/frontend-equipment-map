import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("renderiza o input com o placeholder correto", () => {
    render(<SearchBar onSearch={() => {}} />);
    const input = screen.getByPlaceholderText(
      "Buscar por nome ou modelo do equipamento",
    );
    expect(input).toBeTruthy();
  });

  it("chama onSearch ao digitar no input", () => {
    const onSearchMock = vi.fn();
    render(<SearchBar onSearch={onSearchMock} />);

    const input = screen.getByPlaceholderText(
      "Buscar por nome ou modelo do equipamento",
    );
    fireEvent.change(input, { target: { value: "Trator" } });

    expect(onSearchMock).toHaveBeenCalledWith("Trator");
  });

  it("mostra botão de limpar e limpa o input ao clicar", () => {
    const onSearchMock = vi.fn();
    render(<SearchBar onSearch={onSearchMock} />);

    const input = screen.getByPlaceholderText(
      "Buscar por nome ou modelo do equipamento",
    );
    fireEvent.change(input, { target: { value: "Trator" } });

    const clearButton = screen.getByRole("button");
    expect(clearButton).toBeTruthy();

    fireEvent.click(clearButton);
    expect(onSearchMock).toHaveBeenCalledWith("");
    expect((input as HTMLInputElement).value).toBe("");
  });

  it("chama onFocus ao focar no input", () => {
    const onFocusMock = vi.fn();
    render(<SearchBar onSearch={() => {}} onFocus={onFocusMock} />);

    const input = screen.getByPlaceholderText(
      "Buscar por nome ou modelo do equipamento",
    );
    fireEvent.focus(input);

    expect(onFocusMock).toHaveBeenCalled();
  });
});
