# Condiciones de comercio por objeto (ItemTradeConditions)

Añade `ItemTradeConditions` dentro de cada **JSON de objeto comerciable** para aplicar **condiciones diferentes** solo a ese objeto.

## Ubicación

Archivos JSON dentro de carpetas de categoría (`$profile:EnhancedDogtag\Config\Category\{categoría}\*.json`)

## Estructura

```json
{
  "ItemClassName": "M4A1",
  "CustomName": "Death Wish Rifle",
  "NeedDogtagAmount": 10,
  "Attachments": [],
  "ItemTradeConditions": {
    "Enabled": 1,
    "PlayerDogtag": {
      "Enabled": 1,
      "NeedDeathWishDogtag": 1,
      "RequireSelfKill": 1,
      "RequireAny": 0,
      "AllowSuicideDogtag": 0
    },
    "AIDogtag": {
      "Enabled": 0,
      "RequireSelfKill": 1,
      "RequireAny": 0
    }
  }
}
```

---

## Enabled (Por objeto)

| Valor | Descripción |
|----|------|
| 1 | Este objeto **ignora TradeConditions globales** y usa las condiciones PlayerDogtag/AIDogtag siguientes |
| 0 | Este objeto usa TradeConditions globales (igual que sin ItemTradeConditions) |

---

## PlayerDogtag / AIDogtag

Misma estructura que PlayerDogtag y AIDogtag de `TradeConditions` globales.

| Opción | Descripción |
|------|------|
| `Enabled` | Si se permite ese tipo de placa |
| `NeedDeathWishDogtag` | (Solo PlayerDogtag) Solo placas Death Wish |
| `RequireSelfKill` | Solo placas de bajas propias |
| `AllowSuicideDogtag` | (Solo PlayerDogtag) Permitir placas de suicidio |

### Comportamiento detallado

Los objetos con `ItemTradeConditions.Enabled` 1 no usan TradeConditions globales y solo aplican sus condiciones PlayerDogtag y AIDogtag. Ej: global puede permitir placas de IA, pero un M4A1 específico puede requerir solo placas Death Wish de jugadores.

---

## Ejemplo: M4A1 solo Death Wish

```json
{
  "ItemClassName": "M4A1",
  "CustomName": "Rifle Death Wish",
  "NeedDogtagAmount": 10,
  "Attachments": [],
  "ItemTradeConditions": {
    "Enabled": 1,
    "PlayerDogtag": {
      "Enabled": 1,
      "NeedDeathWishDogtag": 1,
      "RequireSelfKill": 1,
      "RequireAny": 0,
      "AllowSuicideDogtag": 0
    },
    "AIDogtag": {
      "Enabled": 0,
      "RequireSelfKill": 1,
      "RequireAny": 0
    }
  }
}
```

- M4A1 comerciable solo con **10 placas Death Wish de jugadores**
- Placas de IA no pueden usarse (`AIDogtag.Enabled: 0`)

---

## Comportamiento de la UI

- **Lista de objetos:** Muestra el tipo de placa requerido (normal/Death Wish/IA) por objeto
- **Al seleccionar:** La vista previa de placas y el conteo del inventario se actualizan según las condiciones del objeto

[Lista de objetos comerciables →](TradeItemList)