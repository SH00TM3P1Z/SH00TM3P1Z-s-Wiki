# Conditions d'échange (TradeConditions)

La section `TradeConditions` dans `DogtagTradeSettings.json` définit les **conditions d'échange globales**.

## Structure

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

| Valeur | Description |
|----|------|
| 1 | Conditions d'échange globales activées. Appliquées à tous les objets (sauf ceux avec des conditions spécifiques) |
| 0 | Conditions d'échange globales désactivées. Échange possible uniquement si le JSON de l'objet a `ItemTradeConditions.Enabled=1` |

> **Condition d'échange possible :** L'échange est autorisé si le `Enabled` global ou l'`ItemTradeConditions.Enabled` de l'objet est 1. Si les deux sont 0, l'échange est bloqué et la notification "Trade Fail" s'affiche.

---

## PlayerDogtag (Dogtags joueur)

| Option | Type | Description |
|------|------|------|
| `Enabled` | bool | Autoriser l'échange avec les dogtags joueur (1=autorisé, 0=interdit) |
| `NeedDeathWishDogtag` | bool | Dogtags Death Wish uniquement (1=Death Wish uniquement, 0=inclure les dogtags joueur normaux) |
| `RequireSelfKill` | bool | Uniquement les dogtags de kills personnels (1=kills personnels uniquement, 0=tous les kills autorisés) |
| `RequireAny` | bool | (Non utilisé) |
| `AllowSuicideDogtag` | bool | Autoriser les dogtags de suicide (1=autorisé, 0=exclu) |

### Comportement détaillé PlayerDogtag

**NeedDeathWishDogtag :** Si 1, seuls les dogtags Death Wish peuvent être utilisés pour l'échange. Les dogtags joueur normaux ne peuvent pas. Si 0, les dogtags normaux et Death Wish peuvent être utilisés.

**RequireSelfKill :** Si 1, seuls les dogtags des kills personnels peuvent être utilisés. Les dogtags de joueurs tués par d'autres ne peuvent pas. Si 0, tout dogtag peut être utilisé quel que soit le tueur.

**AllowSuicideDogtag :** Si 1, les dogtags de suicide peuvent être utilisés pour l'échange. Si 0, les dogtags de suicide sont exclus de l'échange.

---

## AIDogtag (Dogtags IA)

| Option | Type | Description |
|------|------|------|
| `Enabled` | bool | Autoriser l'échange avec les dogtags IA (1=autorisé, 0=interdit) |
| `RequireSelfKill` | bool | Uniquement les dogtags IA de kills personnels (1=kills personnels uniquement, 0=tous les kills autorisés) |
| `RequireAny` | bool | (Non utilisé) |

### Comportement détaillé AIDogtag

**RequireSelfKill :** Identique à PlayerDogtag. Si 1, seuls les dogtags IA de kills personnels. Si 0, tout dogtag IA peut être utilisé.

---

## Priorité d'application des conditions

| Enabled global | Item ItemTradeConditions.Enabled | Conditions appliquées |
|--------------|-----------------------------------|----------------|
| 1 | 0 | TradeConditions globales (objets sans conditions spécifiques utilisent le global) |
| 0 | 1 | ItemTradeConditions de l'objet (seul cet objet utilise des conditions différentes) |
| 1 | 1 | ItemTradeConditions de l'objet (les conditions par objet priment sur le global) |
| 0 | 0 | Échange bloqué (TRADE_FAIL) |

Si un objet a `ItemTradeConditions` avec `Enabled` 1, cet objet ignore les paramètres globaux et utilise uniquement ses conditions PlayerDogtag et AIDogtag.

[Conditions d'échange par objet →](ItemTradeConditions)