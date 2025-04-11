# EquipmentHistoryPanel

O componente `EquipmentHistoryPanel` é responsável por exibir um painel lateral com o histórico de estados de um equipamento específico, apresentando a data, hora e o estado com a respectiva cor associada.

## 📦 Props

| Nome          | Tipo                               | Descrição                                                                                                 |
| ------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `equipmentId` | `string`                           | ID do equipamento (não utilizado diretamente neste componente, mas pode ser útil para extensões futuras). |
| `history`     | `EquipmentHistoryFormattedEntry[]` | Lista de entradas formatadas do histórico de estados do equipamento.                                      |
| `onClose`     | `() => void`                       | Função callback chamada ao clicar no botão de fechar o painel.                                            |

## 🧱 Estrutura

O painel é dividido em:

- Cabeçalho com título e botão de fechar (ícone `X`);
- Lista com cada entrada do histórico contendo:
  - Nome do estado;
  - Cor associada ao estado (círculo colorido);
  - Data e hora do registro;
- Mensagem informativa caso não haja entradas no histórico.

## 🎨 Estilos

- Totalmente responsivo:
  - Em dispositivos móveis: painel aparece na parte inferior com altura de 40vh.
  - Em dispositivos maiores: aparece na lateral esquerda com 40% da largura.
- Cores e espaçamentos seguem padrões do TailwindCSS para uma melhor aparência e consistência visual.

## 💡 Exemplo de Uso

```tsx
<EquipmentHistoryPanel
  equipmentId="123"
  history={[
    {
      date: "01/04/2025",
      time: "14:30",
      stateName: "Operando",
      stateColor: "#4caf50",
    },
  ]}
  onClose={() => setShowHistory(false)}
/>
```

## 🧾 Tipagem de `EquipmentHistoryFormattedEntry`

Certifique-se de que o tipo `EquipmentHistoryFormattedEntry` contém pelo menos os seguintes campos:

```ts
interface EquipmentHistoryFormattedEntry {
  date: string;
  time: string;
  stateName: string;
  stateColor: string;
}
```
