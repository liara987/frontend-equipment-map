import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("renderiza corretamente com input e ícone de busca", () => {
    render(<SearchBar onSearch={() => {}} />);
    expect(
      screen.getByPlaceholderText("Buscar por nome ou modelo do equipamento"),
    ).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });

  it("chama onSearch quando o usuário digita", () => {
    const onSearchMock = vi.fn();
    render(<SearchBar onSearch={onSearchMock} />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "Harvester" } });

    expect(onSearchMock).toHaveBeenCalledWith("Harvester");
    expect(onSearchMock).toHaveBeenCalledTimes(1);
  });

  it("chama onFocus quando o input recebe foco", () => {
    const onFocusMock = vi.fn();
    render(<SearchBar onSearch={() => {}} onFocus={onFocusMock} />);
    const input = screen.getByRole("textbox");

    fireEvent.focus(input);

    expect(onFocusMock).toHaveBeenCalledTimes(1);
  });

  it("mostra o botão de limpar quando há texto e o esconde ao limpar", () => {
    const onSearchMock = vi.fn();
    render(<SearchBar onSearch={onSearchMock} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "Teste" } });
    expect(screen.getByRole("button")).toBeTruthy();
    expect(onSearchMock).toHaveBeenCalledWith("Teste");

    fireEvent.click(screen.getByRole("button"));
    expect(input.value).toBe("");
    expect(onSearchMock).toHaveBeenCalledWith("");
  });
});
