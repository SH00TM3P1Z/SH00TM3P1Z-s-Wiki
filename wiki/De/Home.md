# Enhanced Dogtags - Dogtag-Einstellungen Wiki

Dokumentation aller dogtag-bezogenen Einstellungen im Enhanced Dogtags Mod von SH00TM3P1Z (SMPZ).

> **Echtzeit-Synchronisation:** Alle Dogtag-Einstellungen (DogtagSettings, AIDogtagSettings, DogtagTradeSettings, kategoriebezogene JSON-Dateien usw.) werden **bei Dateispeicherung in Echtzeit auf den Server angewendet**, sodass keine Server-Neustarts für Konfigurationsänderungen erforderlich sind.

## Inhaltsverzeichnis

1. [Konfigurationsdatei-Pfade](#config-file-paths)
2. [Dogtag-Einstellungen (DogtagSettings)](#dogtag-settings)
3. [AI-Dogtag-Einstellungen (AIDogtagSettings)](#ai-dogtag-settings)
4. [Dogtag-Handel-Einstellungen (DogtagTradeSettings)](#dogtag-trade-settings)
5. [Handelsbedingungen (TradeConditions)](#trade-conditions)
6. [Item-Handelsbedingungen (ItemTradeConditions)](#item-trade-conditions)
7. [Handels-Item-Liste](#trade-item-list)
8. [Dogtag-Lebensdauer-Daten (DogtagLifetime)](#dogtag-lifetime-data)

---

## Konfigurationsdatei-Pfade

Alle Konfigurationsdateien werden relativ zum Server-Profilordner gespeichert.

| Pfad | Beschreibung |
|------|------|
| `$profile:EnhancedDogtag\Config\` | Konfigurationsordner |
| `$profile:EnhancedDogtag\Config\DogtagSettings.json` | Dogtag-Grundeinstellungen (Looting, Death Wish usw.) |
| `$profile:EnhancedDogtag\Config\AIDogtagSettings.json` | AI-Dogtag-Einstellungen |
| `$profile:EnhancedDogtag\Config\DogtagTradeSettings.json` | Dogtag-Handel-Haupteinstellungen |
| `$profile:EnhancedDogtag\Config\Category\` | Kategoriebezogene Handels-Item-JSON-Dateien |
| `$profile:EnhancedDogtag\Data\DogtagLifetime.json` | Dogtag-Lebensdauer-Daten (automatisch generiert, manuelle Bearbeitung nicht empfohlen) |

> **Hinweis:** `$profile:` verweist auf den DayZ-Server-Profilpfad. (z.B. `DayZServer\Profiles\`)

---

## Konfiguration über Mod Manager

Wenn `SMPZ Mod Manager` installiert ist, können Admins alle Dogtag-Einstellungen im Spiel über das Mod-Manager-Menü ändern.
<img width="1339" height="806" alt="스크린샷 2026-03-05 151403" src="https://github.com/user-attachments/assets/b7cf9f89-93ce-461d-8715-56c54838e2d9" />

---

## Dogtag-Einstellungen

[Vollständige Dogtag-Einstellungen Dokumentation →](DogtagSettings)

---

## AI-Dogtag-Einstellungen

[Vollständige AI-Dogtag-Einstellungen Dokumentation →](AIDogtagSettings)

---

## Dogtag-Handel-Einstellungen

[Vollständige Handels-Einstellungen Dokumentation →](DogtagTradeSettings)

---

## Handelsbedingungen (TradeConditions)

[Vollständige Handelsbedingungen Dokumentation →](TradeConditions)

---

## Item-Handelsbedingungen (ItemTradeConditions)

[Vollständige Item-Handelsbedingungen Dokumentation →](ItemTradeConditions)

---

## Handels-Item-Liste

[Vollständige Handels-Item-Liste Dokumentation →](TradeItemList)

---

## Dogtag-Lebensdauer-Daten (DogtagLifetime)

[Vollständige Dogtag-Lebensdauer-Daten Dokumentation →](DogtagLifetimeData)