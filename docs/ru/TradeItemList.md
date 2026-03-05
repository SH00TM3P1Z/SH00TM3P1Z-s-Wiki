# Список предметов обмена

**Путь к папке:** `$profile:EnhancedDogtag\Config\Category\`

## Структура папок

```
Config/
└── Category/
    ├── Weapons/          ← Папка категории
    │   ├── Rifles.json   ← JSON подкатегории
    │   └── Pistols.json
    ├── Gear/
    │   └── Backpacks.json
    └── ...
```

## Структура JSON предмета

Каждый JSON файл — это **массив**.

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

## Описание опций

| Опция | Тип | Обязательно | Описание |
|------|------|------|------|
| `ItemClassName` | string | ✓ | Имя класса предмета DayZ (напр., AKM, M4A1) |
| `CustomName` | string | | Отображаемое имя (пусто = имя по умолчанию игры) |
| `NeedDogtagAmount` | int | ✓ | Требуемое количество жетонов для обмена |
| `Attachments` | array | | Список обвесов (опционально) |
| `ItemTradeConditions` | object | | Условия обмена для предмета (опционально) |

### Подробное поведение опций

**ItemClassName:** Имя класса предмета в игре DayZ. Неверные имена не позволяют создать предмет.

**CustomName:** Пустое = имя по умолчанию игры. Если указано, отображается в интерфейсе обмена.

**NeedDogtagAmount:** Количество жетонов, необходимое для обмена одного предмета. Если в DogtagTradeSettings IncludeAttachmentsPrice = true, цены обвесов добавляются сюда.

**Attachments:** Обвесы для этого предмета. Если обвесы есть в списке предметов обмена и IncludeAttachmentsPrice = true, их цены суммируются.

**ItemTradeConditions:** Если отсутствует или Enabled = 0, используются глобальные TradeConditions. Если Enabled = 1, этот предмет использует другие условия обмена.

---

## Пример обвесов

```json
"Attachments": [
  {
    "ItemClassName": "AK_RailHndguard",
    "Attachments": []
  }
]
```

---

## Пример вложенных обвесов

Обвесы могут содержать вложенные обвесы. Пример: полная конфигурация SCAR-L в Assault Rifle.json.

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

`SCAR_Polymer_Buttstock_FDE` имеет два обвеса: `Retractable_Buttstock` и `Cheek`. Обвесы могут быть вложенными: обвес → обвес → … по необходимости.

---

## Примечания

- **Имена категорий/подкатегорий** определяются именем папки и именем JSON файла (без расширения).
- Если `ItemTradeConditions` отсутствует или `Enabled: 0`, используются глобальные `TradeConditions`.