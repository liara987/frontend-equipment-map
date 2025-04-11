# `useLatestPositions`

Hook personalizado que retorna a **última posição conhecida** de cada equipamento, incluindo o nome e modelo do equipamento.

---

## 📦 Importação

```tsx
import useLatestPositions from "caminho/para/hooks/useLatestPositions";
```

---

## 📚 Descrição

O `useLatestPositions` é um hook React que:

- Lê os dados de posições usando `useGetPosition`.
- Acessa os contextos `EquipmentContext` e `EquipmentModelContext` para obter informações adicionais.
- Filtra e retorna **apenas a última posição registrada** de cada equipamento.
- Enriquece as informações com o nome do equipamento e o nome do modelo correspondente.

---

## 📥 Retorno

### `LatestPosition[]`

Uma lista de objetos representando a última posição de cada equipamento.

#### Tipo: `LatestPosition`

```ts
interface LatestPosition {
  equipmentId: string;
  lat: number;
  lon: number;
  date: string; // ISO string
  equipmentName: string; // Nome do equipamento
  equipmentModel: string; // Nome do modelo do equipamento
}
```

---

## 🧠 Lógica Interna

1. Agrupa todas as posições recebidas por `equipmentId`.
2. Retém apenas a posição mais recente para cada equipamento.
3. Busca o nome e o modelo do equipamento usando os contextos.
4. Retorna um array com as informações enriquecidas.

---

## 🧩 Dependências

- **Contexts**:
  - `EquipmentContext`
  - `EquipmentModelContext`
- **Hook externo**:
  - `useGetPosition`

---

## ✅ Exemplo de uso

```tsx
const latestPositions = useLatestPositions();

return (
  <ul>
    {latestPositions.map((pos) => (
      <li key={pos.equipmentId}>
        {pos.equipmentName} ({pos.equipmentModel}) - {pos.lat}, {pos.lon} em{" "}
        {pos.date}
      </li>
    ))}
  </ul>
);
```

---

## ⚠️ Observações

- Certifique-se de que os contextos `EquipmentContext` e `EquipmentModelContext` estejam corretamente fornecidos no componente pai.
- O hook assume que os dados de posição vêm ordenados ou precisam ser verificados por data para identificar a mais recente.
