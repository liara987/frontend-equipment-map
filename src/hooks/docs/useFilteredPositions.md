# `useFilteredPositions`

Hook React responsável por filtrar uma lista de posições de equipamentos com base em um termo de busca textual.

---

## 📦 Importação

```tsx
import useFilteredPositions from "caminho/para/hooks/useFilteredPositions";
```

---

## 📚 Descrição

O `useFilteredPositions` é um hook customizado que:

- Recebe uma lista de posições de equipamentos e um termo de busca (`searchQuery`).
- Filtra os equipamentos cujo nome ou modelo correspondam ao termo buscado (case insensitive).
- Informa se a busca não retornou resultados.

---

## 🧾 Parâmetros

### `UseFilteredPositionsProps`

```ts
interface UseFilteredPositionsProps {
  positions: EquipmentPosition[];
  searchQuery: string;
}
```

- **positions**: Lista de posições de equipamentos a serem filtradas.
- **searchQuery**: Termo de busca digitado pelo usuário.

#### Tipo: `EquipmentPosition` (parcial)

```ts
interface EquipmentPosition {
  equipmentName: string;
  equipmentModel?: string;
  // outros campos relacionados à posição...
}
```

---

## 📥 Retorno

```ts
{
  filteredPositions: EquipmentPosition[];
  noResults: boolean;
}
```

- **filteredPositions**: Lista de posições que correspondem ao filtro.
- **noResults**: `true` se há uma busca ativa e nenhum resultado foi encontrado.

---

## 🧠 Lógica Interna

1. Usa `useMemo` para memorizar o resultado da filtragem.
2. Converte o termo de busca e os campos `equipmentName` e `equipmentModel` para lowercase para comparação case insensitive.
3. Se o termo de busca estiver vazio, retorna todas as posições.
4. Define `noResults` como verdadeiro caso o termo de busca esteja preenchido e nenhum resultado seja encontrado.

---

## ✅ Exemplo de uso

```tsx
const { filteredPositions, noResults } = useFilteredPositions({
  positions: allPositions,
  searchQuery: userSearch,
});

return (
  <div>
    {noResults ? (
      <p>Nenhum equipamento encontrado.</p>
    ) : (
      <ul>
        {filteredPositions.map((pos, index) => (
          <li key={index}>
            {pos.equipmentName} - {pos.equipmentModel}
          </li>
        ))}
      </ul>
    )}
  </div>
);
```

---

## ⚠️ Observações

- Ideal para implementar sistemas de busca ou filtros de equipamentos.
- A lógica é reavaliada apenas quando `positions` ou `searchQuery` mudam, graças ao `useMemo`.
