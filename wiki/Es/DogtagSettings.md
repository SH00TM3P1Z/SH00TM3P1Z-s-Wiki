# Configuración de placas (DogtagSettings)

**Ruta del archivo:** `$profile:EnhancedDogtag\Config\DogtagSettings.json`

Archivo de configuración que define el comportamiento base de las placas (saqueo, Death Wish, opciones de visualización, etc.). Es **independiente del comercio de placas** y controla el funcionamiento del objeto placa en sí.

---

## Configuración de nivel superior

| Opción | Tipo | Predeterminado | Descripción |
|------|------|--------|------|
| `Version` | int | 10 | Versión de configuración (no se recomienda modificar) |
| `DogtagEnabled` | bool | true | Activar sistema de placas (1=activado, 0=desactivado) |

---

## GeneralDogtagSettings (Configuración general de placas)

| Opción | Tipo | Predeterminado | Descripción |
|------|------|--------|------|
| `AllowDogtagLooting` | bool | true | Permitir saquear placas al morir |
| `DisableSuicideDogtagLooting` | bool | false | Desactivar saqueo de placas en suicidio |
| `EnableDogtagRespawnDelay` | bool | false | Activar retraso de saqueo de placas tras respawn |
| `DogtagRespawnDelaySeconds` | int | 300 | Segundos de retraso antes de poder saquear placas tras spawn |
| `ShowPlayerKills` | bool | true | Mostrar número de bajas de jugadores |
| `ShowAIKills` | bool | true | Mostrar número de bajas de IA |
| `DistanceUnit` | int | 0 | Unidad de distancia (0=metros, 1=yardas) |
| `ShowDistance` | bool | true | Mostrar distancia |
| `KeepKillCountsOnDeath` | bool | true | Mantener conteo de bajas al morir |

### Comportamiento detallado de GeneralDogtagSettings

**AllowDogtagLooting:** Si es false, nadie puede saquear placas de cadáveres. Si es true, el saqueo está permitido cuando se cumplen otras condiciones.

**DisableSuicideDogtagLooting:** Si es true, las placas de jugadores que murieron por suicidio nunca pueden saquearse. Si es false, las placas de suicidio pueden saquearse (según otras condiciones).

**EnableDogtagRespawnDelay / DogtagRespawnDelaySeconds:** Solo aplica a muertes por suicidio. Si es true, la placa solo puede saquearse tras los segundos especificados (300 por defecto, 5 min) desde la muerte. Si es false, las placas de suicidio pueden saquearse de inmediato.

**ShowPlayerKills, ShowAIKills:** Activa o desactiva la visualización de bajas de jugadores e IA en el objeto placa.

**DistanceUnit:** 0 = metros (m), 1 = yardas (yd) para mostrar la distancia en la información de placa de muerte del jugador.

**KeepKillCountsOnDeath:** Si es true, los conteos de bajas de la vida anterior se guardan en DogtagLifetime.json y se aplican a la nueva placa. Si es false, los conteos se reinician al morir.

---

## DeathWishSettings (Configuración Death Wish)

| Opción | Tipo | Predeterminado | Descripción |
|------|------|--------|------|
| `DeathWishEnabled` | bool | true | Activar función Death Wish |
| `ShowLifetimeToDeathWish` | bool | true | Mostrar tiempo de supervivencia hasta Death Wish |
| `ShowPlayerKillsToDeathWish` | bool | true | Mostrar bajas de jugadores hasta Death Wish |
| `ShowAIKillsToDeathWish` | bool | true | Mostrar bajas de IA hasta Death Wish |
| `DeathWishConditionType` | int | 0 | Tipo de condición de bajas Death Wish (0 = jugador e IA, 1 = jugador, 2 = IA) |
| `KeepDeathWishOnDeath` | bool | true | Mantener nivel Death Wish al morir |
| `ShowSpecialPhrase` | int | 1 | Modo de visualización de frase especial Death Wish |
| `DeathWishRespawnEnabled` | bool | true | Activar respawn Death Wish (respawn en última ubicación de muerte) |

### Comportamiento detallado de DeathWishSettings

**DeathWishConditionType:** Condición de bajas necesaria para subir de nivel Death Wish.
- 0: Tanto bajas de jugadores como de IA deben alcanzar el objetivo
- 1: Solo las bajas de jugadores deben alcanzar el objetivo (bajas de IA ignoradas)
- 2: Solo las bajas de IA deben alcanzar el objetivo (bajas de jugadores ignoradas)

**KeepDeathWishOnDeath:** Si es true, el nivel Death Wish se mantiene tras morir y hacer respawn. Se guarda en DogtagLifetime.json.

