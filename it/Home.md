# Enhanced Dogtags - Wiki Impostazioni Dogtag

Documentazione di tutte le impostazioni relative ai dogtag nel mod Enhanced Dogtags di SH00TM3P1Z (SMPZ).

> **Sincronizzazione in tempo reale:** Tutte le impostazioni dei dogtag (DogtagSettings, AIDogtagSettings, DogtagTradeSettings, file JSON per categoria, ecc.) vengono **applicate al server in tempo reale al salvataggio dei file**, quindi non è necessario riavviare il server per applicare le modifiche alla configurazione.

## Indice

1. [Percorsi File di Configurazione](#percorsi-file-di-configurazione)
2. [Impostazioni Dogtag (DogtagSettings)](#impostazioni-dogtag)
3. [Impostazioni Dogtag AI (AIDogtagSettings)](#impostazioni-dogtag-ai)
4. [Impostazioni Scambio Dogtag (DogtagTradeSettings)](#impostazioni-scambio-dogtag)
5. [Condizioni di Scambio (TradeConditions)](#condizioni-di-scambio)
6. [Condizioni di Scambio per Oggetto (ItemTradeConditions)](#condizioni-di-scambio-per-oggetto)
7. [Elenco Oggetti di Scambio](#elenco-oggetti-di-scambio)
8. [Dati Durata Dogtag (DogtagLifetime)](#dati-durata-dogtag)

---

## Percorsi File di Configurazione

Tutti i file di configurazione sono memorizzati relativamente alla cartella del profilo del server.

| Percorso | Descrizione |
|------|------|
| `$profile:EnhancedDogtag\Config\` | Cartella configurazione |
| `$profile:EnhancedDogtag\Config\DogtagSettings.json` | Impostazioni base dogtag (looting, Death Wish, ecc.) |
| `$profile:EnhancedDogtag\Config\AIDogtagSettings.json` | Impostazioni dogtag AI |
| `$profile:EnhancedDogtag\Config\DogtagTradeSettings.json` | Impostazioni principali scambio dogtag |
| `$profile:EnhancedDogtag\Config\Category\` | File JSON oggetti di scambio per categoria |
| `$profile:EnhancedDogtag\Data\DogtagLifetime.json` | Dati durata dogtag (generati automaticamente, modifica manuale sconsigliata) |

> **Nota:** `$profile:` si riferisce al percorso del profilo del server DayZ. (es: `DayZServer\Profiles\`)

---

## Configurazione tramite Mod Manager

Se `SMPZ Mod Manager` è installato, gli amministratori possono modificare tutte le impostazioni dei dogtag in-game tramite il menu del mod manager.
<img width="1339" height="806" alt="스크린샷 2026-03-05 151403" src="https://github.com/user-attachments/assets/b7cf9f89-93ce-461d-8715-56c54838e2d9" />

---

## Impostazioni Dogtag

[Documentazione Completa Impostazioni Dogtag →](DogtagSettings)

---

## Impostazioni Dogtag AI

[Documentazione Completa Impostazioni Dogtag AI →](AIDogtagSettings)

---

## Impostazioni Scambio Dogtag

[Documentazione Completa Impostazioni Scambio →](DogtagTradeSettings)

---

## Condizioni di Scambio (TradeConditions)

[Documentazione Completa Condizioni di Scambio →](TradeConditions)

---

## Condizioni di Scambio per Oggetto (ItemTradeConditions)

[Documentazione Completa Condizioni di Scambio per Oggetto →](ItemTradeConditions)

---

## Elenco Oggetti di Scambio

[Documentazione Completa Elenco Oggetti di Scambio →](TradeItemList)

---

## Dati Durata Dogtag (DogtagLifetime)

[Documentazione Completa Dati Durata Dogtag →](DogtagLifetimeData)