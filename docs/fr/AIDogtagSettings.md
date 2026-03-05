# Paramètres Dogtag IA (AIDogtagSettings)

**Chemin du fichier :** `$profile:EnhancedDogtag\Config\AIDogtagSettings.json`

Fichier de configuration qui contrôle si l'IA peut porter des dogtags et si les dogtags IA peuvent être lootés.

---

## Paramètres

| Option | Type | Par défaut | Description |
|------|------|--------|------|
| `Version` | int | 2 | Version de la configuration (modification non recommandée) |
| `AIDogtagEnabled` | bool | true | Activer les dogtags IA (si l'IA peut porter des dogtags) |
| `AIDogtagLootingEnabled` | bool | true | Autoriser le loot des dogtags IA (si les dogtags peuvent être lootés sur les cadavres IA) |

### Comportement détaillé

**AIDogtagEnabled :** Si false, l'IA ne porte pas de dogtags. Aucun dogtag ne tombe des cadavres IA.

**AIDogtagLootingEnabled :** Si false, les joueurs ne peuvent pas loot les dogtags sur les cadavres IA même s'ils existent. Le loot est bloqué même si AIDogtagEnabled est true.

Les deux paramètres doivent être true pour obtenir des dogtags IA et les utiliser dans l'échange dogtag.

---

## Exemple de configuration

```json
{
  "Version": 2,
  "AIDogtagEnabled": true,
  "AIDogtagLootingEnabled": true
}
```

---

## Relation avec DogtagSettings

| 파일 | 용도 |
|------|------|
| **DogtagSettings.json** | Comportement de base dogtag joueur (loot, Death Wish, etc.) |
| **AIDogtagSettings.json** | Comportement dogtag IA (port/loot IA) |

Les dogtags IA peuvent être utilisés dans le système d'échange. Utilisés avec les paramètres `AIDogtag` dans [Conditions d'échange (TradeConditions)](TradeConditions).

[Paramètres Dogtag de base →](DogtagSettings)