**DeathWishRespawnEnabled:** Si es true, se aplica la probabilidad de respawn en la última ubicación de muerte según el nivel Death Wish. Usa las probabilidades de DeathWishRespawnSettings.

---

## NeedDeathWishTimeSettings (Condiciones de tiempo Death Wish)

Todos los valores de tiempo están en **segundos**. (ej: 21600 = 6 horas)

**Comportamiento:** Tiempo de supervivencia requerido por nivel. NeedDeathWishInitialTime es el tiempo para pasar de placa normal a Death Wish. Los tiempos por nivel son para alcanzar el siguiente nivel. Las condiciones de bajas (según DeathWishConditionType) también deben cumplirse.

| Opción | Tipo | Predeterminado | Descripción |
|------|------|--------|------|
| `NeedDeathWishInitialTime` | int | 21600 | Tiempo de supervivencia para Death Wish base |
| `NeedDeathWishLevel1Time` | int | 36000 | Tiempo de supervivencia para nivel 1 |
| `NeedDeathWishLevel2Time` | int | 54000 | Tiempo de supervivencia para nivel 2 |
| `NeedDeathWishLevel3Time` | int | 72000 | Tiempo de supervivencia para nivel 3 |
| `NeedDeathWishLevel4Time` | int | 86400 | Tiempo de supervivencia para nivel 4 |
| `NeedDeathWishLevel5Time` | int | 129600 | Tiempo de supervivencia para nivel 5 |

---

## NeedDeathWishPlayerKillsSettings (Condiciones de bajas de jugadores para subir nivel Death Wish)

| Opción | Tipo | Predeterminado | Descripción |
|------|------|--------|------|
| `NeedDeathWishPlayerKills1` | int | 50 | Bajas de jugadores para nivel 1 |
| `NeedDeathWishPlayerKills2` | int | 100 | Bajas de jugadores para nivel 2 |
| `NeedDeathWishPlayerKills3` | int | 200 | Bajas de jugadores para nivel 3 |
| `NeedDeathWishPlayerKills4` | int | 300 | Bajas de jugadores para nivel 4 |
| `NeedDeathWishPlayerKills5` | int | 500 | Bajas de jugadores para nivel 5 |

---

## NeedDeathWishAIKillsSettings (Condiciones de bajas de IA para subir nivel Death Wish)

| Opción | Tipo | Predeterminado | Descripción |
|------|------|--------|------|
| `NeedDeathWishAIKills1` | int | 50 | Bajas de IA para nivel 1 |
| `NeedDeathWishAIKills2` | int | 100 | Bajas de IA para nivel 2 |
| `NeedDeathWishAIKills3` | int | 200 | Bajas de IA para nivel 3 |
| `NeedDeathWishAIKills4` | int | 300 | Bajas de IA para nivel 4 |
| `NeedDeathWishAIKills5` | int | 500 | Bajas de IA para nivel 5 |

---

## DeathWishRespawnSettings (Probabilidad de respawn Death Wish)

Probabilidad (%) de respawn en última ubicación de muerte por nivel Death Wish.

**Comportamiento:** Al morir se genera un valor aleatorio de 0 a 99. Si es menor que la probabilidad del nivel, el jugador hace respawn en la última ubicación de muerte. Ej: DeathWishRespawnChance3 de 50 = 50% de probabilidad. 100 = siempre respawn.

| Opción | Tipo | Predeterminado | Descripción |
|------|------|--------|------|
| `DeathWishRespawnChance1` | int | 10 | Probabilidad de respawn nivel 1 (%) |
| `DeathWishRespawnChance2` | int | 30 | Probabilidad de respawn nivel 2 (%) |
| `DeathWishRespawnChance3` | int | 50 | Probabilidad de respawn nivel 3 (%) |
| `DeathWishRespawnChance4` | int | 75 | Probabilidad de respawn nivel 4 (%) |
| `DeathWishRespawnChance5` | int | 100 | Probabilidad de respawn nivel 5 (%) |

---

## Ejemplo de configuración

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

## Relación con DogtagTradeSettings

| Archivo | Propósito |
|------|------|
| **DogtagSettings.json** | Comportamiento base de placas (saqueo, Death Wish, visualización, etc.) |
| **DogtagTradeSettings.json** | Sistema de comercio de placas (intercambio de objetos, condiciones, etc.) |

`DogtagEnabled` en DogtagSettings.json debe ser `true` para usar el sistema de tienda de comercio de placas.

[Configuración de comercio de placas →](DogtagTradeSettings)