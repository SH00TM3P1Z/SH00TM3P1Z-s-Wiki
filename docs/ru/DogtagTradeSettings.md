# Настройки обмена жетонов (DogtagTradeSettings)

**Путь к файлу:** `$profile:EnhancedDogtag\Config\DogtagTradeSettings.json`

## Основные настройки

| Опция | Тип | По умолчанию | Описание |
|------|------|--------|------|
| `Enabled` | bool | true | Включить систему обмена жетонов (1=вкл, 0=выкл) |
| `UseDateRange` | bool | false | Использовать ограничение по датам |
| `UseWeekendOnly` | bool | false | Обмен только по выходным |
| `StartDate` | string | "" | Дата начала обмена (ГГГГ/ММ/ДД) |
| `EndDate` | string | "" | Дата окончания обмена (ГГГГ/ММ/ДД) |
| `TimeZone` | string | "UTC" | Часовой пояс (напр., KST, UTC, MSK) |
| `IncludeAttachmentsPrice` | bool | false | Включать цену обвеса в количество жетонов |

---

## Ограничение по дате/времени (подробное поведение)

Доступность обмена определяется **на стороне сервера**. Если `IsTradeEnabled()` возвращает false, обмен полностью блокируется.

### UseDateRange

- **false:** Нет ограничения по датам. `StartDate` и `EndDate` игнорируются.
- **true:** Обмен разрешён только в диапазоне от `StartDate` до `EndDate`.

### StartDate / EndDate

- **Формат:** `ГГГГ/ММ/ДД` (напр., `2025/03/01`)
- **При UseDateRange = true:**
  - Только StartDate: Обмен разрешён, когда текущая дата >= даты начала
  - Только EndDate: Обмен разрешён, когда текущая дата <= даты окончания
  - Оба: Обмен разрешён, когда текущая дата между началом и концом (включительно)
  - Оба пусты: Нет ограничения по датам (даже при UseDateRange true)

### TimeZone

- Часовой пояс для **расчёта даты и дня недели** для `StartDate`, `EndDate` и `UseWeekendOnly`.
- Серверное время UTC конвертируется в этот часовой пояс перед сравнением.

**Поддерживаемые значения (с учётом регистра):**

| Значение | Смещение |
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

- **true:** Обмен только в **субботу и воскресенье** (по TimeZone).
- **Примечание:** Для использования `UseWeekendOnly` все условия должны быть true:
  - `UseDateRange` должен быть true
  - `StartDate` должен иметь значение
  - `EndDate` должен иметь значение
- При нарушении любого условия обмен всегда блокируется.

### Порядок проверки

1. Если `UseDateRange` = false: Нет ограничения по датам/выходным
2. Если `UseDateRange` = true: Проверка диапазона `StartDate` и `EndDate`
3. Если `UseWeekendOnly` = true: В пределах диапазона обмен разрешён **только по выходным**

### Примеры конфигурации по датам

| Цель | UseDateRange | StartDate | EndDate | UseWeekendOnly | TimeZone |
|------|--------------|-----------|---------|----------------|----------|
| Без ограничений | false | "" | "" | false | - |
| Только март | true | "2025/03/01" | "2025/03/31" | false | "MSK" |
| Только выходные в марте | true | "2025/03/01" | "2025/03/31" | true | "MSK" |
| С определённой даты, без конца | true | "2025/03/15" | "" | false | "UTC" |

---

## IncludeAttachmentsPrice (подробное поведение цены обвеса)

**false:** Используется только `NeedDogtagAmount` предмета. Обвесы не учитываются.

**true:** Цены обвесов добавляются к базовой цене предмета. Если обвесы зарегистрированы в списке предметов обмена, их `NeedDogtagAmount` суммируется. Вложенные обвесы (обвесы на обвесах) также суммируются.

Пример: M4A1 база 10, прицел 2, магазин 1. При true требуется 13 жетонов всего.

---

## Пример конфигурации

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

[Условия обмена (TradeConditions) →](TradeConditions)
