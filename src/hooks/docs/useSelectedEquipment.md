# `useSelectedEquipment`

Hook personalizado para gerenciar o equipamento selecionado e obter seu modelo e histórico formatado.

---

## 📦 Importação

```tsx
import useSelectedEquipment from "../hooks/useSelectedEquipment";
```

---

## 🧠 Descrição

O `useSelectedEquipment` é um hook que:

- Armazena o ID do equipamento selecionado.
- Busca o modelo do equipamento.
- Mantém o último modelo carregado, mesmo após o ID ser alterado.
- Retorna o histórico formatado do equipamento selecionado.

Esse hook é útil em interfaces onde o usuário pode selecionar diferentes equipamentos, visualizar seus dados e manter o contexto do modelo carregado.

---

## ✅ Retorno

Retorna um objeto com as seguintes propriedades:

| Propriedade            | Tipo                           | Descrição                                                                |
| ---------------------- | ------------------------------ | ------------------------------------------------------------------------ |
| `selectedEquipment`    | `string \| null`               | ID do equipamento atualmente selecionado.                                |
| `setSelectedEquipment` | `(id: string \| null) => void` | Função para definir o equipamento selecionado.                           |
| `lastEquipmentModel`   | `EquipmentModel \| null`       | Último modelo do equipamento selecionado (mantido mesmo após alteração). |
| `history`              | `FormattedHistoryEntry[]`      | Histórico formatado do equipamento atual.                                |

> ℹ️ O tipo `FormattedHistoryEntry[]` vem de `useFormattedEquipmentHistory` e representa os estados do equipamento ao longo do tempo.

---

## 📚 Hooks utilizados

- `useState`
- `useEffect`
- `useEquipmentModel(id)`
- `useFormattedEquipmentHistory(id)`

---

## 🔁 Exemplo de uso

```tsx
const { selectedEquipment, setSelectedEquipment, lastEquipmentModel, history } =
  useSelectedEquipment();

// Exemplo: Selecionar um equipamento
setSelectedEquipment("equipamento-123");

// Exibir o nome do modelo do equipamento selecionado
console.log(lastEquipmentModel?.name);

// Listar o histórico
history.forEach((entry) => {
  console.log(`${entry.date} - ${entry.stateName}`);
});
```

---

## 📎 Dependências

- [`useEquipmentModel`](./useEquipmentModel.ts)
- [`useFormattedEquipmentHistory`](./useEquipmentHistory.ts)
- [`EquipmentModel`](../types/equipmentTypes.ts)
