# 狗牌生命周期数据 (DogtagLifetime.json)

**檔案路徑:** `$profile:EnhancedDogtag\Data\DogtagLifetime.json`

服务器**自动保存**每位玩家狗牌生存時间、击杀数、Death Wish 等级等的数据文件。非配置文件，為**运行時数据**，不建议手动编辑。

---

## 用途

- **Death Wish 维持：** `KeepDeathWishOnDeath` 启用時，死亡時 Death Wish 等级在下次重生時恢复
- **击杀数维持：** `KeepKillCountsOnDeath` 启用時，死亡時玩家/AI 击杀数反映到新狗牌
- **初始化：** 重置所有玩家狗牌信息
- 将先前数据应用到玩家死亡時生成的狗牌

---

## JSON 结构

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

## PlayerEntries 选项说明

| 选项 | 类型 | 说明 |
|------|------|------|
| `PlayerName` | string | 玩家名称 |
| `PlayerId` | string | 玩家唯一标识（Base64 编码） |
| `LifetimeSeconds` | int | 最后生存時间（秒） |
| `TagType` | string | 狗牌类型（例如：`SMPZ_Dogtag_DeathWish_1`～`5`、基础狗牌等） |
| `BloodType` | string | 血型（O+、O-、A+、A-、B+、B-、AB+、AB-、None） |
| `PlayerKillCount` | int | 玩家击杀数 |
| `AIKillCount` | int | AI 击杀数 |
| `LastUpdateTime` | string | 最后更新時间 |

---

## 注意事项

- **自动生成：** 服务器在玩家死亡或狗牌生成時自动更新。
- **最多 1000 人：** 最多保存 1000 名玩家，按生存時间从短到长删除旧条目。
- **不建议手动编辑：** 错误格式或数据可能导致异常。
- **Config vs Data：** `Config\` 文件夹為配置，`Data\` 文件夹為运行時数据。

---

## 详细行為

**LifetimeSeconds：** 玩家最后生存時间（秒）。保存死亡時刻的生存時间。

**TagType：** 下次重生時生成的狗牌类型。保存為 `SMPZ_Dogtag_DeathWish_1` 至 `5`，或基础狗牌类型。

**PlayerKillCount, AIKillCount：** KeepKillCountsOnDeath 為 true 時反映到新狗牌的击杀数。

**KeepDeathWishOnDeath 联动：** 此值為 true 時，死亡后 DogtagLifetime.json 中的 TagType、击杀数等会保留，并在下次重生時应用到新狗牌。

[狗牌基本設定 →](DogtagSettings)