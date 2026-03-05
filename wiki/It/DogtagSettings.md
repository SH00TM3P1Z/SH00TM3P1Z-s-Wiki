# Impostazioni Dogtag (DogtagSettings)

**Percorso file:** `$profile:EnhancedDogtag\Config\DogtagSettings.json`

Questo file di configurazione definisce il comportamento base dei dogtag (looting, Death Wish, opzioni di visualizzazione, ecc.). È **separato dallo scambio di dogtag** e controlla il funzionamento dell'oggetto dogtag stesso.

---

## Impostazioni di Livello Superiore

| Opzione | Tipo | Default | Descrizione |
|------|------|--------|------|
| `Version` | int | 10 | Versione configurazione (non modificare) |
| `DogtagEnabled` | bool | true | Abilita sistema dogtag (1=attivo, 0=disattivo) |

---

## GeneralDogtagSettings (Impostazioni Dogtag Generali)

| Opzione | Tipo | Default | Descrizione |
|------|------|--------|------|
| `AllowDogtagLooting` | bool | true | Consenti looting dogtag alla morte |
| `DisableSuicideDogtagLooting` | bool | false | Disabilita looting dogtag in caso di suicidio |
| `EnableDogtagRespawnDelay` | bool | false | Abilita ritardo looting dogtag dopo respawn |
| `DogtagRespawnDelaySeconds` | int | 300 | Ritardo in secondi prima che il dogtag possa essere lootato dopo lo spawn |
| `ShowPlayerKills` | bool | true | Mostra conteggio kill giocatori |
| `ShowAIKills` | bool | true | Mostra conteggio kill AI |
| `DistanceUnit` | int | 0 | Unità distanza (0=metri, 1=yard) |
| `ShowDistance` | bool | true | Mostra distanza |
| `KeepKillCountsOnDeath` | bool | true | Mantieni conteggio kill alla morte |

### Comportamento Dettagliato GeneralDogtagSettings

**AllowDogtagLooting:** Se false, nessuno può lootare dogtag dai cadaveri. Se true, il looting è consentito quando sono soddisfatte le altre condizioni.

**DisableSuicideDogtagLooting:** Se true, i dogtag dei giocatori morti per suicidio non possono mai essere lootati. Se false, i dogtag da suicidio possono essere lootati (in base ad altre condizioni).

**EnableDogtagRespawnDelay / DogtagRespawnDelaySeconds:** Si applica solo alle morti per suicidio. Se true, il dogtag può essere lootato solo dopo i secondi specificati (default 300, 5 minuti) dalla morte. Se false, i dogtag da suicidio possono essere lootati immediatamente.

**ShowPlayerKills, ShowAIKills:** Attiva/disattiva la visualizzazione del conteggio kill giocatori e AI sull'oggetto dogtag.

**DistanceUnit:** 0 = metri (m), 1 = yard (yd) per la visualizzazione della distanza sulle informazioni dogtag morte del giocatore.

**KeepKillCountsOnDeath:** Se true, i conteggi kill della vita precedente vengono salvati in DogtagLifetime.json e applicati al nuovo dogtag. Se false, i conteggi kill vengono azzerati alla morte.

---

## DeathWishSettings (Impostazioni Death Wish)

