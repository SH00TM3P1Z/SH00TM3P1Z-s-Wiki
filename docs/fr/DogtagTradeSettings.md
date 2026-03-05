# Paramètres d'échange Dogtag (DogtagTradeSettings)

**Chemin du fichier :** `$profile:EnhancedDogtag\Config\DogtagTradeSettings.json`

## Paramètres de base

| Option | Type | Par défaut | Description |
|------|------|--------|------|
| `Enabled` | bool | true | Activer le système d'échange dogtag (1=activé, 0=désactivé) |
| `UseDateRange` | bool | false | Utiliser une plage de dates |
| `UseWeekendOnly` | bool | false | Échange uniquement le week-end |
| `StartDate` | string | "" | Date de début d'échange (AAAA/MM/JJ) |
| `EndDate` | string | "" | Date de fin d'échange (AAAA/MM/JJ) |
| `TimeZone` | string | "UTC" | Fuseau horaire (ex. : KST, UTC) |
| `IncludeAttachmentsPrice` | bool | false | Inclure le prix des accessoires dans le nombre de dogtags |

---

## Restriction date/heure (Comportement détaillé)

La disponibilité des échanges est déterminée **côté serveur**. Si `IsTradeEnabled()` retourne false, l'échange est entièrement bloqué.

### UseDateRange

- **false :** Aucune restriction de date. `StartDate` et `EndDate` sont ignorés.
- **true :** Échange autorisé uniquement dans la plage `StartDate` à `EndDate`.

### StartDate / EndDate

- **Format :** `AAAA/MM/JJ` (ex. : `2025/03/01`)
- **Quand UseDateRange est true :**
  - StartDate uniquement : Échange autorisé lorsque la date actuelle est égale ou postérieure à la date de début
  - EndDate uniquement : Échange autorisé lorsque la date actuelle est égale ou antérieure à la date de fin
  - Les deux : Échange autorisé lorsque la date actuelle est entre le début et la fin (inclus)
  - Les deux vides : Aucune restriction de date (même avec UseDateRange true)

### TimeZone

- Fuseau horaire utilisé pour le **calcul de la date/jour de la semaine** pour `StartDate`, `EndDate` et `UseWeekendOnly`.
- L'heure UTC du serveur est convertie dans ce fuseau avant comparaison.

**Valeurs prises en charge (sensible à la casse) :**

| Valeur | Décalage |
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

- **true :** Échange uniquement le **samedi et dimanche** (selon le TimeZone).
- **Note :** Pour utiliser `UseWeekendOnly`, tout ce qui suit doit être rempli :
  - `UseDateRange` doit être true
  - `StartDate` doit avoir une valeur
  - `EndDate` doit avoir une valeur
- Si une condition manque, l'échange est toujours bloqué.

### Résumé de l'ordre de comportement

1. Si `UseDateRange` est false : Aucune restriction date/week-end
2. Si `UseDateRange` est true : Vérifier la plage `StartDate` et `EndDate`
3. Si `UseWeekendOnly` est true : Dans la plage, **seuls les week-ends** autorisent l'échange

### Exemples de configuration de dates

| Objectif | UseDateRange | StartDate | EndDate | UseWeekendOnly | TimeZone |
|------|--------------|-----------|---------|----------------|----------|
| Sans restriction | false | "" | "" | false | - |
| Mars uniquement | true | "2025/03/01" | "2025/03/31" | false | "KST" |
| Week-ends de mars uniquement | true | "2025/03/01" | "2025/03/31" | true | "KST" |
| À partir d'une date, sans fin | true | "2025/03/15" | "" | false | "UTC" |

---

## IncludeAttachmentsPrice (Comportement détaillé du prix des accessoires)

**false :** Seul le `NeedDogtagAmount` de l'objet est utilisé. Les accessoires ne sont pas comptés.

**true :** Les prix des accessoires s'ajoutent au prix de base de l'objet. Si les accessoires sont enregistrés dans la liste des objets échangeables, leur `NeedDogtagAmount` est additionné. Les accessoires imbriqués (accessoires sur accessoires) sont également additionnés.

Ex. : M4A1 base 10, lunette 2, chargeur 1 attachés. Avec true, 13 dogtags au total sont requis.

---

## Exemple de configuration

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

[Conditions d'échange (TradeConditions) →](TradeConditions)
