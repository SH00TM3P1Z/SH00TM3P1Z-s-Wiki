# Condiciones de comercio (TradeConditions)

La sección `TradeConditions` dentro de `DogtagTradeSettings.json` define las **condiciones de comercio globales**.

## Estructura

```json
{
  "TradeConditions": {
    "Enabled": 1,
    "PlayerDogtag": {
      "Enabled": true,
      "NeedDeathWishDogtag": 0,
      "RequireSelfKill": 1,
      "RequireAny": 0,
      "AllowSuicideDogtag": 0
    },
    "AIDogtag": {
      "Enabled": true,
      "RequireSelfKill": 1,
      "RequireAny": 0
    }
  }
}
```

---

## Enabled (Global)

| Valor | Descripción |
|----|------|
| 1 | Condiciones globales activadas. Aplicadas a todos los objetos (excepto los con condiciones por objeto) |
| 0 | Condiciones globales desactivadas. Comercio solo cuando el JSON del objeto tiene `ItemTradeConditions.Enabled=1` |

> **Disponibilidad de comercio:** El comercio está permitido cuando global `Enabled` o `ItemTradeConditions.Enabled` del objeto es 1. Si ambos son 0, el comercio se bloquea y aparece la notificación "Trade Fail".

---

## PlayerDogtag (Placas de jugadores)

| Opción | Tipo | Descripción |
|------|------|------|
| `Enabled` | bool | Permitir comercio con placas de jugadores (1=permitir, 0=no permitir) |
| `NeedDeathWishDogtag` | bool | Solo placas Death Wish (1=solo Death Wish, 0=incluir placas normales) |
| `RequireSelfKill` | bool | Solo placas de bajas propias (1=solo propias, 0=cualquiera) |
| `RequireAny` | bool | (No usado) |
| `AllowSuicideDogtag` | bool | Permitir placas de suicidio (1=permitir, 0=excluir) |

### Comportamiento detallado de PlayerDogtag

**NeedDeathWishDogtag:** Si es 1, solo placas Death Wish pueden usarse. Si es 0, ambas pueden usarse.

**RequireSelfKill:** Si es 1, solo placas de bajas propias. Si es 0, cualquier placa puede usarse.

**AllowSuicideDogtag:** Si es 1, las placas de suicidio pueden usarse. Si es 0, se excluyen del comercio.

---

## AIDogtag (Placas de IA)

| Opción | Tipo | Descripción |
|------|------|------|
| `Enabled` | bool | Permitir comercio con placas de IA (1=permitir, 0=no permitir) |
| `RequireSelfKill` | bool | Solo placas de IA de bajas propias (1=solo propias, 0=cualquiera) |
| `RequireAny` | bool | (No usado) |

### Comportamiento detallado de AIDogtag

**RequireSelfKill:** Igual que PlayerDogtag. Si es 1, solo placas de IA de bajas propias. Si es 0, cualquier placa de IA puede usarse.

---

## Prioridad de aplicación de condiciones

| Enabled global | Item ItemTradeConditions.Enabled | Condiciones aplicadas |
|--------------|-----------------------------------|----------------|
| 1 | 0 | TradeConditions globales (objetos sin condiciones propias usan global) |
| 0 | 1 | ItemTradeConditions del objeto (solo ese objeto usa condiciones diferentes) |
| 1 | 1 | ItemTradeConditions del objeto (condiciones por objeto tienen prioridad) |
| 0 | 0 | Comercio bloqueado (TRADE_FAIL) |

Si un objeto tiene `ItemTradeConditions` con `Enabled` 1, ignora la configuración global y usa solo sus condiciones PlayerDogtag y AIDogtag.

[Condiciones de comercio por objeto →](ItemTradeConditions)