# 🗺️ Componente: `EquipmentMap`

## ✨ Descrição

`EquipmentMap` é o componente responsável por renderizar o mapa interativo com os equipamentos posicionados geograficamente. Ele oferece funcionalidades de busca, filtragem por estado e modelo, e exibição de informações detalhadas dos equipamentos, incluindo produtividade e histórico de estados.

---

## 📦 Localização

Arquivo:  
`src/pages/EquipmentMap.tsx`

---

## 🔍 Funcionalidades

- Exibe um mapa com os equipamentos em suas respectivas posições.
- Permite buscar por nome do equipamento.
- Filtra equipamentos por estado e modelo.
- Exibe informações detalhadas no `Popup` ao clicar em um marcador.
- Mostra painel lateral com histórico do equipamento selecionado.
- Trata erros de carregamento de tiles (renderização do mapa).
- Calcula e exibe a produtividade do equipamento com base no histórico.

---

## 🧩 Estrutura

```tsx
<div>
  <SearchBar />
  <FilterPanel />
  <NoResults />
  <MapContainer>
    <TileLayer />
    <ZoomControl />
    <Marker>
      <Popup>
        <Informações do equipamento>
      </Popup>
    </Marker>
  </MapContainer>
  <EquipmentHistoryPanel />
</div>
```
