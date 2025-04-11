# `useEquipmentIcons`

Hook React que fornece ícones personalizados para diferentes modelos de equipamentos em mapas utilizando a biblioteca **Leaflet**.

---

## 📦 Importação

```tsx
import useEquipmentIcons from "caminho/para/hooks/useEquipmentIcons";
```

---

## 📚 Descrição

O `useEquipmentIcons` é um hook customizado que:

- Mapeia modelos de equipamentos a imagens específicas.
- Retorna um ícone personalizado do Leaflet de acordo com o modelo fornecido.

---

## 🧾 Uso

```tsx
const { getEquipmentIcon } = useEquipmentIcons();
const icon = getEquipmentIcon("Harvester");
```

---

## 📥 Parâmetro

### `getEquipmentIcon(equipmentModel: string): L.Icon`

| Parâmetro        | Tipo     | Descrição                     |
| ---------------- | -------- | ----------------------------- |
| `equipmentModel` | `string` | Nome do modelo de equipamento |

---

## 📤 Retorno

### `L.Icon`

Objeto de ícone do Leaflet pronto para ser utilizado em mapas.

---

## 🧩 Mapeamento de Ícones

O hook utiliza o seguinte mapeamento entre modelo e imagem:

| Modelo            | Imagem utilizada      |
| ----------------- | --------------------- |
| Caminhão de carga | `trunk.png`           |
| Harvester         | `harvester.png`       |
| Garra traçadora   | `claw.png`            |
| Outro (padrão)    | `trunk.png` (default) |

---

## ✅ Exemplo de uso em Leaflet

```tsx
import { Marker, Popup } from "react-leaflet";

const { getEquipmentIcon } = useEquipmentIcons();

<Marker position={[lat, lon]} icon={getEquipmentIcon("Harvester")}>
  <Popup>Harvester</Popup>
</Marker>;
```

---

## 🧠 Detalhes Técnicos

- Usa `leaflet.Icon` para criar ícones personalizados.
- Define `iconSize`, `iconAnchor` e `popupAnchor` para melhor posicionamento visual.

---

## 📁 Dependências

- **Leaflet** (`leaflet`)
- Imagens locais (`trunk.png`, `claw.png`, `harvester.png`)

---

## ⚠️ Observações

- Caso o modelo informado não esteja mapeado, o ícone padrão será o do caminhão (`trunk.png`).
- As imagens devem estar disponíveis no caminho correto para que os ícones funcionem.
