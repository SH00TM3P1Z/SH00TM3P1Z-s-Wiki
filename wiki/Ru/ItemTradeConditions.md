# Условия обмена по предметам (ItemTradeConditions)

Добавьте `ItemTradeConditions` в каждый **JSON предмета обмена** для применения **отдельных условий обмена** только для этого предмета.

## Расположение

JSON файлы в папках категорий (`$profile:EnhancedDogtag\Config\Category\{category}\*.json`)

## Структура

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

## Enabled (для предмета)

| Значение | Описание |
|----|------|
| 1 | Этот предмет **игнорирует глобальные TradeConditions** и использует PlayerDogtag/AIDogtag ниже |
| 0 | Этот предмет использует глобальные TradeConditions (как при отсутствии ItemTradeConditions) |

---

## PlayerDogtag / AIDogtag

Та же структура, что и глобальные PlayerDogtag и AIDogtag в `TradeConditions`.

| Опция | Описание |
|------|------|
| `Enabled` | Разрешить ли этот тип жетона |
| `NeedDeathWishDogtag` | (только PlayerDogtag) Только жетоны Death Wish |
| `RequireSelfKill` | Только жетоны от собственных убийств |
| `AllowSuicideDogtag` | (только PlayerDogtag) Разрешить жетоны при самоубийстве |

### Подробное поведение

Предметы с `ItemTradeConditions.Enabled` 1 не используют глобальные TradeConditions и применяют только свои условия PlayerDogtag и AIDogtag. Например, глобально могут быть разрешены жетоны ИИ, но конкретный предмет M4A1 может требовать только жетоны Death Wish игроков.

---

## Пример: M4A1 только Death Wish

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

- M4A1 обменивается только на **10 жетонов Death Wish игроков**
- Жетоны ИИ нельзя использовать (`AIDogtag.Enabled: 0`)

---

## Поведение в интерфейсе

- **Список предметов:** Показывает требуемый тип жетона (обычный/Death Wish/ИИ) для каждого предмета
- **При выборе:** Панель действий показывает предпросмотр жетона и обновляет счётчик жетонов в инвентаре по условиям предмета

[Список предметов обмена →](TradeItemList)