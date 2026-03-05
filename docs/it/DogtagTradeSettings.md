# Impostazioni Scambio Dogtag (DogtagTradeSettings)

**Percorso file:** `$profile:EnhancedDogtag\Config\DogtagTradeSettings.json`

## Impostazioni Base

| Opzione | Tipo | Predefinito | Descrizione |
|------|------|--------|------|
| `Enabled` | bool | true | Abilita sistema scambio dogtag (1=attivo, 0=disattivo) |
| `UseDateRange` | bool | false | Utilizza restrizione intervallo date |
| `UseWeekendOnly` | bool | false | Scambio solo nei fine settimana |
| `StartDate` | string | "" | Data inizio scambio (YYYY/MM/DD) |
| `EndDate` | string | "" | Data fine scambio (YYYY/MM/DD) |
| `TimeZone` | string | "UTC" | Fuso orario (es: KST, UTC) |
| `IncludeAttachmentsPrice` | bool | false | Includi prezzo accessori nel conteggio dogtag |

---

## Restrizione Data/Ora (Comportamento Dettagliato)

La disponibilità dello scambio è determinata **lato server**. Se `IsTradeEnabled()` restituisce false, lo scambio è completamente bloccato.

### UseDateRange

- **false:** Nessuna restrizione data. `StartDate` e `EndDate` vengono ignorati.
- **true:** Scambio consentito solo nell'intervallo `StartDate`~`EndDate`.

### StartDate / EndDate

- **Formato:** `YYYY/MM/DD` (es: `2025/03/01`)
- **Quando UseDateRange è true:**
  - Solo StartDate: Scambio consentito quando la data corrente è uguale o successiva alla data di inizio
  - Solo EndDate: Scambio consentito quando la data corrente è uguale o precedente alla data di fine
  - Entrambi: Scambio consentito quando la data corrente è tra inizio e fine (inclusi)
  - Entrambi vuoti: Nessuna restrizione data (anche con UseDateRange true)

### TimeZone

- Fuso orario utilizzato per il **calcolo data/giorno della settimana** per `StartDate`, `EndDate` e `UseWeekendOnly`.
- L'ora UTC del server viene convertita in questo fuso orario prima del confronto.

**Valori supportati (sensibili al maiuscolo/minuscolo):**

| Valore | Offset |
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

- **true:** Scambio consentito solo **sabato e domenica** (in base a TimeZone).
- **Nota:** Per utilizzare `UseWeekendOnly`, deve essere vero quanto segue:
  - `UseDateRange` deve essere true
  - `StartDate` deve avere un valore
  - `EndDate` deve avere un valore
- Se una condizione manca, lo scambio è sempre bloccato.

### Riepilogo Ordine Comportamento

1. Se `UseDateRange` è false: Nessuna restrizione data/fine settimana
2. Se `UseDateRange` è true: Verifica intervallo `StartDate` e `EndDate`
3. Se `UseWeekendOnly` è true: Nell'intervallo, **solo fine settimana** consente lo scambio

### Esempi Configurazione Date

| Scopo | UseDateRange | StartDate | EndDate | UseWeekendOnly | TimeZone |
|------|--------------|-----------|---------|----------------|----------|
| Nessuna restrizione | false | "" | "" | false | - |
| Solo marzo | true | "2025/03/01" | "2025/03/31" | false | "KST" |
| Solo fine settimana marzo | true | "2025/03/01" | "2025/03/31" | true | "KST" |
| Da data specifica, senza fine | true | "2025/03/15" | "" | false | "UTC" |

---

## IncludeAttachmentsPrice (Comportamento Dettagliato Prezzo Accessori)

**false:** Viene utilizzato solo `NeedDogtagAmount` dell'oggetto. Gli accessori non sono conteggiati.

**true:** I prezzi degli accessori vengono aggiunti al prezzo base dell'oggetto. Se gli accessori sono registrati nell'elenco oggetti di scambio, il loro `NeedDogtagAmount` viene sommato. Anche gli accessori annidati (accessori sugli accessori) vengono sommati.

Esempio: M4A1 base 10, mirino 2, caricatore 1 attaccati. Con true, sono necessari 13 dogtag in totale.

---

## Esempio Configurazione

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

[Condizioni di Scambio (TradeConditions) →](TradeConditions)
