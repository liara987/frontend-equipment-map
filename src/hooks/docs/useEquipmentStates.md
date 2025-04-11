# `useEquipmentStates`

Hook React responsável por retornar o **estado atual** de cada equipamento com base em seu histórico e na lista de estados disponíveis.

---

## 📦 Importação

```tsx
import useEquipmentStates from "caminho/para/hooks/useEquipmentStates";
```

---

## 📚 Descrição

O `useEquipmentStates` é um hook customizado que:

- Lê os dados dos contextos `EquipmentStateContext` e `EquipmentStateHistoryContext`.
- Analisa o histórico de estados de cada equipamento.
- Retorna o estado mais recente de cada equipamento (nome e cor).

---

## 📥 Retorno

### `EquipmentWithState[]`

Uma lista de objetos contendo o `equipmentId`, `stateName` e `stateColor` do estado mais recente de cada equipamento.

#### Tipo: `EquipmentWithState`

```ts
interface EquipmentWithState {
  equipmentId: string;
  stateName: string;
  stateColor: string;
}
```

---

## 🧠 Lógica Interna

1. Usa `useContext` para obter os dados de estados e histórico.
2. Verifica se os dados estão carregados, lançando erro caso contrário.
3. Utiliza `useMemo` para processar os dados apenas quando os contextos mudarem.
4. Para cada item no histórico:
   - Encontra o estado mais recente com base na data.
   - Recupera os detalhes do estado correspondente (nome e cor).
   - Caso o equipamento não tenha histórico, retorna estado padrão "Desconhecido".

---

## 🧩 Dependências

- **Contexts**:
  - `EquipmentStateContext`
  - `EquipmentStateHistoryContext`

---

## ✅ Exemplo de uso

```tsx
const equipmentStates = useEquipmentStates();

return (
  <ul>
    {equipmentStates.map((eq) => (
      <li key={eq.equipmentId}>
        {eq.equipmentId} - {eq.stateName}
        <span style={{ backgroundColor: eq.stateColor }}>●</span>
      </li>
    ))}
  </ul>
);
```

---

## ⚠️ Observações

- O hook lança um erro se os contextos não estiverem carregados corretamente.
- Estados sem histórico recebem o nome "Desconhecido" e cor padrão `#bdc3c7`.
- Otimizado com `useMemo` para melhorar desempenho.
