# Componente `NoResults`

O componente `NoResults` é um componente de apresentação utilizado para exibir uma mensagem amigável quando nenhuma correspondência é encontrada com base em uma busca.

## Importação

```tsx
import NoResults from "./NoResults";
```

## Props

| Propriedade   | Tipo     | Descrição                                                   |
| ------------- | -------- | ----------------------------------------------------------- |
| `searchQuery` | `string` | Texto da busca que será exibido na mensagem para o usuário. |

## Exemplo de uso

```tsx
<NoResults searchQuery="harvester" />
```

## Estrutura

O componente exibe uma `div` centralizada com uma mensagem que indica que nenhum equipamento foi encontrado com base no `searchQuery` fornecido.

## Estilização

Utiliza classes TailwindCSS para:

- Centralização e responsividade
- Sombra e arredondamento
- Cores e tamanhos de texto adaptáveis

## Comportamento

A mensagem inclui dinamicamente o valor passado como `searchQuery`, por exemplo:

> Nenhum equipamento encontrado com esse nome ou modelo "harvester"

---

**Nota**: Esse componente é geralmente utilizado em conjunto com listas filtradas por busca, como parte da experiência de feedback para o usuário.
