import L from "leaflet";
import { describe, expect, it, vi } from "vitest";
import useEquipmentIcons from "./useEquipmentIcons";

vi.mock("../assets/caminhao.png", () => ({ default: "mocked-trunk.png" }));
vi.mock("../assets/garra.png", () => ({ default: "mocked-claw.png" }));
vi.mock("../assets/harvester.png", () => ({ default: "mocked-harvester.png" }));

describe("useEquipmentIcons", () => {
  const { getEquipmentIcon } = useEquipmentIcons();

  it("retorna um L.Icon válido para Harvester", () => {
    const icon = getEquipmentIcon("Harvester");

    expect(icon).toBeInstanceOf(L.Icon);
    expect(icon.options.iconUrl as string).toBe("mocked-harvester.png");
  });

  it("retorna um L.Icon válido para Caminhão de carga", () => {
    const icon = getEquipmentIcon("Caminhão de carga");

    expect(icon).toBeInstanceOf(L.Icon);
    expect(icon.options.iconUrl as string).toBe("mocked-trunk.png");
  });

  it("retorna um L.Icon válido para modelo não mapeado (usa default)", () => {
    const icon = getEquipmentIcon("Modelo Desconhecido");

    expect(icon).toBeInstanceOf(L.Icon);
    expect(icon.options.iconUrl as string).toBe("mocked-trunk.png");
  });

  it("define corretamente tamanho e âncoras do ícone", () => {
    const icon = getEquipmentIcon("Harvester");

    expect(icon.options.iconSize).toEqual([40, 40]);
    expect(icon.options.iconAnchor).toEqual([20, 40]);
    expect(icon.options.popupAnchor).toEqual([0, -40]);
    expect(icon.options.className).toBe("leaflet-marker-icon");
  });
});
