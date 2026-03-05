# Настройки жетона (DogtagSettings)

**Путь к файлу:** `$profile:EnhancedDogtag\Config\DogtagSettings.json`

Этот файл конфигурации определяет базовое поведение жетона (лут, Death Wish, отображение и т.д.). Он **отдельно от обмена жетонов** и управляет работой самого предмета жетона.

---

## Основные настройки

| Опция | Тип | По умолчанию | Описание |
|------|------|--------|------|
| `Version` | int | 10 | Версия конфига (изменять не рекомендуется) |
| `DogtagEnabled` | bool | true | Включить систему жетонов (1=вкл, 0=выкл) |

---

## GeneralDogtagSettings (Общие настройки жетона)

| Опция | Тип | По умолчанию | Описание |
|------|------|--------|------|
| `AllowDogtagLooting` | bool | true | Разрешить лут жетонов при смерти |
| `DisableSuicideDogtagLooting` | bool | false | Запретить лут жетонов при самоубийстве |
| `EnableDogtagRespawnDelay` | bool | false | Включить задержку лута жетона после респавна |
| `DogtagRespawnDelaySeconds` | int | 300 | Задержка в секундах перед возможностью лута жетона после спавна |
| `ShowPlayerKills` | bool | true | Показывать количество убийств игроков |
| `ShowAIKills` | bool | true | Показывать количество убийств ИИ |
| `DistanceUnit` | int | 0 | Единица расстояния (0=метры, 1=ярды) |
| `ShowDistance` | bool | true | Показывать расстояние |
| `KeepKillCountsOnDeath` | bool | true | Сохранять счёт убийств при смерти |

### Подробное поведение GeneralDogtagSettings

**AllowDogtagLooting:** Если false, никто не может лутить жетоны с трупов. Если true, лут разрешён при условии выполнения других условий.

**DisableSuicideDogtagLooting:** Если true, жетоны игроков, умерших от самоубийства, нельзя лутить. Если false, жетоны при самоубийстве можно лутить (при соблюдении других условий).

**EnableDogtagRespawnDelay / DogtagRespawnDelaySeconds:** Применяется только к смерти от самоубийства. Если true, жетон можно лутить только после указанного количества секунд (по умолчанию 300, 5 минут) с момента смерти. Если false, жетоны при самоубийстве можно лутить сразу.

**ShowPlayerKills, ShowAIKills:** Переключение отображения счёта убийств игроков и ИИ на жетоне.

**DistanceUnit:** 0 = метры (м), 1 = ярды (yd) для отображения расстояния в информации о смерти игрока.

**KeepKillCountsOnDeath:** Если true, счёт убийств из предыдущей жизни сохраняется в DogtagLifetime.json и применяется к новому жетону. Если false, счёт сбрасывается при смерти.

---

## DeathWishSettings (Настройки Death Wish)

| Опция | Тип | По умолчанию | Описание |
|------|------|--------|------|
| `DeathWishEnabled` | bool | true | Включить функцию Death Wish |
| `ShowLifetimeToDeathWish` | bool | true | Показывать время выживания до Death Wish |
| `ShowPlayerKillsToDeathWish` | bool | true | Показывать убийства игроков до Death Wish |
| `ShowAIKillsToDeathWish` | bool | true | Показывать убийства ИИ до Death Wish |
| `DeathWishConditionType` | int | 0 | Тип условия убийств для Death Wish (0 = игрок и ИИ, 1 = игрок, 2 = ИИ) |
| `KeepDeathWishOnDeath` | bool | true | Сохранять уровень Death Wish при смерти |
| `ShowSpecialPhrase` | int | 1 | Режим отображения специальной фразы Death Wish |
| `DeathWishRespawnEnabled` | bool | true | Включить респавн Death Wish (респавн на месте последней смерти) |

### Подробное поведение DeathWishSettings

**DeathWishConditionType:** Условие убийств для повышения уровня Death Wish.
- 0: И убийства игроков, и убийства ИИ должны достичь цели
- 1: Только убийства игроков должны достичь цели (убийства ИИ игнорируются)
- 2: Только убийства ИИ должны достичь цели (убийства игроков игнорируются)

**KeepDeathWishOnDeath:** Если true, уровень Death Wish сохраняется после смерти и респавна. Хранится в DogtagLifetime.json.

