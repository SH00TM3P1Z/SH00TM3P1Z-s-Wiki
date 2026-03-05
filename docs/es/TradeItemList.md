# Lista de objetos comerciables

**Ruta de carpeta:** `$profile:EnhancedDogtag\Config\Category\`

## Estructura de carpetas

```
Config/
└── Category/
    ├── Weapons/          ← Carpeta de categoría
    │   ├── Rifles.json   ← JSON de subcategoría
    │   └── Pistols.json
    ├── Gear/
    │   └── Backpacks.json
    └── ...
```

## Estructura JSON del objeto

Cada archivo JSON es un **array**.

```json
[
  {
    "ItemClassName": "AKM",
    "CustomName": "",
    "NeedDogtagAmount": 5,
    "Attachments": [],
    "ItemTradeConditions": { ... }
  },
  {
    "ItemClassName": "M4A1",
    "CustomName": "Death Wish Rifle",
    "NeedDogtagAmount": 10,
    "Attachments": [],
    "ItemTradeConditions": { ... }
  }
]
```

---

## Descripción de opciones

| Opción | Tipo | Requerido | Descripción |
|------|------|------|------|
| `ItemClassName` | string | ✓ | Nombre de clase del objeto DayZ (ej: AKM, M4A1) |
| `CustomName` | string | | Nombre de visualización (vacío = nombre por defecto del juego) |
| `NeedDogtagAmount` | int | ✓ | Placas requeridas para comercio |
| `Attachments` | array | | Lista de accesorios (opcional) |
| `ItemTradeConditions` | object | | Condiciones de comercio por objeto (opcional) |

### Comportamiento detallado de opciones

**ItemClassName:** Nombre de clase del objeto en DayZ. Nombres incorrectos impiden la creación del objeto.

**CustomName:** Vacío usa el nombre por defecto. Si tiene valor, se muestra en la UI de comercio.

**NeedDogtagAmount:** Placas requeridas para comerciar un objeto. Si IncludeAttachmentsPrice es true, se suman los precios de accesorios.

**Attachments:** Accesorios para este objeto. Si están en la lista de comercio e IncludeAttachmentsPrice es true, sus precios se suman.

**ItemTradeConditions:** Ausente o Enabled 0 = usa TradeConditions globales. Enabled 1 = este objeto usa condiciones diferentes.

---

## Ejemplo de Attachments

```json
"Attachments": [
  {
    "ItemClassName": "AK_RailHndguard",
    "Attachments": []
  }
]
```

---

## Ejemplo de accesorios anidados

Los accesorios pueden tener accesorios anidados. Ejemplo: configuración completa de SCAR-L en Assault Rifle.json.

```json
{
    "ItemClassName": "SMPZ_Weapon_SCAR_L",
    "CustomName": "",
    "NeedDogtagAmount": 20,
    "Attachments": [
        {
            "ItemClassName": "SMPZ_Mag_SCAR_L_30Rnd",
            "Attachments": []
        },
        {
            "ItemClassName": "SMPZ_Attachments_SCAR_Rearsight",
            "Attachments": []
        },
        {
            "ItemClassName": "SMPZ_Attachments_SCAR_Polymer_Buttstock_FDE",
            "Attachments": [
                {
                    "ItemClassName": "SMPZ_Attachments_SCAR_Retractable_Buttstock_FDE",
                    "Attachments": []
                },
                {
                    "ItemClassName": "SMPZ_Attachments_SCAR_Cheek_FDE",
                    "Attachments": []
                }
            ]
        }
    ],
    "ItemTradeConditions": {
        "Enabled": 0,
        "PlayerDogtag": {
            "Enabled": 0,
            "NeedDeathWishDogtag": 0,
            "RequireSelfKill": 0,
            "RequireAny": 0,
            "AllowSuicideDogtag": 0
        },
        "AIDogtag": {
            "Enabled": 0,
            "NeedDeathWishDogtag": 0,
            "RequireSelfKill": 0,
            "RequireAny": 0,
            "AllowSuicideDogtag": 0
        }
    }
}
```

`SCAR_Polymer_Buttstock_FDE` tiene dos accesorios: `Retractable_Buttstock` y `Cheek`. Los accesorios pueden anidarse según sea necesario.

---

## Notas

- Los nombres de **categoría/subcategoría** se determinan por el nombre de carpeta y archivo JSON (sin extensión).
- Si `ItemTradeConditions` está ausente o `Enabled: 0`, se usan `TradeConditions` globales.