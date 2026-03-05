# Enhanced Dogtags - 狗牌設定维基

SH00TM3P1Z (SMPZ) 制作的 Enhanced Dogtags 模组的所有狗牌相关設定说明文档。

> **实時同步：** 所有狗牌設定（DogtagSettings、AIDogtagSettings、DogtagTradeSettings、分类 JSON 等）在**保存文件時实時同步到服务器**，无需重启服务器即可应用配置更改。

## 目录

1. [配置文件路径](#配置文件路径)
2. [狗牌基本設定 (DogtagSettings)](#狗牌基本設定)
3. [AI 狗牌設定 (AIDogtagSettings)](#ai-狗牌設定)
4. [狗牌交易設定 (DogtagTradeSettings)](#狗牌交易設定)
5. [交易条件 (TradeConditions)](#交易条件)
6. [物品交易条件 (ItemTradeConditions)](#物品交易条件)
7. [交易物品列表](#交易物品列表)
8. [狗牌生命周期数据 (DogtagLifetime)](#狗牌生命周期数据)

---

## 配置文件路径

所有配置文件均相对于服务器配置文件夹保存。

| 路径 | 说明 |
|------|------|
| `$profile:EnhancedDogtag\Config\` | 配置文件夹 |
| `$profile:EnhancedDogtag\Config\DogtagSettings.json` | 狗牌基本設定（拾取、Death Wish 等） |
| `$profile:EnhancedDogtag\Config\AIDogtagSettings.json` | AI 狗牌設定 |
| `$profile:EnhancedDogtag\Config\DogtagTradeSettings.json` | 狗牌交易主設定 |
| `$profile:EnhancedDogtag\Config\Category\` | 分类交易物品 JSON |
| `$profile:EnhancedDogtag\Data\DogtagLifetime.json` | 狗牌生命周期数据（自动生成，不建议手动编辑） |

> **注意：** `$profile:` 為 DayZ 服务器配置路径。（例如：`DayZServer\Profiles\`）

---

## 通过模组管理器設定

若已安装 `SMPZ Mod Manager`，**管理员**可在游戏内模组管理器菜单中更改所有狗牌設定。
<img width="1339" height="806" alt="스크린샷 2026-03-05 151403" src="https://github.com/user-attachments/assets/b7cf9f89-93ce-461d-8715-56c54838e2d9" />

---

## 狗牌基本設定

[狗牌基本設定详细文档 →](DogtagSettings)

---

## AI 狗牌設定

[AI 狗牌設定详细文档 →](AIDogtagSettings)

---

## 狗牌交易設定

[交易設定详细文档 →](DogtagTradeSettings)

---

## 交易条件 (TradeConditions)

[交易条件详细文档 →](TradeConditions)

---

## 物品交易条件 (ItemTradeConditions)

[物品交易条件详细文档 →](ItemTradeConditions)

---

## 交易物品列表

[交易物品列表详细文档 →](TradeItemList)

---

## 狗牌生命周期数据 (DogtagLifetime)

[狗牌生命周期数据详细文档 →](DogtagLifetimeData)