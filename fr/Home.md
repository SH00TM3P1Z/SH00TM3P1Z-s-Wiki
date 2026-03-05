# Enhanced Dogtags - Wiki des paramètres Dogtag

Documentation de tous les paramètres liés aux dogtags du mod Enhanced Dogtags par SH00TM3P1Z (SMPZ).

> **Synchronisation en temps réel :** Tous les paramètres dogtag (DogtagSettings, AIDogtagSettings, DogtagTradeSettings, fichiers JSON par catégorie, etc.) sont **appliqués au serveur en temps réel lors de l'enregistrement des fichiers**, aucune redémarrage du serveur n'est requis pour les modifications de configuration.

## Table des matières

1. [Chemins des fichiers de configuration](#chemins-des-fichiers-de-configuration)
2. [Paramètres Dogtag de base (DogtagSettings)](#paramètres-dogtag-de-base)
3. [Paramètres Dogtag IA (AIDogtagSettings)](#paramètres-dogtag-ia)
4. [Paramètres d'échange Dogtag (DogtagTradeSettings)](#paramètres-déchange-dogtag)
5. [Conditions d'échange (TradeConditions)](#conditions-déchange)
6. [Conditions d'échange par objet (ItemTradeConditions)](#conditions-déchange-par-objet)
7. [Liste des objets échangeables](#liste-des-objets-échangeables)
8. [Données de durée de vie Dogtag (DogtagLifetime)](#données-durée-de-vie-dogtag)

---

## Chemins des fichiers de configuration

Tous les fichiers de configuration sont stockés par rapport au dossier de profil du serveur.

| Chemin | Description |
|------|------|
| `$profile:EnhancedDogtag\Config\` | Dossier de configuration |
| `$profile:EnhancedDogtag\Config\DogtagSettings.json` | Paramètres dogtag de base (loot, Death Wish, etc.) |
| `$profile:EnhancedDogtag\Config\AIDogtagSettings.json` | Paramètres dogtag IA |
| `$profile:EnhancedDogtag\Config\DogtagTradeSettings.json` | Paramètres principaux d'échange dogtag |
| `$profile:EnhancedDogtag\Config\Category\` | Fichiers JSON d'objets échangeables par catégorie |
| `$profile:EnhancedDogtag\Data\DogtagLifetime.json` | Données de durée de vie dogtag (générées automatiquement, modification manuelle déconseillée) |

> **Note :** `$profile:` désigne le chemin du profil serveur DayZ. (ex. : `DayZServer\Profiles\`)

---

## Configuration via le gestionnaire de mods

Si `SMPZ Mod Manager` est installé, les administrateurs peuvent modifier tous les paramètres dogtag en jeu via le menu du gestionnaire de mods.
<img width="1339" height="806" alt="스크린샷 2026-03-05 151403" src="https://github.com/user-attachments/assets/b7cf9f89-93ce-461d-8715-56c54838e2d9" />

---

## Paramètres Dogtag de base

[Documentation complète des paramètres Dogtag →](DogtagSettings)

---

## Paramètres Dogtag IA

[Documentation complète des paramètres Dogtag IA →](AIDogtagSettings)

---

## Paramètres d'échange Dogtag

[Documentation complète des paramètres d'échange →](DogtagTradeSettings)

---

## Conditions d'échange (TradeConditions)

[Documentation complète des conditions d'échange →](TradeConditions)

---

## Conditions d'échange par objet (ItemTradeConditions)

[Documentation complète des conditions d'échange par objet →](ItemTradeConditions)

---

## Liste des objets échangeables

[Documentation complète de la liste des objets échangeables →](TradeItemList)

---

## Données de durée de vie Dogtag (DogtagLifetime)

[Documentation complète des données de durée de vie Dogtag →](DogtagLifetimeData)