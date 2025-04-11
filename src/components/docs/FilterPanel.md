# Componente `FilterPanel`

O `FilterPanel` é um componente React responsável por renderizar e controlar um painel de filtros para equipamentos. Ele permite ao usuário selecionar um estado e um modelo de equipamento a partir de listas predefinidas.

## Props

| Propriedade        | Tipo                              | Descrição                                   |
| ------------------ | --------------------------------- | ------------------------------------------- |
| `selectedState`    | `string \| null`                  | Estado atualmente selecionado.              |
| `setSelectedState` | `(state: string \| null) => void` | Função para atualizar o estado selecionado. |
| `selectedModel`    | `string \| null`                  | Modelo atualmente selecionado.              |
| `setSelectedModel` | `(model: string \| null) => void` | Função para atualizar o modelo selecionado. |

## Funcionamento

- Exibe um botão (`FilterButton`) que alterna a visibilidade dos filtros.
- Mostra dois filtros:
  - **Estado**: permite filtrar por estado do equipamento (ex: "Operando", "Manutenção").
  - **Modelo**: permite filtrar por modelo do equipamento (ex: "Caminhão de carga", "Harvester", "Garra traçadora").
- Ambos os filtros utilizam o componente `SelectInput`.

## Estilização

- O painel é posicionado de forma absoluta no canto superior esquerdo da tela.
- A visibilidade do painel é controlada pela variável de estado local `showFilters`.

## Exemplo de Uso

```tsx
<FilterPanel
  selectedState={selectedState}
  setSelectedState={setSelectedState}
  selectedModel={selectedModel}
  setSelectedModel={setSelectedModel}
/>
```

## Dependências

- `FilterButton`: Componente para alternar a visibilidade do painel.
- `SelectInput`: Componente reutilizável de seleção com rótulo.
