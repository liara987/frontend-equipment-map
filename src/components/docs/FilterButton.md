# Componente `FilterButton`

O componente `FilterButton` é um botão de alternância utilizado para exibir ou ocultar filtros em interfaces de usuário responsivas. Ele é geralmente usado em interfaces móveis para permitir que o usuário acesse opções de filtragem sem ocupar muito espaço na tela.

## Props

| Propriedade      | Tipo                      | Descrição                                              |
| ---------------- | ------------------------- | ------------------------------------------------------ |
| `showFilters`    | `boolean`                 | Indica se os filtros estão visíveis ou não.            |
| `setShowFilters` | `(show: boolean) => void` | Função usada para alternar a visibilidade dos filtros. |

## Exemplo de Uso

```tsx
<FilterButton showFilters={showFilters} setShowFilters={setShowFilters} />
```

## Estilização

- Usa o ícone `Filter` da biblioteca `lucide-react`.
- Aparece apenas em telas pequenas (`sm:hidden`), sendo substituído por uma interface mais ampla em telas maiores.
- Estilizado com bordas arredondadas, sombra e efeito de hover.

## Dependências

- `lucide-react` para ícones.

## Acessibilidade

Embora o componente possua uma boa base de acessibilidade, recomenda-se adicionar atributos `aria-label` ou `title` para melhorar o suporte a leitores de tela.

---

© 2024 - Documentação gerada automaticamente.