| Opzione | Tipo | Default | Descrizione |
|------|------|--------|------|
| `DeathWishEnabled` | bool | true | Abilita funzionalità Death Wish |
| `ShowLifetimeToDeathWish` | bool | true | Mostra tempo di sopravvivenza fino a Death Wish |
| `ShowPlayerKillsToDeathWish` | bool | true | Mostra kill giocatori fino a Death Wish |
| `ShowAIKillsToDeathWish` | bool | true | Mostra kill AI fino a Death Wish |
| `DeathWishConditionType` | int | 0 | Tipo condizione kill Death Wish (0 = giocatore e AI, 1 = giocatore, 2 = AI) |
| `KeepDeathWishOnDeath` | bool | true | Mantieni livello Death Wish alla morte |
| `ShowSpecialPhrase` | int | 1 | Modalità visualizzazione frase speciale Death Wish |
| `DeathWishRespawnEnabled` | bool | true | Abilita respawn Death Wish (respawn nella posizione dell'ultima morte) |

### Comportamento Dettagliato DeathWishSettings

**DeathWishConditionType:** Condizione di kill richiesta per il level up Death Wish.
- 0: Sia kill giocatori che kill AI devono raggiungere l'obiettivo
- 1: Solo kill giocatori devono raggiungere l'obiettivo (kill AI ignorate)
- 2: Solo kill AI devono raggiungere l'obiettivo (kill giocatori ignorate)

**KeepDeathWishOnDeath:** Se true, il livello Death Wish viene mantenuto dopo morte e respawn. Salvato in DogtagLifetime.json.

**DeathWishRespawnEnabled:** Se true, la probabilità di respawn nella posizione dell'ultima morte viene applicata in base al livello Death Wish. Utilizza le probabilità di DeathWishRespawnSettings.

---

## NeedDeathWishTimeSettings (Condizioni Tempo Death Wish)

Tutti i valori di tempo sono in **secondi**. (es: 21600 = 6 ore)

**Comportamento:** Tempo di sopravvivenza richiesto per ogni livello. NeedDeathWishInitialTime è il tempo necessario per passare da dogtag normale a Death Wish. I tempi per livello sono il tempo di sopravvivenza necessario per raggiungere il livello successivo. Anche le condizioni di kill (in base a DeathWishConditionType) devono essere soddisfatte insieme al tempo.

| Opzione | Tipo | Default | Descrizione |
|------|------|--------|------|
| `NeedDeathWishInitialTime` | int | 21600 | Tempo di sopravvivenza necessario per Death Wish base |
| `NeedDeathWishLevel1Time` | int | 36000 | Tempo di sopravvivenza necessario per livello 1 |
| `NeedDeathWishLevel2Time` | int | 54000 | Tempo di sopravvivenza necessario per livello 2 |
| `NeedDeathWishLevel3Time` | int | 72000 | Tempo di sopravvivenza necessario per livello 3 |
| `NeedDeathWishLevel4Time` | int | 86400 | Tempo di sopravvivenza necessario per livello 4 |
| `NeedDeathWishLevel5Time` | int | 129600 | Tempo di sopravvivenza necessario per livello 5 |

---

## NeedDeathWishPlayerKillsSettings (Condizioni Kill Giocatori Level Up Death Wish)

| Opzione | Tipo | Default | Descrizione |
|------|------|--------|------|
| `NeedDeathWishPlayerKills1` | int | 50 | Kill giocatori necessarie per livello 1 |
| `NeedDeathWishPlayerKills2` | int | 100 | Kill giocatori necessarie per livello 2 |
| `NeedDeathWishPlayerKills3` | int | 200 | Kill giocatori necessarie per livello 3 |
| `NeedDeathWishPlayerKills4` | int | 300 | Kill giocatori necessarie per livello 4 |
| `NeedDeathWishPlayerKills5` | int | 500 | Kill giocatori necessarie per livello 5 |

---

## NeedDeathWishAIKillsSettings (Condizioni Kill AI Level Up Death Wish)

| Opzione | Tipo | Default | Descrizione |
|------|------|--------|------|
| `NeedDeathWishAIKills1` | int | 50 | Kill AI necessarie per livello 1 |
| `NeedDeathWishAIKills2` | int | 100 | Kill AI necessarie per livello 2 |
| `NeedDeathWishAIKills3` | int | 200 | Kill AI necessarie per livello 3 |
| `NeedDeathWishAIKills4` | int | 300 | Kill AI necessarie per livello 4 |
| `NeedDeathWishAIKills5` | int | 500 | Kill AI necessarie per livello 5 |

---

## DeathWishRespawnSettings (Probabilità Respawn Death Wish)

Probabilità (%) di respawn nella posizione dell'ultima morte per livello Death Wish.

**Comportamento:** Alla morte viene generato un valore casuale da 0 a 99. Se è inferiore alla probabilità del livello, il giocatore respawn nella posizione dell'ultima morte. Es: DeathWishRespawnChance3 di 50 = 50% probabilità respawn. 100 = respawn sempre.

| Opzione | Tipo | Default | Descrizione |
|------|------|--------|------|
| `DeathWishRespawnChance1` | int | 10 | Probabilità respawn livello 1 (%) |
| `DeathWishRespawnChance2` | int | 30 | Probabilità respawn livello 2 (%) |
| `DeathWishRespawnChance3` | int | 50 | Probabilità respawn livello 3 (%) |
| `DeathWishRespawnChance4` | int | 75 | Probabilità respawn livello 4 (%) |
| `DeathWishRespawnChance5` | int | 100 | Probabilità respawn livello 5 (%) |

---

## Esempio Configurazione

```json
{
  "Version": 10,
  "DogtagEnabled": true,
  "GeneralDogtagSettings": {
    "AllowDogtagLooting": true,
    "DisableSuicideDogtagLooting": false,
    "EnableDogtagRespawnDelay": false,
    "DogtagRespawnDelaySeconds": 300,
    "ShowPlayerKills": true,
    "ShowAIKills": true,
    "DistanceUnit": 0,
    "ShowDistance": true,
    "KeepKillCountsOnDeath": true
  },
  "DeathWishSettings": {
    "DeathWishEnabled": true,
    "ShowLifetimeToDeathWish": true,
    "ShowPlayerKillsToDeathWish": true,
    "ShowAIKillsToDeathWish": true,
    "DeathWishConditionType": 0,
    "KeepDeathWishOnDeath": true,
    "ShowSpecialPhrase": 1,
    "DeathWishRespawnEnabled": true
  },
  "NeedDeathWishTimeSettings": {
    "NeedDeathWishInitialTime": 21600,
    "NeedDeathWishLevel1Time": 36000,
    "NeedDeathWishLevel2Time": 54000,
    "NeedDeathWishLevel3Time": 72000,
    "NeedDeathWishLevel4Time": 86400,
    "NeedDeathWishLevel5Time": 129600
  },
  "NeedDeathWishPlayerKillsSettings": {
    "NeedDeathWishPlayerKills1": 50,
    "NeedDeathWishPlayerKills2": 100,
    "NeedDeathWishPlayerKills3": 200,
    "NeedDeathWishPlayerKills4": 300,
    "NeedDeathWishPlayerKills5": 500
  },
  "NeedDeathWishAIKillsSettings": {
    "NeedDeathWishAIKills1": 50,
    "NeedDeathWishAIKills2": 100,
    "NeedDeathWishAIKills3": 200,
    "NeedDeathWishAIKills4": 300,
    "NeedDeathWishAIKills5": 500
  },
  "DeathWishRespawnSettings": {
    "DeathWishRespawnChance1": 10,
    "DeathWishRespawnChance2": 30,
    "DeathWishRespawnChance3": 50,
    "DeathWishRespawnChance4": 75,
    "DeathWishRespawnChance5": 100
  }
}
```

---

## Relazione con DogtagTradeSettings

| File | Scopo |
|------|------|
| **DogtagSettings.json** | Comportamento base dogtag (looting, Death Wish, visualizzazione, ecc.) |
| **DogtagTradeSettings.json** | Sistema scambio dogtag (scambio oggetti, condizioni, ecc.) |

`DogtagEnabled` in DogtagSettings.json deve essere `true` per utilizzare il sistema negozio scambio dogtag.

[Impostazioni Scambio Dogtag →](DogtagTradeSettings)