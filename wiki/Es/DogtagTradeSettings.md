# Configuración de comercio de placas (DogtagTradeSettings)

**Ruta del archivo:** `$profile:EnhancedDogtag\Config\DogtagTradeSettings.json`

## Opciones de configuración base

| Opción | Tipo | Predeterminado | Descripción |
|------|------|--------|------|
| `Enabled` | bool | true | Activar sistema de comercio de placas (1=activado, 0=desactivado) |
| `UseDateRange` | bool | false | Usar restricción de rango de fechas |
| `UseWeekendOnly` | bool | false | Comercio solo fines de semana |
| `StartDate` | string | "" | Fecha de inicio de comercio (YYYY/MM/DD) |
| `EndDate` | string | "" | Fecha de fin de comercio (YYYY/MM/DD) |
| `TimeZone` | string | "UTC" | Zona horaria (ej: KST, UTC) |
| `IncludeAttachmentsPrice` | bool | false | Incluir precio de accesorios en el conteo de placas |

---

## Restricción de fecha/hora (Comportamiento detallado)

La disponibilidad del comercio se determina **en el servidor**. Si `IsTradeEnabled()` devuelve false, el comercio se bloquea por completo.

### UseDateRange

- **false:** Sin restricción de fechas. `StartDate` y `EndDate` se ignoran.
- **true:** Comercio solo permitido dentro del rango `StartDate` a `EndDate`.

### StartDate / EndDate

- **Formato:** `YYYY/MM/DD` (ej: `2025/03/01`)
- **Cuando UseDateRange es true:**
  - Solo StartDate: Comercio permitido cuando la fecha actual es igual o posterior a la de inicio
  - Solo EndDate: Comercio permitido cuando la fecha actual es igual o anterior a la de fin
  - Ambos: Comercio permitido cuando la fecha actual está entre inicio y fin (inclusivo)
  - Ambos vacíos: Sin restricción de fechas (incluso con UseDateRange true)

### TimeZone

- Zona horaria usada para **cálculo de fecha/día de la semana** de `StartDate`, `EndDate` y `UseWeekendOnly`.
- El tiempo UTC del servidor se convierte a esta zona horaria antes de comparar.

**Valores soportados (sensible a mayúsculas):**

| Valor | Desplazamiento |
|----|------|
| `UTC`, `GMT`, `UK`, `London` | UTC+0 |
| `KST`, `Korea`, `JST`, `Japan` | UTC+9 |
| `CST`, `China`, `HKT`, `HongKong`, `SGT`, `Singapore`, `MYT`, `Malaysia`, `PHT`, `Philippines`, `TPE`, `Taiwan` | UTC+8 |
| `ICT`, `Thailand`, `VNT`, `Vietnam`, `WIB`, `Indonesia` | UTC+7 |
| `IST`, `India` | UTC+5:30 |
| `MSK`, `Moscow`, `Russia` | UTC+3 |
| `CET`, `Europe`, `Germany`, `France`, `Paris`, `Italy`, `Rome`, `Spain`, `Madrid` | UTC+1 |
| `EST`, `US_East`, `NewYork`, `Toronto`, `Canada_East` | UTC-5 |
| `CST_MX`, `Mexico` | UTC-6 |
| `PST`, `US_West`, `LosAngeles`, `Vancouver`, `Canada_West` | UTC-8 |
| `BRT`, `Brazil` | UTC-3 |
| `AEST`, `Australia`, `Sydney` | UTC+10 |
| `NZST`, `NewZealand`, `Auckland` | UTC+12 |

### UseWeekendOnly

- **true:** Comercio solo **sábados y domingos** (según TimeZone).
- **Nota:** Para usar `UseWeekendOnly`, todo lo siguiente debe cumplirse:
  - `UseDateRange` debe ser true
  - `StartDate` debe tener un valor
  - `EndDate` debe tener un valor
- Si falla alguna condición, el comercio siempre se bloquea.

### Resumen del orden de comportamiento

1. Si `UseDateRange` es false: Sin restricción de fecha/fin de semana
2. Si `UseDateRange` es true: Verificar rango de `StartDate` y `EndDate`
3. Si `UseWeekendOnly` es true: Dentro del rango, **solo fines de semana** permiten comercio

### Ejemplos de configuración de fechas

| Propósito | UseDateRange | StartDate | EndDate | UseWeekendOnly | TimeZone |
|------|--------------|-----------|---------|----------------|----------|
| Sin restricción | false | "" | "" | false | - |
| Solo marzo | true | "2025/03/01" | "2025/03/31" | false | "KST" |
| Solo fines de semana de marzo | true | "2025/03/01" | "2025/03/31" | true | "KST" |
| Desde fecha específica, sin fin | true | "2025/03/15" | "" | false | "UTC" |

---

## IncludeAttachmentsPrice (Comportamiento detallado del precio de accesorios)

**false:** Solo se usa `NeedDogtagAmount` del objeto. Los accesorios no se cuentan.

**true:** Se suma el precio de accesorios al precio base del objeto. Si los accesorios están en la lista de comercio, su `NeedDogtagAmount` se suma. Los accesorios anidados también se suman.

Ejemplo: M4A1 base 10, mira 2, cargador 1 adjunto. Con true se necesitan 13 placas en total.

---

## Ejemplo de configuración

```json
{
  "Version": 8,
  "Enabled": true,
  "UseDateRange": false,
  "UseWeekendOnly": false,
  "StartDate": "",
  "EndDate": "",
  "TimeZone": "UTC",
  "IncludeAttachmentsPrice": false,
  "TradeConditions": {
    "Enabled": 1,
    "PlayerDogtag": { ... },
    "AIDogtag": { ... }
  }
}
```

[Condiciones de comercio (TradeConditions) →](TradeConditions)
