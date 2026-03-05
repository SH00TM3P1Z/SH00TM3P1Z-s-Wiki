# Condizioni di Scambio per Oggetto (ItemTradeConditions)

Aggiungi `ItemTradeConditions` all'interno di ogni **file JSON oggetto di scambio** per applicare **condizioni di scambio diverse** solo a quell'oggetto.

## Posizione

File JSON nelle cartelle categoria (`$profile:EnhancedDogtag\Config\Category\{categoria}\*.json`)

## Struttura

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

## Enabled (Per Oggetto)

| Valore | Descrizione |
|----|------|
| 1 | Questo oggetto **ignora TradeConditions globali** e usa le condizioni PlayerDogtag/AIDogtag sotto |
| 0 | Questo oggetto usa TradeConditions globali (come senza ItemTradeConditions) |

---

## PlayerDogtag / AIDogtag

Stessa struttura di `PlayerDogtag` e `AIDogtag` di `TradeConditions` globale.

| Opzione | Descrizione |
|------|------|
| `Enabled` | Se consentire quel tipo di dogtag |
| `NeedDeathWishDogtag` | (Solo PlayerDogtag) Solo dogtag Death Wish |
| `RequireSelfKill` | Solo dogtag da kill proprie |
| `AllowSuicideDogtag` | (Solo PlayerDogtag) Consenti dogtag da suicidio |

### Comportamento Dettagliato

Gli oggetti con `ItemTradeConditions.Enabled` 1 non usano TradeConditions globali e applicano solo le condizioni PlayerDogtag e AIDogtag impostate. Es: globalmente si possono consentire dogtag AI, ma un oggetto M4A1 specifico può richiedere solo dogtag Death Wish giocatore.

---

## Esempio: M4A1 Solo Death Wish

```json
{
  "ItemClassName": "M4A1",
  "CustomName": "Fucile Death Wish",
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

- M4A1 scambiabile solo con **10 dogtag Death Wish giocatore**
- Dogtag AI non utilizzabili (`AIDogtag.Enabled: 0`)

---

## Comportamento UI

- **Elenco oggetti:** Mostra tipo dogtag richiesto (normale/Death Wish/AI) per oggetto
- **Alla selezione:** Anteprima dogtag pannello azioni e conteggio dogtag inventario si aggiornano in base alle condizioni dell'oggetto

[Elenco Oggetti di Scambio →](TradeItemList)