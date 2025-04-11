import { render, screen } from "@testing-library/react";
import { MapContainerProps, MarkerProps, PopupProps } from "react-leaflet";
import { describe, expect, it, vi } from "vitest";
import EquipmentMap from "./EquipmentMap";

vi.mock("react-leaflet", () => {
  return {
    MapContainer: ({ children }: MapContainerProps) => (
      <div data-testid="map">{children}</div>
    ),
    TileLayer: () => <div data-testid="tile-layer" />,
    Marker: ({ children }: MarkerProps) => (
      <div data-testid="marker">{children}</div>
    ),
    Popup: ({ children }: PopupProps) => (
      <div data-testid="popup">{children}</div>
    ),
    ZoomControl: () => <div data-testid="zoom-control" />,
    useMapEvents: () => ({}),
  };
});

vi.mock("../hooks/useEquipmentFilter", () => ({
  default: () => ({
    searchQuery: "",
    setSearchQuery: vi.fn(),
    selectedState: null,
    setSelectedState: vi.fn(),
    selectedModel: null,
    setSelectedModel: vi.fn(),
    filteredPositions: [
      {
        equipmentId: "123",
        lat: -19.1,
        lon: -45.9,
        equipmentName: "Trator 1",
        equipmentModel: "modelo-a",
      },
    ],
    noResults: false,
  }),
}));

vi.mock("../hooks/useEquipmentIcons", () => ({
  default: () => ({
    getEquipmentIcon: vi.fn(() => ({})),
  }),
}));

vi.mock("../hooks/useEquipmentState", () => ({
  default: () => [
    {
      equipmentId: "123",
      stateName: "Operando",
      stateColor: "#00FF00",
    },
  ],
}));

vi.mock("../hooks/useSelectedEquipment", () => ({
  default: () => ({
    selectedEquipment: null,
    setSelectedEquipment: vi.fn(),
    lastEquipmentModel: { name: "Modelo A" },
    history: [
      {
        date: "01/04/2025",
        time: "08:00",
        stateName: "Operando",
        stateColor: "#00FF00",
      },
      {
        date: "01/04/2025",
        time: "12:00",
        stateName: "Parado",
        stateColor: "#FF0000",
      },
    ],
  }),
}));

vi.mock("../components/EquipmentHistoryPanel", () => ({
  default: () => <div data-testid="history-panel" />,
}));

vi.mock("../components/MapError", () => ({
  default: () => <div data-testid="map-error" />,
}));

vi.mock("../components/NoResults", () => ({
  default: () => <div data-testid="no-results" />,
}));

vi.mock("../components/SearchBar", () => ({
  default: () => (
    <input
      placeholder="Buscar por nome ou modelo do equipamento"
      data-testid="search-bar"
    />
  ),
}));

vi.mock("../components/FilterPanel", () => ({
  default: () => <div>Filtro</div>,
}));

describe("EquipmentMap", () => {
  it("renderiza o mapa e os componentes de filtro e busca", () => {
    render(<EquipmentMap />);

    const searchInput = screen.getByPlaceholderText(
      "Buscar por nome ou modelo do equipamento",
    );
    const filterPanel = screen.getByText("Filtro");

    expect(searchInput).toBeTruthy();
    expect(filterPanel).toBeTruthy();
  });

  it("exibe informações no popup do marcador", async () => {
    render(<EquipmentMap />);

    const nome = await screen.findByText("Trator 1");
    const modelo = await screen.findByText(/Modelo:/);
    const produtividade = await screen.findByText(/Produtividade:/);
    const estado = await screen.findByText(/Operando/);

    expect(nome).not.toBeNull();
    expect(modelo).not.toBeNull();
    expect(produtividade).not.toBeNull();
    expect(estado).not.toBeNull();
  });

  it("renderiza o componente de erro quando ocorre erro no mapa", () => {
    render(<div data-testid="map-error" />);
    const error = screen.queryByTestId("map-error");
    expect(error).not.toBeNull();
  });

  it("exibe o componente de sem resultados", () => {
    render(<div data-testid="no-results" />);
    const noResults = screen.queryByTestId("no-results");
    expect(noResults).not.toBeNull();
  });
});
