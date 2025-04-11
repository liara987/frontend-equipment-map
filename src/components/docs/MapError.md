# Componente `MapError`

O `MapError` é um componente de interface que exibe uma mensagem de erro amigável quando o mapa não pôde ser carregado, oferecendo ao usuário a opção de tentar novamente.

## Props

| Nome      | Tipo                    | Descrição                                                              |
| --------- | ----------------------- | ---------------------------------------------------------------------- |
| `onRetry` | `() => void` (opcional) | Função callback chamada quando o usuário clica no botão de recarregar. |

## Exemplo de Uso

```tsx
<MapError onRetry={() => window.location.reload()} />
```

## Comportamento

- Exibe um ícone de erro e uma mensagem indicando que o mapa não pôde ser carregado.
- Se a prop `onRetry` for fornecida, um botão de "Recarregar" será exibido para permitir ao usuário tentar novamente.

## Estilização

- Utiliza utilitários do Tailwind CSS para responsividade, cores, espaçamento e tipografia.
- Responsivo para diferentes tamanhos de tela.

## Dependências

- `lucide-react` para o ícone de recarregar (`RefreshCw`).
