# `useGetPosition`

Hook React responsável por extrair e formatar o histórico de posições dos equipamentos a partir do contexto `EquipmentPositionHistoryContext`.

---

## 📦 Importação

```tsx
import useGetPosition from "caminho/para/hooks/useGetPosition";
```

---

## 📚 Descrição

O `useGetPosition` é um hook customizado que:

- Lê os dados do contexto `EquipmentPositionHistoryContext`.
- Processa e transforma os dados de posição de cada equipamento em um array plano.
- Retorna um array com os dados de posição formatados para fácil utilização em componentes.

---

## 📥 Retorno

### `PositionData[]`

Uma lista de objetos contendo informações de posição de todos os equipamentos.

#### Tipo: `PositionData`

```ts
interface PositionData {
  equipmentId: string;
  lat: number;
  lon: number;
  date: string; // ISO string representando data/hora
}
```

---

## 🧠 Lógica Interna

1. Usa `useContext` para acessar os dados do contexto `EquipmentPositionHistoryContext`.
2. Valida se os dados estão no formato esperado.
3. Concatena todas as posições de todos os equipamentos em um único array plano.
4. Usa `useEffect` para atualizar o estado `positionData` sempre que o contexto mudar.

---

## 🧩 Dependências

- **Contexto**:
  - `EquipmentPositionHistoryContext`

---

## ✅ Exemplo de uso

```tsx
const positions = useGetPosition();

return (
  <ul>
    {positions.map((pos, index) => (
      <li key={index}>
        Equipamento: {pos.equipmentId} - {pos.lat}, {pos.lon} em {pos.date}
      </li>
    ))}
  </ul>
);
```

---

## ⚠️ Observações

- O hook assume que o contexto está corretamente estruturado e populado.
- Em caso de estrutura inválida, será logado um erro no console e o hook retornará um array vazio.
