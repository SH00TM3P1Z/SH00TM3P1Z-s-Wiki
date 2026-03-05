# ドッグタグライフタイムデータ (DogtagLifetime.json)

**ファイルパス:** `$profile:EnhancedDogtag\Data\DogtagLifetime.json`

プレイヤー別ドッグタグ生存時間、キル数、Death Wish レベル等を**サーバーが自動保存**するデータファイル。設定ファイルではなく**ランタイムデータ**のため、手動編集は推奨しません。

---

## 用途

- **Death Wish 維持:** `KeepDeathWishOnDeath` が有効時、死亡時 Death Wish レベルを次リスポーンで復元
- **キルカウント維持:** `KeepKillCountsOnDeath` が有効時、死亡時プレイヤー/AI キル数を新ドッグタグに反映
- **初期化:** 全プレイヤーのドッグタグ情報を初期化
- プレイヤー死亡時に生成されるドッグタグに以前のデータを適用

---

## JSON 構造

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

## PlayerEntries 項目説明

| 項目 | タイプ | 説明 |
|------|------|------|
| `PlayerName` | string | プレイヤー名 |
| `PlayerId` | string | プレイヤー固有識別子（Base64 エンコード） |
| `LifetimeSeconds` | int | 最終生存時間（秒） |
| `TagType` | string | ドッグタグタイプ（例: `SMPZ_Dogtag_DeathWish_1`～`5`、基本ドッグタグ等） |
| `BloodType` | string | 血液型（O+、O-、A+、A-、B+、B-、AB+、AB-、None） |
| `PlayerKillCount` | int | プレイヤーキル数 |
| `AIKillCount` | int | AI キル数 |
| `LastUpdateTime` | string | 最終更新日時 |

---

## 注意事項

- **自動生成:** サーバーがプレイヤー死亡またはドッグタグ生成時に自動更新します。
- **最大1000人:** 保存されるプレイヤー数は最大1000人。生存時間が短い順に古い項目が削除されます。
- **手動編集非推奨:** 不正な形式やデータは誤動作を引き起こす可能性があります。
- **Config vs Data:** `Config\` フォルダは設定、`Data\` フォルダはランタイムデータです。

---

## 詳細動作

**LifetimeSeconds:** プレイヤーが最後に生存した時間（秒）。死亡時点の生存時間が保存されます。

**TagType:** 次リスポーン時に生成されるドッグタグタイプ。`SMPZ_Dogtag_DeathWish_1` から `5` まで、または基本ドッグタグタイプが保存されます。

**PlayerKillCount, AIKillCount:** KeepKillCountsOnDeath が true の時に新ドッグタグに反映されるキル数です。

**KeepDeathWishOnDeath 連携:** この値が true の場合、死亡後 DogtagLifetime.json の TagType、キル数等が維持され、次リスポーン時に新ドッグタグに適用されます。

[ドッグタグ基本設定 →](DogtagSettings)