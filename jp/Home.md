# Enhanced Dogtags - ドッグタグ設定ウィキ

SH00TM3P1Z (SMPZ) が制作した Enhanced Dogtags モッドの全ドッグタグ関連設定を説明するドキュメントです。

> **リアルタイム同期:** 全ドッグタグ設定（DogtagSettings、AIDogtagSettings、DogtagTradeSettings、カテゴリ別JSON等）は**ファイル保存時にリアルタイムでサーバーに反映**されるため、サーバー再起動なしで設定変更が適用されます。

## 目次

1. [設定ファイルパス](#設定ファイルパス)
2. [ドッグタグ基本設定 (DogtagSettings)](#ドッグタグ基本設定)
3. [AI ドッグタグ設定 (AIDogtagSettings)](#ai-ドッグタグ設定)
4. [ドッグタグ取引設定 (DogtagTradeSettings)](#ドッグタグ取引設定)
5. [取引条件 (TradeConditions)](#取引条件)
6. [アイテム別取引条件 (ItemTradeConditions)](#アイテム別取引条件)
7. [取引アイテム一覧](#取引アイテム一覧)
8. [ドッグタグライフタイムデータ (DogtagLifetime)](#ドッグタグライフタイムデータ)

---

## 設定ファイルパス

全設定ファイルはサーバープロファイルフォルダを基準に保存されます。

| パス | 説明 |
|------|------|
| `$profile:EnhancedDogtag\Config\` | 設定フォルダ |
| `$profile:EnhancedDogtag\Config\DogtagSettings.json` | ドッグタグ基本設定（ルーティング、Death Wish等） |
| `$profile:EnhancedDogtag\Config\AIDogtagSettings.json` | AI ドッグタグ設定 |
| `$profile:EnhancedDogtag\Config\DogtagTradeSettings.json` | ドッグタグ取引メイン設定 |
| `$profile:EnhancedDogtag\Config\Category\` | カテゴリ別取引アイテムJSON |
| `$profile:EnhancedDogtag\Data\DogtagLifetime.json` | ドッグタグライフタイムデータ（自動生成、手動編集非推奨） |

> **注意:** `$profile:` は DayZ サーバープロファイルパスです。（例: `DayZServer\Profiles\`）

---

## モッドマネージャーでの設定

`SMPZ Mod Manager` がインストールされていれば、**管理者権限**で全ドッグタグ設定をゲーム内モッドマネージャーメニューから変更できます。
<img width="1339" height="806" alt="스크린샷 2026-03-05 151403" src="https://github.com/user-attachments/assets/b7cf9f89-93ce-461d-8715-56c54838e2d9" />

---

## ドッグタグ基本設定

[基本設定詳細ドキュメント →](DogtagSettings)

---

## AI ドッグタグ設定

[AI ドッグタグ設定詳細ドキュメント →](AIDogtagSettings)

---

## ドッグタグ取引設定

[取引設定詳細ドキュメント →](DogtagTradeSettings)

---

## 取引条件 (TradeConditions)

[取引条件詳細ドキュメント →](TradeConditions)

---

## アイテム別取引条件 (ItemTradeConditions)

[アイテム別取引条件詳細ドキュメント →](ItemTradeConditions)

---

## 取引アイテム一覧

[取引アイテム一覧詳細ドキュメント →](TradeItemList)

---

## ドッグタグライフタイムデータ (DogtagLifetime)

[ドッグタグライフタイムデータ詳細ドキュメント →](DogtagLifetimeData)