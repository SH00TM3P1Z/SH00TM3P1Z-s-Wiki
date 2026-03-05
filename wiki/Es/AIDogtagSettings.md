# Configuración de placas IA (AIDogtagSettings)

**Ruta del archivo:** `$profile:EnhancedDogtag\Config\AIDogtagSettings.json`

Archivo de configuración que controla si la IA puede llevar placas y si las placas de IA pueden saquearse.

---

## Opciones de configuración

| Opción | Tipo | Predeterminado | Descripción |
|------|------|--------|------|
| `Version` | int | 2 | Versión de configuración (no se recomienda modificar) |
| `AIDogtagEnabled` | bool | true | Activar placas IA (si la IA puede llevar placas) |
| `AIDogtagLootingEnabled` | bool | true | Permitir saquear placas IA (si pueden saquearse de cadáveres de IA) |

### Comportamiento detallado

**AIDogtagEnabled:** Si es false, la IA no lleva placas. No caen placas de cadáveres de IA.

**AIDogtagLootingEnabled:** Si es false, los jugadores no pueden saquear placas de cadáveres de IA aunque existan. El saqueo se bloquea incluso con AIDogtagEnabled en true.

Ambas opciones deben ser true para obtener placas de IA y usarlas en el comercio de placas.

---

## Ejemplo de configuración

```json
{
  "Version": 2,
  "AIDogtagEnabled": true,
  "AIDogtagLootingEnabled": true
}
```

---

## Relación con DogtagSettings

| 파일 | 용도 |
|------|------|
| **DogtagSettings.json** | Comportamiento base de placas de jugadores (saqueo, Death Wish, etc.) |
| **AIDogtagSettings.json** | Comportamiento de placas IA (llevar/saquear IA) |

Las placas de IA pueden usarse en el sistema de comercio. Se usan junto con la configuración `AIDogtag` en [Condiciones de comercio (TradeConditions)](TradeConditions).

[Configuración de placas →](DogtagSettings)