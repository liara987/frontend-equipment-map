# `useGetEquipmentById`

Hook React que retorna os dados de um equipamento específico com base no seu ID, utilizando o contexto `EquipmentContext`.

---

## 📦 Importação

```tsx
import useGetEquipmentById from "caminho/para/hooks/useGetEquipmentById";
```

---

## 📚 Descrição

O `useGetEquipmentById` é um hook customizado que:

- Acessa o contexto global `EquipmentContext`.
- Busca um equipamento específico com base no `id` fornecido.
- Utiliza `useMemo` para otimizar a busca e evitar reprocessamentos desnecessários.

---

## 🧾 Parâmetros

| Parâmetro | Tipo   | Descrição                       |
| --------- | ------ | ------------------------------- |
| `id`      | string | ID do equipamento a ser buscado |

---

## 📥 Retorno

### `Equipment | null`

Retorna um objeto do tipo `Equipment` correspondente ao ID informado ou `null` caso não seja encontrado.

#### Tipo: `Equipment`

```ts
interface Equipment {
  id: string;
  name: string;
  equipmentModelId: string;
  // outros campos relevantes...
}
```

---

## 🧠 Lógica Interna

1. Usa `useContext` para acessar `EquipmentContext`.
2. Verifica se a lista de equipamentos é válida.
3. Utiliza `useMemo` para retornar o equipamento correspondente ao `id`.

---

## 🧩 Dependências

- **Contexto**:
  - `EquipmentContext`

---

## ✅ Exemplo de uso

```tsx
const equipmentId = "123";
const equipment = useGetEquipmentById(equipmentId);

return equipment ? (
  <div>
    <h3>{equipment.name}</h3>
    <p>ID: {equipment.id}</p>
  </div>
) : (
  <p>Equipamento não encontrado.</p>
);
```

---

## ⚠️ Observações

- Garante performance ao utilizar `useMemo` para evitar reprocessamentos.
- Exibe erro no console caso o contexto esteja inválido ou ausente.
