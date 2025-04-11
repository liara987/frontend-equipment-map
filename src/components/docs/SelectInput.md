# 🔽 SelectInput

Componente reutilizável de input do tipo `select`, estilizado com Tailwind CSS, usado para seleção de opções com suporte a valores nulos (como "Todos").

---

## 📦 Importação

```tsx
import SelectInput from "caminho/para/SelectInput";
```

---

## 🧩 Props

| Propriedade | Tipo                              | Descrição                                                                       |
| ----------- | --------------------------------- | ------------------------------------------------------------------------------- |
| `label`     | `string`                          | Rótulo que será exibido acima do select e usado como `id`.                      |
| `value`     | `string \| null`                  | Valor atualmente selecionado. Pode ser `null` para representar a opção "Todos". |
| `onChange`  | `(value: string \| null) => void` | Callback executado ao alterar o valor selecionado.                              |
| `options`   | `string[]`                        | Lista de opções disponíveis para seleção.                                       |

---

## 💡 Comportamento

- A opção "Todos" é exibida como valor padrão com `value=""`.
- Ao selecionar "Todos", o valor enviado via `onChange` será `null`.
- Estilização baseada em Tailwind CSS, incluindo foco com `ring` azul.

---

## 🧠 Exemplo de Uso

```tsx
const [modeloSelecionado, setModeloSelecionado] = useState<string | null>(null);

<SelectInput
  label="Modelo do Equipamento"
  value={modeloSelecionado}
  onChange={setModeloSelecionado}
  options={["Harvester", "Caminhão de carga", "Garra traçadora"]}
/>;
```

---

## 🎨 Estilização

- `border`, `rounded`, `focus:ring` e outras classes utilitárias do Tailwind.
- Compatível com temas claros e escuros com personalização adicional.