**DeathWishRespawnEnabled:** Если true, применяется шанс респавна на месте последней смерти в зависимости от уровня Death Wish. Использует вероятности DeathWishRespawnSettings.

---

## NeedDeathWishTimeSettings (Временные условия Death Wish)

Все значения времени в **секундах**. (напр., 21600 = 6 часов)

**Поведение:** Время выживания, необходимое для каждого уровня. NeedDeathWishInitialTime — время для перехода от обычного жетона к Death Wish. Времена по уровням — время выживания для достижения следующего уровня. Условия убийств (по DeathWishConditionType) также должны выполняться вместе со временем.

| Опция | Тип | По умолчанию | Описание |
|------|------|--------|------|
| `NeedDeathWishInitialTime` | int | 21600 | Время выживания для базового Death Wish |
| `NeedDeathWishLevel1Time` | int | 36000 | Время выживания для уровня 1 |
| `NeedDeathWishLevel2Time` | int | 54000 | Время выживания для уровня 2 |
| `NeedDeathWishLevel3Time` | int | 72000 | Время выживания для уровня 3 |
| `NeedDeathWishLevel4Time` | int | 86400 | Время выживания для уровня 4 |
| `NeedDeathWishLevel5Time` | int | 129600 | Время выживания для уровня 5 |

---

## NeedDeathWishPlayerKillsSettings (Условия убийств игроков для Death Wish)

| Опция | Тип | По умолчанию | Описание |
|------|------|--------|------|
| `NeedDeathWishPlayerKills1` | int | 50 | Убийств игроков для уровня 1 |
| `NeedDeathWishPlayerKills2` | int | 100 | Убийств игроков для уровня 2 |
| `NeedDeathWishPlayerKills3` | int | 200 | Убийств игроков для уровня 3 |
| `NeedDeathWishPlayerKills4` | int | 300 | Убийств игроков для уровня 4 |
| `NeedDeathWishPlayerKills5` | int | 500 | Убийств игроков для уровня 5 |

---

## NeedDeathWishAIKillsSettings (Условия убийств ИИ для Death Wish)

| Опция | Тип | По умолчанию | Описание |
|------|------|--------|------|
| `NeedDeathWishAIKills1` | int | 50 | Убийств ИИ для уровня 1 |
| `NeedDeathWishAIKills2` | int | 100 | Убийств ИИ для уровня 2 |
| `NeedDeathWishAIKills3` | int | 200 | Убийств ИИ для уровня 3 |
| `NeedDeathWishAIKills4` | int | 300 | Убийств ИИ для уровня 4 |
| `NeedDeathWishAIKills5` | int | 500 | Убийств ИИ для уровня 5 |

---

## DeathWishRespawnSettings (Шанс респавна Death Wish)

Шанс (%) респавна на месте последней смерти по уровню Death Wish.

**Поведение:** При смерти генерируется случайное значение от 0 до 99. Если оно меньше шанса уровня, игрок респавнится на месте последней смерти. Напр., DeathWishRespawnChance3 = 50 означает 50% шанс респавна. 100 означает всегда респавн.

| Опция | Тип | По умолчанию | Описание |
|------|------|--------|------|
| `DeathWishRespawnChance1` | int | 10 | Шанс респавна уровня 1 (%) |
| `DeathWishRespawnChance2` | int | 30 | Шанс респавна уровня 2 (%) |
| `DeathWishRespawnChance3` | int | 50 | Шанс респавна уровня 3 (%) |
| `DeathWishRespawnChance4` | int | 75 | Шанс респавна уровня 4 (%) |
| `DeathWishRespawnChance5` | int | 100 | Шанс респавна уровня 5 (%) |

---

## Пример конфигурации

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

## Связь с DogtagTradeSettings

| Файл | Назначение |
|------|------|
| **DogtagSettings.json** | Базовое поведение жетона (лут, Death Wish, отображение и т.д.) |
| **DogtagTradeSettings.json** | Система обмена жетонов (обмен предметы, условия и т.д.) |

`DogtagEnabled` в DogtagSettings.json должен быть `true` для использования системы магазина обмена жетонов.

[Настройки обмена жетонов →](DogtagTradeSettings)