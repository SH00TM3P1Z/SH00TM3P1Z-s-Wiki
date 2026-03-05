# Dati Durata Dogtag (DogtagLifetime.json)

**Percorso file:** `$profile:EnhancedDogtag\Data\DogtagLifetime.json`

File dati runtime dove il server **salva automaticamente** tempo di sopravvivenza dogtag, conteggio kill, livello Death Wish per giocatore, ecc. Sono **dati runtime**, non un file di configurazione, quindi la modifica manuale non è consigliata.

---

## Scopo

- **Persistenza Death Wish:** Quando `KeepDeathWishOnDeath` è attivo, il livello Death Wish viene ripristinato al respawn successivo dopo la morte
- **Persistenza conteggio kill:** Quando `KeepKillCountsOnDeath` è attivo, i conteggi kill giocatore/AI vengono applicati al nuovo dogtag alla morte
- **Reset:** Le informazioni dogtag di tutti i giocatori possono essere azzerate
- Applica dati precedenti al dogtag creato alla morte del giocatore

---

## Struttura JSON

```json
{
    "PlayerEntries": [
        {
            "PlayerName": "Ya-Mahaba",
            "PlayerId": "d2xG6LXwQPwK10j4pPC2LnItlC7RxZcmRCLyyqJaRNk=",
            "LifetimeSeconds": 3670,
            "TagType": "SMPZ_Dogtag_DeathWish_5",
            "BloodType": "None",
            "PlayerKillCount": 29,
            "AIKillCount": 819,
            "LastUpdateTime": "2026-3-5 14:39:50"
        }
    ]
}
```

---

## Descrizione Opzioni PlayerEntries

| Opzione | Tipo | Descrizione |
|------|------|------|
| `PlayerName` | string | Nome giocatore |
| `PlayerId` | string | ID univoco giocatore (codificato Base64) |
| `LifetimeSeconds` | int | Ultimo tempo di sopravvivenza (secondi) |
| `TagType` | string | Tipo dogtag (es: `SMPZ_Dogtag_DeathWish_1` ~ `5`, dogtag base) |
| `BloodType` | string | Gruppo sanguigno (O+, O-, A+, A-, B+, B-, AB+, AB-, None) |
| `PlayerKillCount` | int | Conteggio kill giocatori |
| `AIKillCount` | int | Conteggio kill AI |
| `LastUpdateTime` | string | Ultimo aggiornamento |

---

## Note

- **Generato automaticamente:** Il server aggiorna automaticamente alla morte del giocatore o alla creazione del dogtag.
- **Massimo 1000 giocatori:** Sono memorizzati fino a 1000 giocatori. Le voci più vecchie vengono rimosse quando pieno, ordinate per tempo di sopravvivenza più breve.
- **Modifica manuale sconsigliata:** Formato o dati non validi possono causare malfunzionamenti.
- **Config vs Data:** La cartella `Config\` è per le impostazioni, `Data\` per i dati runtime.

---

## Comportamento Dettagliato

**LifetimeSeconds:** Ultimo tempo di sopravvivenza del giocatore in secondi. Il tempo di sopravvivenza al momento della morte viene salvato.

**TagType:** Tipo di dogtag da creare al respawn successivo. Salvato come `SMPZ_Dogtag_DeathWish_1` fino a `5`, o tipo dogtag base.

**PlayerKillCount, AIKillCount:** Conteggi kill applicati al nuovo dogtag quando KeepKillCountsOnDeath è true.

**Integrazione KeepDeathWishOnDeath:** Quando true, TagType, conteggi kill, ecc. in DogtagLifetime.json persistono dopo la morte e vengono applicati al nuovo dogtag al respawn successivo.

[Impostazioni Dogtag →](DogtagSettings)