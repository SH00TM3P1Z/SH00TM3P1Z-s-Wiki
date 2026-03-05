# Datos de vida de placas (DogtagLifetime.json)

**Ruta del archivo:** `$profile:EnhancedDogtag\Data\DogtagLifetime.json`

Archivo de datos donde el servidor **guarda automáticamente** tiempo de supervivencia, conteo de bajas, nivel Death Wish, etc. por jugador. Es **datos en tiempo de ejecución**, no configuración, por lo que no se recomienda editar manualmente.

---

## Propósito

- **Persistencia Death Wish:** Cuando `KeepDeathWishOnDeath` está activado, el nivel Death Wish se restaura en el siguiente respawn tras la muerte
- **Persistencia de conteo de bajas:** Cuando `KeepKillCountsOnDeath` está activado, los conteos de bajas se aplican a la nueva placa al morir
- **Reinicio:** Se puede reiniciar la información de placas de todos los jugadores
- Aplicar datos anteriores a la placa creada al morir el jugador

---

## Estructura JSON

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

## Descripción de opciones de PlayerEntries

| Opción | Tipo | Descripción |
|------|------|------|
| `PlayerName` | string | Nombre del jugador |
| `PlayerId` | string | ID único del jugador (codificado Base64) |
| `LifetimeSeconds` | int | Último tiempo de supervivencia (segundos) |
| `TagType` | string | Tipo de placa (ej: `SMPZ_Dogtag_DeathWish_1` ~ `5`, placa base) |
| `BloodType` | string | Tipo de sangre (O+, O-, A+, A-, B+, B-, AB+, AB-, None) |
| `PlayerKillCount` | int | Conteo de bajas de jugadores |
| `AIKillCount` | int | Conteo de bajas de IA |
| `LastUpdateTime` | string | Última hora de actualización |

---

## Notas

- **Generado automáticamente:** El servidor actualiza automáticamente al morir el jugador o crear placas.
- **Máximo 1000 jugadores:** Se almacenan hasta 1000 jugadores. Las entradas antiguas se eliminan cuando está lleno, ordenadas por menor tiempo de supervivencia.
- **No se recomienda editar manualmente:** Formato o datos incorrectos pueden causar fallos.
- **Config vs Data:** `Config\` es para configuración, `Data\` es para datos en tiempo de ejecución.

---

## Comportamiento detallado

**LifetimeSeconds:** Último tiempo de supervivencia del jugador en segundos. Se guarda el tiempo en el momento de la muerte.

**TagType:** Tipo de placa a crear en el siguiente respawn. Se guarda como `SMPZ_Dogtag_DeathWish_1` a `5`, o tipo de placa base.

**PlayerKillCount, AIKillCount:** Conteos de bajas aplicados a la nueva placa cuando KeepKillCountsOnDeath es true.

**Integración KeepDeathWishOnDeath:** Cuando es true, TagType, conteos de bajas, etc. en DogtagLifetime.json persisten tras la muerte y se aplican a la nueva placa en el siguiente respawn.

[Configuración de placas →](DogtagSettings)