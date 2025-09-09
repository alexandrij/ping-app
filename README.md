# Ping App (PWA) — React + TypeScript + Vite

PWA‑приложение. 
Настроено на установку как приложение и оффлайн‑кеширование через сервис‑воркер (vite-plugin-pwa).

## Скрипты

```bash
npm install        # установка зависимостей
npm run dev        # запуск dev-сервера
npm run build      # сборка продакшн
npm run preview    # предпросмотр сборки
```

## PWA
- Используется `vite-plugin-pwa` с `registerType: autoUpdate`.
- Манифест и сервис‑воркер генерируются автоматически при сборке.
- В dev режиме sw также включён (`devOptions.enabled = true`).

## Как проверить установку
1. Запустите `npm run build && npm run preview`.
2. Откройте в браузере адрес предпросмотра, откройте DevTools → Application → Manifest.
3. Нажмите «Install» в адресной строке/меню браузера.
