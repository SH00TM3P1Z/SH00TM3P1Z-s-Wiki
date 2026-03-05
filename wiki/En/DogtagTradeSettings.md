# Dogtag Trade Settings (DogtagTradeSettings)

**File path:** `$profile:EnhancedDogtag\Config\DogtagTradeSettings.json`

## Base Settings

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `Enabled` | bool | true | Enable dogtag trade system (1=on, 0=off) |
| `UseDateRange` | bool | false | Use date range restriction |
| `UseWeekendOnly` | bool | false | Trade only on weekends |
| `StartDate` | string | "" | Trade start date (YYYY/MM/DD) |
| `EndDate` | string | "" | Trade end date (YYYY/MM/DD) |
| `TimeZone` | string | "UTC" | Timezone (e.g., KST, UTC) |
| `IncludeAttachmentsPrice` | bool | false | Include attachment price in dogtag count |

---

## Date/Time Restriction (Detailed Behavior)

Trade availability is determined **server-side**. If `IsTradeEnabled()` returns false, trade is fully blocked.

### UseDateRange

- **false:** No date restriction. `StartDate` and `EndDate` are ignored.
- **true:** Trade only allowed within `StartDate` to `EndDate` range.

### StartDate / EndDate

- **Format:** `YYYY/MM/DD` (e.g., `2025/03/01`)
- **When UseDateRange is true:**
  - StartDate only: Trade allowed when current date is on or after start date
  - EndDate only: Trade allowed when current date is on or before end date
  - Both: Trade allowed when current date is between start and end (inclusive)
  - Both empty: No date restriction (even with UseDateRange true)

### TimeZone

- Timezone used for **date/day-of-week calculation** for `StartDate`, `EndDate`, and `UseWeekendOnly`.
- Server UTC time is converted to this timezone before comparison.

**Supported values (case-sensitive):**

| Value | Offset |
|-------|--------|
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

- **true:** Trade only on **Saturday and Sunday** (based on TimeZone).
- **Note:** To use `UseWeekendOnly`, the following must all be true:
  - `UseDateRange` must be true
  - `StartDate` must have a value
  - `EndDate` must have a value
- If any condition fails, trade is always blocked.

### Behavior Order Summary

1. If `UseDateRange` is false: No date/weekend restriction
2. If `UseDateRange` is true: Check `StartDate` and `EndDate` range
3. If `UseWeekendOnly` is true: Within the range, **only weekends** allow trade

### Date Config Examples

| Purpose | UseDateRange | StartDate | EndDate | UseWeekendOnly | TimeZone |
|---------|--------------|-----------|---------|----------------|----------|
| No restriction | false | "" | "" | false | - |
| March only | true | "2025/03/01" | "2025/03/31" | false | "KST" |
| March weekends only | true | "2025/03/01" | "2025/03/31" | true | "KST" |
| From specific date, no end | true | "2025/03/15" | "" | false | "UTC" |

---

## IncludeAttachmentsPrice (Attachment Price Detailed Behavior)

**false:** Only the item's `NeedDogtagAmount` is used. Attachments are not counted.

**true:** Attachment prices are added to the base item price. If attachments are registered in the trade item list, their `NeedDogtagAmount` is summed. Nested attachments (attachments on attachments) are also summed.

Example: M4A1 base 10, scope 2, magazine 1 attached. With true, 13 dogtags total are required.

---

## Config Example

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

[Trade Conditions (TradeConditions) →](TradeConditions)
