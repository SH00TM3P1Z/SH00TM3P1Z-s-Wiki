# Dogtag-Handel-Einstellungen (DogtagTradeSettings)

**Dateipfad:** `$profile:EnhancedDogtag\Config\DogtagTradeSettings.json`

## Grundeinstellungen

| Option | Typ | Standard | Beschreibung |
|------|------|--------|------|
| `Enabled` | bool | true | Dogtag-Handel-System aktivieren (1=an, 0=aus) |
| `UseDateRange` | bool | false | Datumsbereichseinschränkung verwenden |
| `UseWeekendOnly` | bool | false | Handel nur am Wochenende |
| `StartDate` | string | "" | Handelsstartdatum (YYYY/MM/DD) |
| `EndDate` | string | "" | Handelsenddatum (YYYY/MM/DD) |
| `TimeZone` | string | "UTC" | Zeitzone (z.B. CET, UTC) |
| `IncludeAttachmentsPrice` | bool | false | Aufsatzpreis in Dogtag-Anzahl einbeziehen |

---

## Datums-/Zeitbeschränkung (Detailliertes Verhalten)

Die Handelsverfügbarkeit wird **serverseitig** bestimmt. Gibt `IsTradeEnabled()` false zurück, ist der Handel vollständig blockiert.

### UseDateRange

- **false:** Keine Datumsbeschränkung. `StartDate` und `EndDate` werden ignoriert.
- **true:** Handel nur im Bereich `StartDate` bis `EndDate` erlaubt.

### StartDate / EndDate

- **Format:** `YYYY/MM/DD` (z.B. `2025/03/01`)
- **Wenn UseDateRange true ist:**
  - Nur StartDate: Handel erlaubt, wenn aktuelles Datum am oder nach Startdatum liegt
  - Nur EndDate: Handel erlaubt, wenn aktuelles Datum am oder vor Enddatum liegt
  - Beide: Handel erlaubt, wenn aktuelles Datum zwischen Start- und Enddatum liegt (beide inklusive)
  - Beide leer: Keine Datumsbeschränkung (auch bei UseDateRange true)

### TimeZone

- Zeitzone für **Datums-/Wochentag-Berechnung** von `StartDate`, `EndDate` und `UseWeekendOnly`.
- Server-UTC-Zeit wird vor dem Vergleich in diese Zeitzone umgewandelt.

**Unterstützte Werte (Groß-/Kleinschreibung beachten):**

| Wert | Offset |
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

- **true:** Handel nur **Samstag und Sonntag** (basierend auf TimeZone).
- **Hinweis:** Für `UseWeekendOnly` müssen **alle** folgenden Bedingungen erfüllt sein:
  - `UseDateRange` muss true sein
  - `StartDate` muss einen Wert haben
  - `EndDate` muss einen Wert haben
- Fehlt eine Bedingung, ist der Handel immer blockiert.

### Verhaltensreihenfolge Zusammenfassung

1. Bei `UseDateRange` false: Keine Datums-/Wochenendbeschränkung
2. Bei `UseDateRange` true: `StartDate`- und `EndDate`-Bereich prüfen
3. Bei `UseWeekendOnly` true: Im Bereich **nur Wochenenden** erlauben Handel

### Datumskonfigurationsbeispiele

| Zweck | UseDateRange | StartDate | EndDate | UseWeekendOnly | TimeZone |
|------|--------------|-----------|---------|----------------|----------|
| Keine Einschränkung | false | "" | "" | false | - |
| Nur März | true | "2025/03/01" | "2025/03/31" | false | "CET" |
| Nur März-Wochenenden | true | "2025/03/01" | "2025/03/31" | true | "CET" |
| Ab bestimmtem Datum, kein Ende | true | "2025/03/15" | "" | false | "UTC" |

---

## IncludeAttachmentsPrice (Aufsatzpreis Detailliertes Verhalten)

**false:** Nur das `NeedDogtagAmount` des Items wird verwendet. Aufsätze werden nicht gezählt.

**true:** Aufsatzpreise werden zum Basis-Itempreis addiert. Sind Aufsätze in der Handels-Item-Liste registriert, wird ihr `NeedDogtagAmount` addiert. Verschachtelte Aufsätze (Aufsätze auf Aufsätzen) werden ebenfalls addiert.

Beispiel: M4A1 Basis 10, Zielfernrohr 2, Magazin 1 angehängt. Bei true sind insgesamt 13 Dogtags erforderlich.

---

## Konfigurationsbeispiel

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

[Handelsbedingungen (TradeConditions) →](TradeConditions)
