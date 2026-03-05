# Enhanced Dogtags - Wiki de Configuración de Placas

Documentación de todas las configuraciones relacionadas con placas del mod Enhanced Dogtags de SH00TM3P1Z (SMPZ).

> **Sincronización en tiempo real:** Todas las configuraciones de placas (DogtagSettings, AIDogtagSettings, DogtagTradeSettings, archivos JSON por categoría, etc.) se **aplican al servidor en tiempo real al guardar los archivos**, por lo que no se requiere reiniciar el servidor para aplicar cambios.

## Índice

1. [Rutas de archivos de configuración](#config-file-paths)
2. [Configuración de placas (DogtagSettings)](#dogtag-settings)
3. [Configuración de placas IA (AIDogtagSettings)](#ai-dogtag-settings)
4. [Configuración de comercio de placas (DogtagTradeSettings)](#dogtag-trade-settings)
5. [Condiciones de comercio (TradeConditions)](#trade-conditions)
6. [Condiciones de comercio por objeto (ItemTradeConditions)](#item-trade-conditions)
7. [Lista de objetos comerciables](#trade-item-list)
8. [Datos de vida de placas (DogtagLifetime)](#dogtag-lifetime-data)

---

## Rutas de archivos de configuración

Todos los archivos de configuración se almacenan relativos a la carpeta de perfil del servidor.

| Ruta | Descripción |
|------|------|
| `$profile:EnhancedDogtag\Config\` | Carpeta de configuración |
| `$profile:EnhancedDogtag\Config\DogtagSettings.json` | Configuración base de placas (saqueo, Death Wish, etc.) |
| `$profile:EnhancedDogtag\Config\AIDogtagSettings.json` | Configuración de placas IA |
| `$profile:EnhancedDogtag\Config\DogtagTradeSettings.json` | Configuración principal de comercio de placas |
| `$profile:EnhancedDogtag\Config\Category\` | Archivos JSON de objetos comerciables por categoría |
| `$profile:EnhancedDogtag\Data\DogtagLifetime.json` | Datos de vida de placas (generado automáticamente, no se recomienda editar manualmente) |

> **Nota:** `$profile:` se refiere a la ruta del perfil del servidor DayZ. (ej: `DayZServer\Profiles\`)

---

## Configuración desde el Mod Manager

Si `SMPZ Mod Manager` está instalado, los administradores pueden cambiar todas las configuraciones de placas en el juego desde el menú del mod manager.
<img width="1339" height="806" alt="스크린샷 2026-03-05 151403" src="https://github.com/user-attachments/assets/b7cf9f89-93ce-461d-8715-56c54838e2d9" />

---

## Configuración de placas

[Documentación completa de configuración de placas →](DogtagSettings)

---

## Configuración de placas IA

[Documentación completa de configuración de placas IA →](AIDogtagSettings)

---

## Configuración de comercio de placas

[Documentación completa de configuración de comercio →](DogtagTradeSettings)

---

## Condiciones de comercio (TradeConditions)

[Documentación completa de condiciones de comercio →](TradeConditions)

---

## Condiciones de comercio por objeto (ItemTradeConditions)

[Documentación completa de condiciones de comercio por objeto →](ItemTradeConditions)

---

## Lista de objetos comerciables

[Documentación completa de lista de objetos comerciables →](TradeItemList)

---

## Datos de vida de placas (DogtagLifetime)

[Documentación completa de datos de vida de placas →](DogtagLifetimeData)