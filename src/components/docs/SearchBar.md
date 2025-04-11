# Componente `SearchBar`

O componente `SearchBar` é um campo de busca reutilizável com ícone de pesquisa e botão de limpar. Ele é ideal para interfaces onde se deseja filtrar ou pesquisar por texto, como nomes ou modelos de equipamentos.

## Props

| Propriedade | Tipo                      | Descrição                                                            |
| ----------- | ------------------------- | -------------------------------------------------------------------- |
| `onSearch`  | `(query: string) => void` | Função callback chamada a cada alteração no valor do campo de busca. |
| `onFocus`   | `() => void` _(opcional)_ | Função callback chamada quando o campo de busca recebe foco.         |

## Comportamento

- O campo de entrada aceita texto e chama `onSearch` com o valor atual a cada digitação.
- Um botão com ícone de "X" aparece quando há texto digitado e permite limpar o campo.
- O ícone de lupa é exibido à esquerda do campo como sugestão visual de busca.

## Exemplo de Uso

```tsx
<SearchBar onSearch={(value) => console.log(value)} />
```

## Estilização

- Responsivo e centralizado na tela com `absolute`, `transform` e `max-w-md`.
- Input estilizado com `tailwindcss` para um visual limpo e moderno.
