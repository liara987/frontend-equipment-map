import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import MapError from "./MapError";

describe("MapError", () => {
  it("renderiza as mensagens de erro", () => {
    render(<MapError />);

    expect(screen.getByText("O mapa não pôde ser carregado")).toBeTruthy();
    expect(
      screen.getByText(
        "Verifique sua conexão com a internet ou tente recarregar a página.",
      ),
    ).toBeTruthy();
  });

  it("não renderiza o botão de recarregar se onRetry não for fornecido", () => {
    render(<MapError />);

    const reloadButton = screen.queryByRole("button", { name: /recarregar/i });
    expect(reloadButton).toBeNull();
  });

  it("renderiza o botão de recarregar quando onRetry é passado", () => {
    render(<MapError onRetry={() => {}} />);

    const reloadButton = screen.getByRole("button", { name: /recarregar/i });
    expect(reloadButton).toBeTruthy();
  });

  it("chama onRetry quando o botão é clicado", () => {
    const onRetryMock = vi.fn();
    render(<MapError onRetry={onRetryMock} />);

    const reloadButton = screen.getByRole("button", { name: /recarregar/i });
    fireEvent.click(reloadButton);

    expect(onRetryMock).toHaveBeenCalledOnce();
  });
});
