# Conditions d'échange par objet (ItemTradeConditions)

Ajoutez `ItemTradeConditions` dans chaque fichier JSON **d'objet échangeable** pour appliquer des **conditions d'échange différentes** à cet objet uniquement.

## Emplacement

Fichiers JSON dans les dossiers de catégorie (`$profile:EnhancedDogtag\Config\Category\{catégorie}\*.json`)

## Structure

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

## Enabled (Par objet)

| Valeur | Description |
|----|------|
| 1 | Cet objet **ignore les TradeConditions globales** et utilise les conditions PlayerDogtag/AIDogtag ci-dessous |
| 0 | Cet objet utilise les TradeConditions globales (identique à l'absence d'ItemTradeConditions) |

---

## PlayerDogtag / AIDogtag

Même structure que PlayerDogtag et AIDogtag des `TradeConditions` globales.

| Option | Description |
|------|------|
| `Enabled` | Autoriser ou non ce type de dogtag |
| `NeedDeathWishDogtag` | (PlayerDogtag uniquement) Dogtags Death Wish uniquement |
| `RequireSelfKill` | Uniquement les dogtags de kills personnels |
| `AllowSuicideDogtag` | (PlayerDogtag uniquement) Autoriser les dogtags de suicide |

### Comportement détaillé

Les objets avec `ItemTradeConditions.Enabled` 1 n'utilisent pas les TradeConditions globales et n'appliquent que leurs conditions PlayerDogtag et AIDogtag. Ex. : le global peut autoriser les dogtags IA, mais un objet M4A1 spécifique peut exiger uniquement des dogtags joueur Death Wish.

---

## Exemple : M4A1 Death Wish uniquement

```json
{
  "ItemClassName": "M4A1",
  "CustomName": "Fusil Death Wish",
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

- M4A1 échangeable uniquement contre **10 dogtags joueur Death Wish**
- Les dogtags IA ne peuvent pas être utilisés (`AIDogtag.Enabled: 0`)

---

## Comportement de l'interface

- **Liste des objets :** Affiche le type de dogtag requis (normal/Death Wish/IA) par objet
- **À la sélection :** L'aperçu dogtag du panneau d'action et le nombre de dogtags de l'inventaire se mettent à jour selon les conditions de l'objet

[Liste des objets échangeables →](TradeItemList)