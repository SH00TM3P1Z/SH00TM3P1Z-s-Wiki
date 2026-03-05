# Impostazioni Dogtag AI (AIDogtagSettings)

**Percorso file:** `$profile:EnhancedDogtag\Config\AIDogtagSettings.json`

File di configurazione che controlla se l'AI può trasportare dogtag e se i dogtag AI possono essere lootati.

---

## Impostazioni

| Opzione | Tipo | Predefinito | Descrizione |
|------|------|--------|------|
| `Version` | int | 2 | Versione configurazione (non modificare) |
| `AIDogtagEnabled` | bool | true | Abilita dogtag AI (se l'AI può trasportare dogtag) |
| `AIDogtagLootingEnabled` | bool | true | Consenti looting dogtag AI (se i dogtag possono essere lootati dai cadaveri AI) |

### Comportamento Dettagliato

**AIDogtagEnabled:** Se false, l'AI non trasporta dogtag. Nessun dogtag viene rilasciato dai cadaveri AI.

**AIDogtagLootingEnabled:** Se false, i giocatori non possono lootare dogtag dai cadaveri AI anche se presenti. Il looting è bloccato anche con AIDogtagEnabled true.

Entrambe le impostazioni devono essere true per ottenere dogtag AI e utilizzarli nello scambio dogtag.

---

## Esempio Configurazione

```json
{
  "Version": 2,
  "AIDogtagEnabled": true,
  "AIDogtagLootingEnabled": true
}
```

---

## Relazione con DogtagSettings

| 파일 | 용도 |
|------|------|
| **DogtagSettings.json** | Comportamento base dogtag giocatore (looting, Death Wish, ecc.) |
| **AIDogtagSettings.json** | Comportamento dogtag AI (trasporto/looting AI) |

I dogtag AI possono essere utilizzati nel sistema di scambio. Utilizzati insieme alle impostazioni `AIDogtag` in [Condizioni di Scambio (TradeConditions)](TradeConditions).

[Impostazioni Dogtag →](DogtagSettings)