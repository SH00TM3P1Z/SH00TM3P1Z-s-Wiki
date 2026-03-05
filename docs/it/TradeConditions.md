# Condizioni di Scambio (TradeConditions)

La sezione `TradeConditions` all'interno di `DogtagTradeSettings.json` definisce le **condizioni di scambio globali**.

## Struttura

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

## Enabled (Globale)

| Valore | Descrizione |
|----|------|
| 1 | Condizioni di scambio globali attive. Applicate a tutti gli oggetti (eccetto oggetti con condizioni specifiche) |
| 0 | Condizioni di scambio globali disattivate. Scambio possibile solo quando il JSON oggetto ha `ItemTradeConditions.Enabled=1` |

> **Condizione scambio:** Lo scambio è consentito quando `Enabled` globale o `ItemTradeConditions.Enabled` dell'oggetto è 1. Se entrambi sono 0, lo scambio è bloccato e appare la notifica "Trade Fail".

---

## PlayerDogtag (Dogtag Giocatore)

| Opzione | Tipo | Descrizione |
|------|------|------|
| `Enabled` | bool | Consenti scambio con dogtag giocatore (1=consenti, 0=non consentire) |
| `NeedDeathWishDogtag` | bool | Solo dogtag Death Wish (1=solo Death Wish, 0=include dogtag giocatore normale) |
| `RequireSelfKill` | bool | Solo dogtag da kill proprie (1=solo kill proprie, 0=qualsiasi kill consentita) |
| `RequireAny` | bool | (Non utilizzato) |
| `AllowSuicideDogtag` | bool | Consenti dogtag da suicidio (1=consenti, 0=escludi) |

### Comportamento Dettagliato PlayerDogtag

**NeedDeathWishDogtag:** Se 1, solo i dogtag Death Wish possono essere usati per lo scambio. I dogtag giocatore normali non possono. Se 0, sia dogtag normali che Death Wish possono essere usati.

**RequireSelfKill:** Se 1, solo i dogtag dalle kill proprie possono essere usati. I dogtag di giocatori uccisi da altri non possono. Se 0, qualsiasi dogtag può essere usato indipendentemente da chi ha ucciso.

**AllowSuicideDogtag:** Se 1, i dogtag da suicidio possono essere usati per lo scambio. Se 0, i dogtag da suicidio sono esclusi dallo scambio.

---

## AIDogtag (Dogtag AI)

| Opzione | Tipo | Descrizione |
|------|------|------|
| `Enabled` | bool | Consenti scambio con dogtag AI (1=consenti, 0=non consentire) |
| `RequireSelfKill` | bool | Solo dogtag AI da kill proprie (1=solo kill proprie, 0=qualsiasi kill consentita) |
| `RequireAny` | bool | (Non utilizzato) |

### Comportamento Dettagliato AIDogtag

**RequireSelfKill:** Come PlayerDogtag. Se 1, solo dogtag AI da kill proprie. Se 0, qualsiasi dogtag AI può essere usato.

---

## Priorità Applicazione Condizioni

| Enabled Globale | Item ItemTradeConditions.Enabled | Condizioni Applicate |
|--------------|-----------------------------------|----------------|
| 1 | 0 | TradeConditions globali (oggetti senza condizioni specifiche usano globali) |
| 0 | 1 | ItemTradeConditions oggetto (solo quell'oggetto usa condizioni diverse) |
| 1 | 1 | ItemTradeConditions oggetto (condizioni per oggetto hanno priorità su globali) |
| 0 | 0 | Scambio bloccato (TRADE_FAIL) |

Se un oggetto ha `ItemTradeConditions` con `Enabled` 1, quell'oggetto ignora le impostazioni globali e usa solo le condizioni PlayerDogtag e AIDogtag dell'oggetto.

[Condizioni di Scambio per Oggetto →](ItemTradeConditions)