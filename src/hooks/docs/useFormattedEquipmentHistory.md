# `useFormattedEquipmentHistory`

Hook React que retorna o histórico de estados de um equipamento específico, com data e hora formatadas para exibição.

---

## 📦 Importação

```tsx
import useFormattedEquipmentHistory from "caminho/para/hooks/useFormattedEquipmentHistory";
```

---

## 📚 Descrição

O `useFormattedEquipmentHistory` é um hook customizado que:

- Recebe o ID de um equipamento selecionado.
- Acessa os contextos globais `EquipmentStateContext` e `EquipmentStateHistoryContext`.
- Retorna o histórico de estados do equipamento com data, hora, nome e cor do estado formatados.

---

## 🧾 Parâmetro

| Parâmetro           | Tipo             | Descrição                     |
| ------------------- | ---------------- | ----------------------------- |
| `selectedEquipment` | `string \| null` | ID do equipamento selecionado |

---

## 📥 Retorno

### `EquipmentHistoryEntry[]`

Lista de estados históricos formatados para o equipamento selecionado.

#### Tipo: `EquipmentHistoryEntry`

```ts
interface EquipmentHistoryEntry {
  date: string; // Ex: "05/04/2025"
  time: string; // Ex: "14:30"
  stateName: string; // Nome do estado
  stateColor: string; // Cor do estado
}
```

---

## 🧠 Lógica Interna

1. Usa `useContext` para acessar os contextos de estados e histórico.
2. Verifica se o equipamento foi selecionado.
3. Busca o histórico do equipamento correspondente.
4. Mapeia os estados para objetos formatados com:
   - `date` e `time` no formato `pt-BR`.
   - Nome e cor do estado.
5. Ordena os resultados do mais recente para o mais antigo.

---

## 🧩 Dependências

- **Contexts**:
  - `EquipmentStateContext`
  - `EquipmentStateHistoryContext`

---

## ✅ Exemplo de uso

```tsx
const history = useFormattedEquipmentHistory("eq123");

return (
  <ul>
    {history.map((entry, index) => (
      <li key={index}>
        {entry.date} {entry.time} - {entry.stateName}
        <span style={{ backgroundColor: entry.stateColor }}>●</span>
      </li>
    ))}
  </ul>
);
```

---

## ⚠️ Observações

- Se `selectedEquipment` for `null` ou não tiver histórico, retorna uma lista vazia.
- Os dados são otimizados com `useMemo` para evitar recomputações desnecessárias.
