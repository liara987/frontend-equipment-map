# `useEquipmentFilter`

Hook React que fornece funcionalidades completas de filtro para equipamentos com base em nome/modelo, estado e modelo do equipamento.

---

## 📦 Importação

```tsx
import useEquipmentFilter from "caminho/para/hooks/useEquipmentFilter";
```

---

## 📚 Descrição

O `useEquipmentFilter` combina múltiplos hooks auxiliares para oferecer uma interface poderosa de busca e filtragem de equipamentos:

- 🔍 Filtro por texto (nome/modelo do equipamento)
- 🎯 Filtro por estado do equipamento
- 🧩 Filtro por modelo do equipamento

---

## 🔗 Hooks Internos Utilizados

- `useEquipmentStates` – para obter os estados mais recentes dos equipamentos
- `useLatestPositions` – para obter as últimas posições conhecidas
- `useFilteredPositions` – para aplicar o filtro de texto

---

## 🧾 Retorno

| Propriedade         | Tipo                              | Descrição                                    |
| ------------------- | --------------------------------- | -------------------------------------------- |
| `searchQuery`       | `string`                          | Termo de busca atual                         |
| `setSearchQuery`    | `(value: string) => void`         | Atualiza o termo de busca                    |
| `selectedState`     | `string \| null`                  | Estado selecionado para filtro               |
| `setSelectedState`  | `(value: string \| null) => void` | Atualiza o estado selecionado                |
| `selectedModel`     | `string \| null`                  | Modelo selecionado para filtro               |
| `setSelectedModel`  | `(value: string \| null) => void` | Atualiza o modelo selecionado                |
| `filteredPositions` | `LatestPosition[]`                | Lista de equipamentos após todos os filtros  |
| `noResults`         | `boolean`                         | Indica se não houve resultados após o filtro |

---

## ✅ Exemplo de uso

```tsx
const {
  searchQuery,
  setSearchQuery,
  selectedState,
  setSelectedState,
  selectedModel,
  setSelectedModel,
  filteredPositions,
  noResults,
} = useEquipmentFilter();

return (
  <div>
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <select onChange={(e) => setSelectedState(e.target.value)}>
      <option value="">Todos</option>
      <option value="Ativo">Ativo</option>
      <option value="Inativo">Inativo</option>
    </select>
    <ul>
      {filteredPositions.map((eq) => (
        <li key={eq.equipmentId}>{eq.equipmentName}</li>
      ))}
      {noResults && <p>Nenhum resultado encontrado.</p>}
    </ul>
  </div>
);
```

---

## 🧠 Lógica Interna

1. Filtra por nome ou modelo usando `useFilteredPositions`.
2. Filtra o resultado anterior por estado (`selectedState`) e modelo (`selectedModel`).
3. Retorna o resultado final e métodos para manipulação dos filtros.

---

## ⚠️ Observações

- Utiliza `useMemo` para otimizar a filtragem por estado e modelo.
- Ideal para interfaces interativas com campos de filtro e busca.

---

## 📁 Dependências

- Hooks auxiliares (`useEquipmentStates`, `useLatestPositions`, `useFilteredPositions`)
- Tipos: `LatestPosition`
