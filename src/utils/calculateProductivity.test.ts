import { describe, expect, it } from "vitest";
import { calculateProductivity } from "./calculateProductivity";

describe("calculateProductivity", () => {
  it("retorna 0 se o histórico estiver vazio ou com menos de 2 entradas", () => {
    expect(calculateProductivity([])).toBe(0);
    expect(
      calculateProductivity([
        {
          date: "05/04/2025",
          time: "10:00:00",
          stateName: "Operando",
          stateColor: "#00ff00",
        },
      ]),
    ).toBe(0);
  });

  it("calcula corretamente a produtividade com entradas ordenadas", () => {
    const history = [
      {
        date: "05/04/2025",
        time: "08:00:00",
        stateName: "Operando",
        stateColor: "#00ff00",
      },
      {
        date: "05/04/2025",
        time: "12:00:00",
        stateName: "Parado",
        stateColor: "#ff0000",
      },
    ];

    const expectedHours = 4;
    const expected = (expectedHours / 24) * 100;

    expect(calculateProductivity(history)).toBeCloseTo(expected, 2);
  });

  it("calcula corretamente mesmo com entradas fora de ordem", () => {
    const history = [
      {
        date: "05/04/2025",
        time: "12:00:00",
        stateName: "Parado",
        stateColor: "#ff0000",
      },
      {
        date: "05/04/2025",
        time: "08:00:00",
        stateName: "Operando",
        stateColor: "#00ff00",
      },
    ];

    const expectedHours = 4;
    const expected = (expectedHours / 24) * 100;

    expect(calculateProductivity(history)).toBeCloseTo(expected, 2);
  });

  it("retorna 0 se nenhum período for 'Operando'", () => {
    const history = [
      {
        date: "05/04/2025",
        time: "08:00:00",
        stateName: "Parado",
        stateColor: "#ff0000",
      },
      {
        date: "05/04/2025",
        time: "12:00:00",
        stateName: "Parado",
        stateColor: "#ff0000",
      },
    ];

    expect(calculateProductivity(history)).toBe(0);
  });

  it("calcula 100% de produtividade se ficou 24h operando", () => {
    const history = [
      {
        date: "05/04/2025",
        time: "00:00:00",
        stateName: "Operando",
        stateColor: "#00ff00",
      },
      {
        date: "06/04/2025",
        time: "00:00:00",
        stateName: "Parado",
        stateColor: "#ff0000",
      },
    ];

    expect(calculateProductivity(history)).toBeCloseTo(100, 2);
  });
});
