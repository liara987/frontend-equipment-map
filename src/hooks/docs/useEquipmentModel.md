# `useEquipmentModel`

Hook React responsável por retornar o modelo de um equipamento com base em seu ID, utilizando os contextos `EquipmentContext` e `EquipmentModelContext`.

---

## 📦 Importação

```tsx
import useEquipmentModel from "caminho/para/hooks/useEquipmentModel";
```

---

## 📚 Descrição

O `useEquipmentModel` é um hook customizado que:

- Recebe um `equipmentId`.
- Acessa os contextos globais `EquipmentContext` e `EquipmentModelContext`.
- Retorna o modelo correspondente ao equipamento informado, se existir.

---

## 🧾 Parâmetros

| Parâmetro     | Tipo             | Descrição                          |
| ------------- | ---------------- | ---------------------------------- |
| `equipmentId` | `string \| null` | ID do equipamento a ser consultado |

---

## 📥 Retorno

### `EquipmentModel | null`

Retorna o modelo do equipamento ou `null` caso não seja encontrado.

#### Tipo: `EquipmentModel`

```ts
interface EquipmentModel {
  id: string;
  name: string;
  // outros campos relevantes do modelo...
}
```

---

## 🧠 Lógica Interna

1. Usa `useContext` para acessar os contextos `EquipmentContext` e `EquipmentModelContext`.
2. Verifica se o `equipmentId` é válido.
3. Busca o equipamento correspondente na lista de equipamentos.
4. Com base no `equipmentModelId`, retorna o modelo correspondente da lista de modelos.
5. Utiliza `useMemo` para evitar reprocessamentos desnecessários.

---

## 🧩 Dependências

- **Contexts**:
  - `EquipmentContext`
  - `EquipmentModelContext`

---

## ✅ Exemplo de uso

```tsx
const equipmentModel = useEquipmentModel("abc123");

return equipmentModel ? (
  <p>Modelo: {equipmentModel.name}</p>
) : (
  <p>Modelo não encontrado</p>
);
```

---

## ⚠️ Observações

- Retorna `null` se o `equipmentId` não for fornecido ou se o equipamento/modelo não for encontrado.
- Otimizado com `useMemo` para melhor performance.
