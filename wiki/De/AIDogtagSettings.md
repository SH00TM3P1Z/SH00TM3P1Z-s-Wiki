# AI-Dogtag-Einstellungen (AIDogtagSettings)

**Dateipfad:** `$profile:EnhancedDogtag\Config\AIDogtagSettings.json`

Konfigurationsdatei, die steuert, ob KI Dogtags tragen kann und ob KI-Dogtags gelootet werden können.

---

## Einstellungen

| Option | Typ | Standard | Beschreibung |
|------|------|--------|------|
| `Version` | int | 2 | Konfigurationsversion (Änderung nicht empfohlen) |
| `AIDogtagEnabled` | bool | true | KI-Dogtags aktivieren (ob KI Dogtags tragen kann) |
| `AIDogtagLootingEnabled` | bool | true | KI-Dogtag-Looting erlauben (ob Dogtags von KI-Leichen gelootet werden können) |

### Detailliertes Verhalten

**AIDogtagEnabled:** Bei false trägt die KI keine Dogtags. Keine Dogtags fallen von KI-Leichen.

**AIDogtagLootingEnabled:** Bei false können Spieler keine Dogtags von KI-Leichen looten, auch wenn welche vorhanden sind. Looting ist blockiert, auch wenn AIDogtagEnabled true ist.

Beide Einstellungen müssen true sein, um KI-Dogtags zu erhalten und im Dogtag-Handel zu verwenden.

---

## Konfigurationsbeispiel

```json
{
  "Version": 2,
  "AIDogtagEnabled": true,
  "AIDogtagLootingEnabled": true
}
```

---

## Beziehung zu DogtagSettings

| 파일 | 용도 |
|------|------|
| **DogtagSettings.json** | Spieler-Dogtag-Grundverhalten (Looting, Death Wish usw.) |
| **AIDogtagSettings.json** | KI-Dogtag-Verhalten (KI-Tragen/Looting) |

KI-Dogtags können im Handelssystem verwendet werden. Wird zusammen mit den `AIDogtag`-Einstellungen in [Handelsbedingungen (TradeConditions)](TradeConditions) verwendet.

[Dogtag-Einstellungen →](DogtagSettings)