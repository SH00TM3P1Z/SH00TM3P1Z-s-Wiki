# Handelsbedingungen (TradeConditions)

Der `TradeConditions`-Abschnitt in `DogtagTradeSettings.json` definiert **globale Handelsbedingungen**.

## Struktur

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

## Enabled (Global)

| Wert | Beschreibung |
|----|------|
| 1 | Globale Handelsbedingungen aktiviert. Gilt für alle Items (außer Items mit itemspezifischen Bedingungen) |
| 0 | Globale Handelsbedingungen deaktiviert. Handel nur möglich, wenn Item-JSON `ItemTradeConditions.Enabled=1` hat |

> **Handelsverfügbarkeit:** Handel erlaubt, wenn entweder globales `Enabled` oder Item `ItemTradeConditions.Enabled` 1 ist. Sind beide 0, ist Handel blockiert und "Trade Fail"-Benachrichtigung erscheint.

---

## PlayerDogtag (Spieler-Dogtags)

| Option | Typ | Beschreibung |
|------|------|------|
| `Enabled` | bool | Handel mit Spieler-Dogtags erlauben (1=erlauben, 0=nicht erlauben) |
| `NeedDeathWishDogtag` | bool | Nur Death-Wish-Dogtags (1=nur Death Wish, 0=normale Spieler-Dogtags einschließen) |
| `RequireSelfKill` | bool | Nur Dogtags von eigenen Kills (1=nur eigene Kills, 0=von wem auch immer erlaubt) |
| `RequireAny` | bool | (Unbenutzt) |
| `AllowSuicideDogtag` | bool | Selbstmord-Dogtags erlauben (1=erlauben, 0=ausschließen) |

### PlayerDogtag Detailliertes Verhalten

**NeedDeathWishDogtag:** Bei 1 können nur Death-Wish-Dogtags für den Handel verwendet werden. Normale Spieler-Dogtags können nicht. Bei 0 können sowohl normale als auch Death-Wish-Dogtags verwendet werden.

**RequireSelfKill:** Bei 1 können nur Dogtags von eigenen Kills verwendet werden. Dogtags von von anderen getöteten Spielern können nicht. Bei 0 kann jeder Dogtag unabhängig vom Täter verwendet werden.

**AllowSuicideDogtag:** Bei 1 können Selbstmord-Dogtags für den Handel verwendet werden. Bei 0 sind Selbstmord-Dogtags vom Handel ausgeschlossen.

---

## AIDogtag (KI-Dogtags)

| Option | Typ | Beschreibung |
|------|------|------|
| `Enabled` | bool | Handel mit KI-Dogtags erlauben (1=erlauben, 0=nicht erlauben) |
| `RequireSelfKill` | bool | Nur KI-Dogtags von eigenen Kills (1=nur eigene Kills, 0=von wem auch immer erlaubt) |
| `RequireAny` | bool | (Unbenutzt) |

### AIDogtag Detailliertes Verhalten

**RequireSelfKill:** Wie bei PlayerDogtag. Bei 1 nur KI-Dogtags von eigenen Kills. Bei 0 kann jeder KI-Dogtag verwendet werden.

---

## Bedingungs-Priorität

| Global Enabled | Item ItemTradeConditions.Enabled | Angewendete Bedingungen |
|--------------|-----------------------------------|----------------|
| 1 | 0 | Globale TradeConditions (Items ohne itemspezifische Bedingungen nutzen global) |
| 0 | 1 | Item ItemTradeConditions (nur dieses Item nutzt andere Bedingungen) |
| 1 | 1 | Item ItemTradeConditions (itemspezifische Bedingungen überschreiben global) |
| 0 | 0 | Handel blockiert (TRADE_FAIL) |

Hat ein Item `ItemTradeConditions` mit `Enabled` 1, ignoriert dieses Item globale Einstellungen und nutzt nur seine eigenen PlayerDogtag- und AIDogtag-Bedingungen.

[Item-Handelsbedingungen →](ItemTradeConditions)