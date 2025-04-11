# 🌐 Contextos de Equipamento

Este módulo exporta diversos contextos React usados para compartilhar dados de equipamentos e seus estados em toda a aplicação.

---

## 📦 Importação

```tsx
import {
  EquipmentContext,
  EquipmentStateContext,
  EquipmentStateHistoryContext,
  EquipmentModelContext,
  EquipmentPositionHistoryContext,
} from "caminho/para/context/EquipmentContext";
```

---

## 🧩 Contextos Exportados

### 1. `EquipmentContext`

- **Tipo**: `React.Context<Equipment[] | null>`
- **Descrição**: Armazena a lista de equipamentos disponíveis.

### 2. `EquipmentStateContext`

- **Tipo**: `React.Context<EquipmentState[] | null>`
- **Descrição**: Contém os estados possíveis dos equipamentos (ex: ativo, inativo, em manutenção).

### 3. `EquipmentStateHistoryContext`

- **Tipo**: `React.Context<EquipmentStateHistory[] | null>`
- **Descrição**: Guarda o histórico de mudanças de estado dos equipamentos.

### 4. `EquipmentModelContext`

- **Tipo**: `React.Context<EquipmentModel[] | null>`
- **Descrição**: Mantém a lista dos modelos de equipamento (ex: Harvester, Caminhão).

### 5. `EquipmentPositionHistoryContext`

- **Tipo**: `React.Context<EquipmentPositionHistory[] | null>`
- **Descrição**: Registra o histórico de posições geográficas dos equipamentos.

---

## 📁 Dados Carregados

Os contextos são preenchidos com dados estáticos importados de arquivos `.json` localizados em `../data/`:

- `equipment.json`
- `equipmentModel.json`
- `equipmentPositionHistory.json`
- `equipmentState.json`
- `equipmentStateHistory.json`

Esses dados simulam o estado inicial da aplicação.

---

## 🧠 Uso em Componentes

```tsx
const equipmentList = useContext(EquipmentContext);

return <ul>{equipmentList?.map((eq) => <li key={eq.id}>{eq.name}</li>)}</ul>;
```

---

## ⚠️ Observações

- Os contextos podem retornar `null` se os dados não forem carregados corretamente.
- É recomendável usar verificações de nulidade (`null checks`) ao acessar os contextos.
