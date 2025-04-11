# 📊 Utilitário: `calculateProductivity`

## ✨ Descrição

Função utilitária para calcular o percentual de produtividade de um equipamento com base em um histórico de estados (`Operando`, `Parado`, etc). A produtividade é definida como a porcentagem de tempo que o equipamento esteve em estado `Operando` durante um período de 24 horas.

---

## 📥 Entrada

### `HistoryEntry[]`

Um array de objetos que representam os estados registrados ao longo do dia.

```ts
type HistoryEntry = {
  date: string; // formato: 'dd/mm/yyyy'
  time: string; // formato: 'HH:mm:ss'
  stateName: string; // nome do estado (ex: 'Operando', 'Parado', etc)
  stateColor: string; // cor representativa do estado (não influencia no cálculo)
};
```
