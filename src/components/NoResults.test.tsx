import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NoResults from "./NoResults";

describe("NoResults", () => {
  it("renderiza a mensagem com a query de busca fornecida", () => {
    const query = "Harvester";
    render(<NoResults searchQuery={query} />);

    const message = screen.getByText((content) =>
      content.includes(`Nenhum equipamento encontrado com esse nome ou modelo`),
    );

    const queryText = screen.getByText(query);

    expect(message).toBeTruthy();
    expect(queryText.tagName).toBe("STRONG");
  });
});
